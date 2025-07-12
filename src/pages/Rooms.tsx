import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Bed, 
  Users, 
  Wifi, 
  Car, 
  Coffee, 
  Waves, 
  Mountain, 
  Star,
  Bath,
  Tv,
  Wind,
  Utensils,
  Shield,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Heart,
  Eye,
  MapPin,
  Sun,
  Moon,
  Camera,
  Palmtree,
  Sparkles,
  Crown,
  Home,
  Zap
} from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Standard Sea View",
    price: "$80",
    originalPrice: "$100",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 1,
    guests: 2,
    size: "25m²",
    features: ["Sea View", "AC", "Private Bath", "WiFi", "Minibar"],
    amenities: [
      { icon: Bed, label: "Queen Bed" },
      { icon: Bath, label: "Private Bathroom" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Flat Screen TV" },
      { icon: Coffee, label: "Coffee Maker" }
    ],
    description: "Comfortable room with stunning Red Sea views and modern amenities.",
    popular: false,
    category: "standard"
  },
  {
    id: 2,
    name: "Deluxe Mountain View",
    price: "$120",
    originalPrice: "$150",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 1,
    guests: 2,
    size: "35m²",
    features: ["Mountain View", "AC", "Private Bath", "WiFi", "Balcony"],
    amenities: [
      { icon: Bed, label: "King Bed" },
      { icon: Bath, label: "Private Bathroom" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Mountain, label: "Mountain View" }
    ],
    description: "Spacious room with breathtaking mountain views and private balcony.",
    popular: true,
    category: "deluxe"
  },
  {
    id: 3,
    name: "Family Suite",
    price: "$180",
    originalPrice: "$220",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 2,
    guests: 4,
    size: "50m²",
    features: ["Sea View", "AC", "Private Bath", "WiFi", "Kitchenette"],
    amenities: [
      { icon: Bed, label: "2 Queen Beds" },
      { icon: Bath, label: "2 Bathrooms" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Utensils, label: "Kitchenette" },
      { icon: Waves, label: "Sea View" }
    ],
    description: "Perfect for families with separate sleeping areas and kitchenette.",
    popular: false,
    category: "suite"
  },
  {
    id: 4,
    name: "Premium Ocean Suite",
    price: "$250",
    originalPrice: "$300",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    beds: 1,
    guests: 2,
    size: "60m²",
    features: ["Panoramic Sea View", "AC", "Luxury Bath", "WiFi", "Private Terrace"],
    amenities: [
      { icon: Bed, label: "King Bed" },
      { icon: Bath, label: "Luxury Bathroom" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Waves, label: "Ocean View" },
      { icon: Star, label: "Premium Service" }
    ],
    description: "Luxurious suite with panoramic ocean views and premium amenities.",
    popular: true,
    category: "suite"
  }
];

const filters = [
  { id: 'all', label: 'All Rooms', count: 4 },
  { id: 'standard', label: 'Standard', count: 1 },
  { id: 'deluxe', label: 'Deluxe', count: 1 },
  { id: 'suite', label: 'Suites', count: 2 }
];

const roomFeatures = [
  {
    icon: Shield,
    title: "Security & Safety",
    description: "24/7 security with electronic key cards and safety deposit boxes",
    color: "text-blue-600"
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Professional cleaning service with premium linens and towels",
    color: "text-purple-600"
  },
  {
    icon: Crown,
    title: "Premium Amenities",
    description: "High-quality toiletries, robes, and luxury comfort items",
    color: "text-gold-500"
  },
  {
    icon: Home,
    title: "Home Away From Home",
    description: "Cozy atmosphere with thoughtful touches and local artwork",
    color: "text-green-600"
  }
];

export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const filtersRef = createRef('filters');
  const roomsRef = createRef('rooms');
  const featuresRef = createRef('features');
  const ctaRef = createRef('cta');

  const filteredRooms = rooms.filter(room => 
    activeFilter === 'all' || room.category === activeFilter
  );

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
            backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'elastic')} scroll-delay-1`}>
            Our Rooms
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Comfortable accommodations with stunning views of the Red Sea and Sinai Mountains
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Bed className="h-4 w-4 mr-2" />
              4 Room Types
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Users className="h-4 w-4 mr-2" />
              1-4 Guests
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Waves className="h-4 w-4 mr-2" />
              Sea & Mountain Views
            </Badge>
          </div>
        </div>
      </section>


      {/* Room Features Section */}
      <section 
        ref={featuresRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('features', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('features', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Room Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Every room includes premium amenities and thoughtful touches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomFeatures.map((feature, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('features', 'elastic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <feature.icon className={`h-10 w-10 ${feature.color} dark:${feature.color}`} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Filters Section */}
            <section 
        ref={filtersRef}
        className={`py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 ${getAnimationClasses('filters', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap justify-center gap-4 ${getAnimationClasses('filters', 'particle')} scroll-delay-1`}>
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-ocean-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                } scroll-delay-${index + 1}`}
              >
                {filter.label}
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Rooms Grid */}
      <section 
        ref={roomsRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('rooms', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('rooms', 'typewriter')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Choose Your Perfect Room
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Each room is designed for comfort and relaxation with stunning views
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room, index) => (
              <Card key={room.id} className={`overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group ${getAnimationClasses('rooms', 'morph')} scroll-delay-${index + 2}`}>
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {room.popular && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-ocean-600 text-white">
                        <Crown className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">{room.price}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">/night</span>
                      {room.originalPrice && (
                        <div className="text-sm text-gray-500 dark:text-gray-500 line-through">
                          {room.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {room.name}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {room.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {room.guests} Guests
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {room.beds} Bed{room.beds > 1 ? 's' : ''}
                    </div>
                    <div className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      {room.size}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Amenities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <amenity.icon className="h-4 w-4 mr-2 text-ocean-600 dark:text-ocean-400" />
                            {amenity.label}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {room.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button asChild className="flex-1 bg-ocean-600 hover:bg-ocean-700 text-white rounded-full transform hover:scale-105 transition-all">
                        <Link to="/booking">Book Now</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full hover:scale-105 transition-transform">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            Ready to Book Your Stay?
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Experience comfort and luxury at Dyarna Hotel with our specially designed rooms
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
