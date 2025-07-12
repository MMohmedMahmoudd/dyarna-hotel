import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Waves, 
  Dumbbell, 
  Utensils, 
  Wifi, 
  Car, 
  Coffee, 
  Bath, 
  Wind,
  Tv,
  Heart,
  Star,
  Calendar,
  Users,
  Clock,
  MapPin,
  Shield,
  Phone,
  CheckCircle,
  Sun,
  Camera,
  TreePine,
  Building2,
  PersonStanding,
  Zap,
  Bed,
  Flower2,
  Crown,
  Award,
  Sparkles,
  Globe
} from "lucide-react";

const facilityCategories = [
  {
    id: 'wellness',
    name: 'Wellness & Spa',
    icon: Heart,
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    count: 4
  },
  {
    id: 'recreation',
    name: 'Recreation',
    icon: Waves,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    count: 3
  },
  {
    id: 'services',
    name: 'Services',
    icon: Coffee,
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    count: 5
  },
  {
    id: 'business',
    name: 'Business',
    icon: Building2,
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    count: 2
  }
];

const facilities = [
  {
    id: 1,
    name: "Luxury Spa & Wellness Center",
    category: "wellness",
    description: "Full-service spa with traditional massage treatments, steam rooms, and wellness therapies",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Steam Room", "Massage Rooms", "Wellness Therapies", "Relaxation Area"],
    hours: "9:00 AM - 10:00 PM",
    featured: true,
    rating: 4.9
  },
  {
    id: 2,
    name: "Fitness Center",
    category: "wellness",
    description: "State-of-the-art gym equipment with personal training services available",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Modern Equipment", "Personal Training", "Group Classes", "24/7 Access"],
    hours: "24/7",
    featured: false,
    rating: 4.7
  },
  {
    id: 3,
    name: "Infinity Pool",
    category: "recreation",
    description: "Stunning infinity pool overlooking the Red Sea with poolside bar service",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Infinity Edge", "Poolside Bar", "Sun Loungers", "Cabanas"],
    hours: "6:00 AM - 10:00 PM",
    featured: true,
    rating: 4.8
  },
  {
    id: 4,
    name: "Private Beach Access",
    category: "recreation",
    description: "Exclusive beach area with water sports equipment and beachside service",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Private Beach", "Water Sports", "Beach Service", "Snorkeling Gear"],
    hours: "24/7",
    featured: true,
    rating: 4.9
  },
  {
    id: 5,
    name: "Restaurant & Bar",
    category: "services",
    description: "Multiple dining venues serving international cuisine and refreshing beverages",
    image: "https://images.unsplash.com/photo-1555992828-19bd0f3c8d7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["International Cuisine", "Poolside Bar", "Room Service", "Special Diets"],
    hours: "7:00 AM - 11:00 PM",
    featured: false,
    rating: 4.6
  },
  {
    id: 6,
    name: "Business Center",
    category: "business",
    description: "Fully equipped business center with meeting rooms and conference facilities",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    features: ["Meeting Rooms", "Conference Hall", "Business Services", "High-Speed Internet"],
    hours: "8:00 AM - 6:00 PM",
    featured: false,
    rating: 4.5
  }
];

const facilityStats = [
  {
    icon: Star,
    number: "15+",
    title: "Premium Facilities",
    description: "World-class amenities for your comfort",
    color: "text-gold-500"
  },
  {
    icon: Users,
    number: "50+",
    title: "Expert Staff",
    description: "Dedicated professionals at your service",
    color: "text-blue-600"
  },
  {
    icon: Award,
    number: "4.8/5",
    title: "Guest Rating",
    description: "Exceptional facility satisfaction",
    color: "text-green-600"
  },
  {
    icon: Clock,
    number: "24/7",
    title: "Available Services",
    description: "Round-the-clock assistance",
    color: "text-purple-600"
  }
];

const premiumAmenities = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Complimentary WiFi throughout the property",
    color: "text-blue-600"
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure parking spaces for all guests",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Professional security and safety measures",
    color: "text-purple-600"
  },
  {
    icon: Phone,
    title: "Concierge Service",
    description: "Personal assistance for all your needs",
    color: "text-orange-600"
  },
  {
    icon: Wind,
    title: "Climate Control",
    description: "Individual air conditioning in all areas",
    color: "text-cyan-600"
  },
  {
    icon: Globe,
    title: "Multi-Language Staff",
    description: "Service in multiple international languages",
    color: "text-red-600"
  }
];

export default function Facilities() {
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const statsRef = createRef('stats');
  const facilitiesRef = createRef('facilities');
  const amenitiesRef = createRef('amenities');
  const ctaRef = createRef('cta');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-ocean-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${getAnimationClasses('hero', 'slide-up')}`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'elastic')} scroll-delay-1`}>
            Hotel Facilities
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Discover our world-class amenities designed to enhance your stay with luxury, comfort, and convenience
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Star className="h-4 w-4 mr-2" />
              Premium Facilities
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Clock className="h-4 w-4 mr-2" />
              24/7 Services
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <CheckCircle className="h-4 w-4 mr-2" />
              Expert Staff
            </Badge>
          </div>
        </div>
      </section>

      {/* Facility Stats */}
      <section 
        ref={statsRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('stats', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('stats', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need for a perfect stay, all in one place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityStats.map((stat, index) => (
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

      {/* Main Facilities */}
      <section 
        ref={facilitiesRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('facilities', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('facilities', 'typewriter')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of facilities designed for your ultimate comfort and enjoyment
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {facilityCategories.map((category, index) => (
              <div key={category.id} className={`text-center group ${getAnimationClasses('facilities', 'morph')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <category.icon className="h-8 w-8 text-ocean-600 dark:text-ocean-400" />
                </div>
                <h3 className="text-lg font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {category.name}
                </h3>
                <Badge className={category.color}>
                  {category.count} facilities
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={facility.id} className={`overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('facilities', 'particle')} scroll-delay-${index + 6}`}>
                <div className="relative">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {facility.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold-500 text-white">
                        <Crown className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {facility.rating}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200">
                      {facility.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {facility.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {facility.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {facility.hours}
                      </div>
                      <Badge className={facilityCategories.find(c => c.id === facility.category)?.color}>
                        {facilityCategories.find(c => c.id === facility.category)?.name}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section 
        ref={amenitiesRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('amenities', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('amenities', 'elastic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Additional services and amenities included with your stay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumAmenities.map((amenity, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('amenities', 'magnetic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <amenity.icon className={`h-10 w-10 ${amenity.color} dark:${amenity.color}`} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {amenity.description}
                </p>
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
            Experience Premium Facilities
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Book your stay and enjoy access to all our world-class facilities and amenities
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
