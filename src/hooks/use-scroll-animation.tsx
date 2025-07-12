import { useEffect, useRef, useState, useCallback } from "react";

interface ScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

interface AnimationState {
  isVisible: boolean;
  hasAnimated: boolean;
  scrollDirection: 'up' | 'down';
  scrollSpeed: 'slow' | 'medium' | 'fast';
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    triggerOnce = false,
    delay = 0
  } = options;

  const [sections, setSections] = useState<Map<string, AnimationState>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const refsMap = useRef<Map<string, HTMLElement>>(new Map());
  const timeoutsMap = useRef<Map<string, NodeJS.Timeout>>(new Map());
  
  // Scroll tracking
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollSpeed, setScrollSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollDirectionRef = useRef<'up' | 'down'>('down');
  const scrollSpeedRef = useRef<'slow' | 'medium' | 'fast'>('medium');



  // Create ref for a section
  const createRef = useCallback((sectionId: string) => {
    return (element: HTMLElement | null) => {
      if (element) {
        refsMap.current.set(sectionId, element);
        
        // Initialize state for this section
        setSections(prev => {
          if (!prev.has(sectionId)) {
            const newMap = new Map(prev);
            newMap.set(sectionId, { 
              isVisible: false, 
              hasAnimated: false,
              scrollDirection: 'down',
              scrollSpeed: 'medium'
            });
            return newMap;
          }
          return prev;
        });

        // Store section ID on the element for easier lookup
        element.setAttribute('data-section-id', sectionId);
        
        // Observe the element if observer exists
        if (observerRef.current) {
          observerRef.current.observe(element);
        }
      } else {
        // Clean up when element is removed
        const existingElement = refsMap.current.get(sectionId);
        if (existingElement && observerRef.current) {
          observerRef.current.unobserve(existingElement);
        }
        refsMap.current.delete(sectionId);
        const timeout = timeoutsMap.current.get(sectionId);
        if (timeout) {
          clearTimeout(timeout);
          timeoutsMap.current.delete(sectionId);
        }
      }
    };
  }, []);

  // Initialize intersection observer
  useEffect(() => {
    // Enhanced scroll handler
    const handleScrollInternal = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      // Determine scroll direction
      const newDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
      if (newDirection !== scrollDirectionRef.current) {
        scrollDirectionRef.current = newDirection;
        setScrollDirection(newDirection);
      }

      // Determine scroll speed
      let newSpeed: 'slow' | 'medium' | 'fast' = 'medium';
      if (scrollDelta > 50) {
        newSpeed = 'fast';
      } else if (scrollDelta > 20) {
        newSpeed = 'medium';
      } else {
        newSpeed = 'slow';
      }

      if (newSpeed !== scrollSpeedRef.current) {
        scrollSpeedRef.current = newSpeed;
        setScrollSpeed(newSpeed);
      }

      lastScrollY.current = currentScrollY;

      // Clear timeout for scroll speed reset
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Reset scroll speed after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        scrollSpeedRef.current = 'medium';
        setScrollSpeed('medium');
      }, 150);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollInternal, { passive: true });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const sectionId = element.getAttribute('data-section-id');

          if (sectionId) {
            const isIntersecting = entry.isIntersecting;
            setSections(prev => {
              const currentState = prev.get(sectionId);
              
              if (currentState) {
                const shouldAnimate = isIntersecting && (!triggerOnce || !currentState.hasAnimated);

                // Add or remove animate-in-view class directly to the element
                if (shouldAnimate && delay > 0) {
                  // Clear any existing timeout
                  const existingTimeout = timeoutsMap.current.get(sectionId);
                  if (existingTimeout) {
                    clearTimeout(existingTimeout);
                  }

                  // Set new timeout
                  const timeout = setTimeout(() => {
                    element.classList.add('animate-in-view');
                    setSections(prevInner => {
                      const newMap = new Map(prevInner);
                      newMap.set(sectionId, {
                        isVisible: true,
                        hasAnimated: true,
                        scrollDirection: scrollDirectionRef.current,
                        scrollSpeed: scrollSpeedRef.current
                      });
                      return newMap;
                    });
                    timeoutsMap.current.delete(sectionId);
                  }, delay);

                  timeoutsMap.current.set(sectionId, timeout);
                  return prev; // Don't update state immediately
                } else {
                  if (isIntersecting) {
                    element.classList.add('animate-in-view');
                  } else if (!triggerOnce) {
                    element.classList.remove('animate-in-view');
                  }
                  
                  const newMap = new Map(prev);
                  newMap.set(sectionId, {
                    isVisible: isIntersecting,
                    hasAnimated: currentState.hasAnimated || (isIntersecting && !triggerOnce),
                    scrollDirection: scrollDirectionRef.current,
                    scrollSpeed: scrollSpeedRef.current
                  });
                  return newMap;
                }
              }
              return prev;
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe all existing elements
    refsMap.current.forEach((element, sectionId) => {
      if (observerRef.current) {
        // Ensure data attribute is set
        element.setAttribute('data-section-id', sectionId);
        observerRef.current.observe(element);
      }
    });

    return () => {
      // Clean up
      window.removeEventListener('scroll', handleScrollInternal);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      timeoutsMap.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsMap.current.clear();
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  // Get animation state for a section
  const getAnimationState = useCallback((sectionId: string): AnimationState => {
    return sections.get(sectionId) || { 
      isVisible: false, 
      hasAnimated: false,
      scrollDirection: 'down',
      scrollSpeed: 'medium'
    };
  }, [sections]);

  // Check if section is visible
  const isVisible = useCallback((sectionId: string): boolean => {
    return sections.get(sectionId)?.isVisible || false;
  }, [sections]);

  // Utility function to get CSS classes for animation
  const getAnimationClasses = useCallback((
    sectionId: string,
    animationType: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate' | 'wave' | 'elastic' | 'magnetic' | 'parallax' | 'typewriter' | 'reveal' | 'morph' | 'particle' = 'fade'
  ): string => {
    const state = getAnimationState(sectionId);
    const baseClass = `scroll-${animationType}`;
    const directionClass = `scroll-${state.scrollDirection}`;
    const speedClass = `scroll-speed-${state.scrollSpeed}`;
    
    return `${baseClass} ${directionClass} ${speedClass}`;
  }, [getAnimationState]);

  return {
    createRef,
    getAnimationState,
    isVisible,
    getAnimationClasses,
    scrollDirection,
    scrollSpeed,
    sections: Array.from(sections.keys())
  };
}