import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Heart, 
  Flower2, 
  Waves, 
  Clock, 
  Star, 
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Sun,
  Moon,
  Leaf,
  Wind,
  Droplets,
  Mountain,
  Camera,
  Gift,
  Crown,
  Award
} from "lucide-react";

const spaStats = [
  {
    icon: Award,
    number: "20+",
    title: "Spa Treatments",
    description: "Comprehensive wellness and beauty services",
    color: "text-purple-600"
  },
  {
    icon: Users,
    number: "15+",
    title: "Expert Therapists",
    description: "Certified wellness professionals",
    color: "text-green-600"
  },
  {
    icon: Clock,
    number: "12hrs",
    title: "Daily Operating",
    description: "Extended hours for your convenience",
    color: "text-blue-600"
  },
  {
    icon: Star,
    number: "4.9/5",
    title: "Guest Rating",
    description: "Exceptional spa experiences",
    color: "text-gold-500"
  }
];

const exclusivePackages = [
  {
    name: "Couples Retreat Package",
    duration: "4 hours",
    price: "$320",
    originalPrice: "$400",
    description: "Private couples massage, champagne, and romantic ambiance",
    features: ["Private Suite", "Couples Massage", "Champagne Service", "Rose Petals", "Relaxation Time"],
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    name: "Wellness Warrior",
    duration: "6 hours",
    price: "$280",
    originalPrice: "$350",
    description: "Full-day wellness experience with multiple treatments",
    features: ["Full Body Massage", "Facial Treatment", "Body Scrub", "Steam Session", "Healthy Lunch"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    name: "Desert Bliss",
    duration: "3 hours",
    price: "$180",
    originalPrice: "$225",
    description: "Traditional Middle Eastern wellness rituals",
    features: ["Hammam Session", "Moroccan Scrub", "Argan Oil Massage", "Mint Tea", "Desert Ambiance"],
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: true
  }
];

const treatmentCategories = [
  {
    id: 'massage',
    name: 'Signature Massages',
    icon: Heart,
    description: 'Therapeutic and relaxation massages',
    benefits: ['Stress Relief', 'Muscle Tension', 'Circulation'],
    count: 8,
    color: 'text-pink-600'
  },
  {
    id: 'wellness',
    name: 'Traditional Wellness',
    icon: Leaf,
    description: 'Ancient healing and wellness treatments',
    benefits: ['Detoxification', 'Energy Balance', 'Mental Clarity'],
    count: 6,
    color: 'text-green-600'
  },
  {
    id: 'beauty',
    name: 'Beauty Services',
    icon: Sparkles,
    description: 'Professional beauty and skincare',
    benefits: ['Skin Rejuvenation', 'Anti-Aging', 'Hydration'],
    count: 5,
    color: 'text-purple-600'
  }
];

const wellnessPhilosophy = [
  {
    icon: Sun,
    title: "Mind",
    description: "Mental wellness through meditation and mindfulness practices",
    color: "text-yellow-600"
  },
  {
    icon: Heart,
    title: "Body",
    description: "Physical rejuvenation with therapeutic treatments",
    color: "text-red-600"
  },
  {
    icon: Leaf,
    title: "Spirit",
    description: "Spiritual balance through holistic healing approaches",
    color: "text-green-600"
  },
  {
    icon: Waves,
    title: "Nature",
    description: "Connection with natural elements for complete harmony",
    color: "text-blue-600"
  }
];

export default function Spa() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const statsRef = createRef('stats');
  const packagesRef = createRef('packages');
  const categoriesRef = createRef('categories');
  const philosophyRef = createRef('philosophy');
  const ctaRef = createRef('cta');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-ocean-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${getAnimationClasses('hero', 'slide-up')}`}>
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'elastic')} scroll-delay-1`}>
            Spa & Wellness
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Rejuvenate your mind, body, and spirit with our holistic wellness treatments in a serene Red Sea setting
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Heart className="h-4 w-4 mr-2" />
              Holistic Wellness
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Leaf className="h-4 w-4 mr-2" />
              Natural Treatments
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Star className="h-4 w-4 mr-2" />
              Expert Therapists
            </Badge>
          </div>
        </div>
      </section>

      {/* Spa Stats */}
      <section 
        ref={statsRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('stats', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('stats', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Spa Statistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your wellness journey starts with our exceptional spa services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaStats.map((stat, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('stats', 'elastic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <stat.icon className={`h-10 w-10 ${stat.color} dark:${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">{stat.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Packages */}
      <section 
        ref={packagesRef}
        className={`py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('packages', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('packages', 'reveal')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Exclusive Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Specially curated wellness experiences combining multiple treatments for maximum relaxation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exclusivePackages.map((pkg, index) => (
              <Card key={index} className={`overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('packages', 'morph')} scroll-delay-${index + 2}`}>
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {pkg.popular && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">
                        <Crown className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-right">
                      <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {pkg.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200">
                      {pkg.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {pkg.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Includes</h4>
                      <div className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full transform hover:scale-105 transition-all">
                      Book Package
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section 
        ref={categoriesRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('categories', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('categories', 'typewriter')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Treatment Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of wellness and beauty treatments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentCategories.map((category, index) => (
              <Card key={category.id} className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('categories', 'particle')} scroll-delay-${index + 2}`}>
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                    <category.icon className={`h-12 w-12 ${category.color} dark:${category.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Benefits</h4>
                    <div className="space-y-1">
                      {category.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Badge className="mb-4" variant="outline">
                    {category.count} treatments available
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Philosophy */}
      <section 
        ref={philosophyRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('philosophy', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('philosophy', 'elastic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Wellness Philosophy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our holistic approach to wellness encompasses every aspect of your being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellnessPhilosophy.map((element, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('philosophy', 'magnetic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <element.icon className={`h-10 w-10 ${element.color} dark:${element.color}`} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {element.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className={`py-20 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-gray-900 ${getAnimationClasses('cta', 'slide-up')}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('cta', 'elastic')} scroll-delay-1`}>
            Begin Your Wellness Journey
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Book your spa treatment today and experience the perfect harmony of relaxation and rejuvenation
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Spa Treatment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">Spa Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
