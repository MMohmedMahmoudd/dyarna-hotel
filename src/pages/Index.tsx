import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Waves, 
  Wifi, 
  Car, 
  Fish, 
  Heart,
  UtensilsCrossed,
  ArrowRight,
  Star,
  CheckCircle,
  Utensils,
  Palmtree,
  Coffee,
  Dumbbell,
  Sparkles,
  Award,
  Users,
  MapPin
} from "lucide-react";

const highlights = [
  {
    icon: Waves,
    title: "Private Beach",
    description: "Direct access to pristine Red Sea waters",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Spa & Wellness",
    description: "Traditional hammam and massage treatments",
    color: "text-pink-600"
  },
  {
    icon: Fish,
    title: "Diving & Snorkeling",
    description: "Explore colorful coral reefs nearby",
    color: "text-teal-600"
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet throughout the hotel",
    color: "text-purple-600"
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Complimentary parking for all guests",
    color: "text-green-600"
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Authentic Egyptian and international cuisine",
    color: "text-orange-600"
  }
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Located on Mashraba Street with stunning sea and mountain views",
    color: "text-red-600"
  },
  {
    icon: Star,
    title: "Authentic Experience",
    description: "Immerse yourself in traditional Bedouin culture and hospitality",
    color: "text-yellow-600"
  },
  {
    icon: CheckCircle,
    title: "Modern Comfort",
    description: "All rooms feature AC, TV, minibar, and private balconies",
    color: "text-green-600"
  },
  {
    icon: Sparkles,
    title: "Adventure Ready",
    description: "Horse riding, diving, snorkeling, and desert excursions available",
    color: "text-purple-600"
  }
];

const experienceFeatures = [
  {
    icon: Award,
    title: "5-Star Service",
    description: "Exceptional hospitality from our dedicated team",
    stats: "24/7 Concierge"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Perfect for families with children's facilities",
    stats: "Kids Club Available"
  },
  {
    icon: Coffee,
    title: "All-Day Dining",
    description: "Multiple restaurants and bars for every taste",
    stats: "3 Restaurants"
  },
  {
    icon: Dumbbell,
    title: "Fitness & Recreation",
    description: "State-of-the-art gym and recreational activities",
    stats: "Pool & Gym"
  }
];

export default function Index() {
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const whyChooseRef = createRef('whyChoose');
  const highlightsRef = createRef('highlights');
  const featuresRef = createRef('features');
  const experienceRef = createRef('experience');
  const ctaRef = createRef('cta');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-ocean-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden fade-in-view`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 fade-in-view `}>
            Welcome to Dyarna Hotel
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Experience luxury and tranquility in the heart of Dahab, where the Red Sea meets exceptional hospitality
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-ocean-600 hover:bg-ocean-700 text-white rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        ref={whyChooseRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('whyChoose', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('whyChoose', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Why Choose Dyarna?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover what makes our hotel the perfect choice for your Red Sea adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-delay-1">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${getAnimationClasses('whyChoose', 'reveal')} scroll-delay-${index + 2}`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-ocean-50 to-sand-50 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit">
                    <item.icon className={`h-8 w-8 ${item.color} dark:${item.color}`} />
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section 
        ref={highlightsRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('highlights', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('highlights', 'elastic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Hotel Highlights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need for a perfect stay in Dahab
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('highlights', 'morph')} scroll-delay-${index + 2}`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-ocean-50 to-sand-50 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                    <highlight.icon className={`h-8 w-8 ${highlight.color} dark:${highlight.color}`} />
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Excellence Section */}
      <section 
        ref={experienceRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('experience', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('experience', 'reveal')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Experience Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Unparalleled amenities and services for the perfect getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('experience', 'elastic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <feature.icon className="h-10 w-10 text-ocean-600 dark:text-ocean-400" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{feature.description}</p>
                <span className="inline-block px-3 py-1 bg-ocean-100 dark:bg-ocean-900 text-ocean-600 dark:text-ocean-400 rounded-full text-sm font-medium">
                  {feature.stats}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className={`py-20 bg-gradient-to-r from-ocean-600 to-ocean-800 dark:from-ocean-800 dark:to-gray-900 ${getAnimationClasses('cta', 'slide-up')}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('cta', 'elastic')} scroll-delay-1`}>
            Ready for Your Perfect Escape?
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Book your stay at Dyarna Hotel and create unforgettable memories in the heart of Dahab
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
