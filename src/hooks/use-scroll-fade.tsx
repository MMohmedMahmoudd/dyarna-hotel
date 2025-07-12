import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollFadeOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

interface AnimationState {
  isVisible: boolean;
  hasAnimated: boolean;
}

export function useScrollFade(options: ScrollFadeOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = false,
    delay = 0
  } = options;

  const [sections, setSections] = useState<Map<string, AnimationState>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const refsMap = useRef<Map<string, HTMLElement>>(new Map());
  const timeoutsMap = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Create ref for a section
  const createRef = useCallback((sectionId: string) => {
    return (element: HTMLElement | null) => {
      if (element) {
        refsMap.current.set(sectionId, element);
        
        // Initialize state for this section
        setSections(prev => {
          if (!prev.has(sectionId)) {
            const newMap = new Map(prev);
            newMap.set(sectionId, { isVisible: false, hasAnimated: false });
            return newMap;
          }
          return prev;
        });

        // Observe the element
        observerRef.current?.observe(element);
      } else {
        // Clean up when element is removed
        refsMap.current.delete(sectionId);
        const timeout = timeoutsMap.current.get(sectionId);
        if (timeout) {
          clearTimeout(timeout);
          timeoutsMap.current.delete(sectionId);
        }
      }
    };
  }, []);

  // Get animation state for a section
  const getAnimationState = useCallback((sectionId: string): AnimationState => {
    return sections.get(sectionId) || { isVisible: false, hasAnimated: false };
  }, [sections]);

  // Check if section is visible
  const isVisible = useCallback((sectionId: string): boolean => {
    return sections.get(sectionId)?.isVisible || false;
  }, [sections]);

  // Check if section has animated
  const hasAnimated = useCallback((sectionId: string): boolean => {
    return sections.get(sectionId)?.hasAnimated || false;
  }, [sections]);

  // Initialize intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const sectionId = Array.from(refsMap.current.entries())
            .find(([_, el]) => el === element)?.[0];

          if (sectionId) {
            const isIntersecting = entry.isIntersecting;
            const currentState = sections.get(sectionId);

            if (currentState) {
              // Only update if state actually changed
              if (isIntersecting !== currentState.isVisible) {
                const shouldAnimate = isIntersecting && (!triggerOnce || !currentState.hasAnimated);

                if (shouldAnimate && delay > 0) {
                  // Clear any existing timeout
                  const existingTimeout = timeoutsMap.current.get(sectionId);
                  if (existingTimeout) {
                    clearTimeout(existingTimeout);
                  }

                  // Set new timeout
                  const timeout = setTimeout(() => {
                    setSections(prev => {
                      const newMap = new Map(prev);
                      newMap.set(sectionId, {
                        isVisible: true,
                        hasAnimated: true
                      });
                      return newMap;
                    });
                    timeoutsMap.current.delete(sectionId);
                  }, delay);

                  timeoutsMap.current.set(sectionId, timeout);
                } else {
                  setSections(prev => {
                    const newMap = new Map(prev);
                    newMap.set(sectionId, {
                      isVisible: isIntersecting,
                      hasAnimated: currentState.hasAnimated || (isIntersecting && !triggerOnce)
                    });
                    return newMap;
                  });
                }
              }
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    return () => {
      // Clean up timeouts
      timeoutsMap.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsMap.current.clear();
      
      // Disconnect observer
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, sections]);

  // Utility function to create multiple refs at once
  const createMultipleRefs = useCallback((sectionIds: string[]) => {
    const refs: Record<string, (element: HTMLElement | null) => void> = {};
    sectionIds.forEach(id => {
      refs[id] = createRef(id);
    });
    return refs;
  }, [createRef]);

  // Utility function to get CSS classes for animation
  const getAnimationClasses = useCallback((
    sectionId: string,
    animationType: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate' = 'fade'
  ): string => {
    const state = getAnimationState(sectionId);
    const baseClass = `fade-${animationType}`;
    const visibleClass = state.isVisible ? 'fade-visible' : 'fade-hidden';
    return `${baseClass} ${visibleClass}`;
  }, [getAnimationState]);

  return {
    createRef,
    createMultipleRefs,
    getAnimationState,
    isVisible,
    hasAnimated,
    getAnimationClasses,
    sections: Array.from(sections.keys())
  };
} 