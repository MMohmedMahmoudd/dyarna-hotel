import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Image, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Heart, 
  Share2, 
  Star,
  Camera,
  MapPin,
  Clock,
  Users,
  Eye,
  Waves,
  Mountain,
  UtensilsCrossed,
  Bed,
  Coffee,
  Palmtree,
  Fish,
  Sunrise,
  Sunset,
  Award,
  Globe,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const galleryCategories = [
  { 
    id: 'all', 
    label: 'All Photos', 
    count: 24,
    icon: Image,
    color: "text-gray-600"
  },
  { 
    id: 'rooms', 
    label: 'Rooms', 
    count: 8,
    icon: Bed,
    color: "text-blue-600"
  },
  { 
    id: 'beach', 
    label: 'Beach & Sea', 
    count: 6,
    icon: Waves,
    color: "text-ocean-600"
  },
  { 
    id: 'dining', 
    label: 'Dining', 
    count: 4,
    icon: UtensilsCrossed,
    color: "text-green-600"
  },
  { 
    id: 'activities', 
    label: 'Activities', 
    count: 6,
    icon: Fish,
    color: "text-purple-600"
  }
];

const galleryItems = [
  {
    id: 1,
    category: 'rooms',
    title: 'Deluxe Ocean View Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious room with panoramic Red Sea views',
    likes: 124,
    featured: true,
    size: 'large'
  },
  {
    id: 2,
    category: 'beach',
    title: 'Private Beach Access',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Crystal-clear waters just steps from your room',
    likes: 89,
    featured: false,
    size: 'medium'
  },
  {
    id: 3,
    category: 'dining',
    title: 'Seaside Restaurant',
    image: 'https://images.unsplash.com/photo-1555992828-19bd0f3c8d7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Fine dining with breathtaking ocean views',
    likes: 156,
    featured: true,
    size: 'small'
  },
  {
    id: 4,
    category: 'activities',
    title: 'Snorkeling Adventures',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Explore vibrant coral reefs and marine life',
    likes: 203,
    featured: false,
    size: 'large'
  },
  {
    id: 5,
    category: 'rooms',
    title: 'Luxury Suite Interior',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Modern comfort meets traditional elegance',
    likes: 78,
    featured: false,
    size: 'medium'
  },
  {
    id: 6,
    category: 'beach',
    title: 'Sunset from the Beach',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Magical sunsets paint the sky every evening',
    likes: 267,
    featured: true,
    size: 'small'
  },
  {
    id: 7,
    category: 'dining',
    title: 'Fresh Seafood Platter',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Locally sourced seafood prepared to perfection',
    likes: 145,
    featured: false,
    size: 'medium'
  },
  {
    id: 8,
    category: 'activities',
    title: 'Diving Experience',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Discover the underwater wonders of the Red Sea',
    likes: 189,
    featured: false,
    size: 'large'
  }
];

const galleryStats = [
  {
    icon: Camera,
    number: "500+",
    title: "Professional Photos",
    description: "Capturing every moment of your stay",
    color: "text-blue-600"
  },
  {
    icon: Award,
    number: "12",
    title: "Photography Awards",
    description: "Recognition for visual excellence",
    color: "text-gold-500"
  },
  {
    icon: Globe,
    number: "50+",
    title: "Countries Featured",
    description: "Guests from around the world",
    color: "text-green-600"
  },
  {
    icon: TrendingUp,
    number: "1M+",
    title: "Photo Views",
    description: "Shared memories and experiences",
    color: "text-purple-600"
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const categoriesRef = createRef('categories');
  const galleryRef = createRef('gallery');
  const statsRef = createRef('stats');
  const ctaRef = createRef('cta');

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

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
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'elastic')} scroll-delay-1`}>
            Photo Gallery
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Discover the beauty of Dyarna Hotel through stunning photography that captures the essence of our Red Sea paradise
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Camera className="h-4 w-4 mr-2" />
              Professional Photography
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Eye className="h-4 w-4 mr-2" />
              HD Quality
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Sparkles className="h-4 w-4 mr-2" />
              Award Winning
            </Badge>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section 
        ref={categoriesRef}
        className={`py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 ${getAnimationClasses('categories', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap justify-center gap-4 ${getAnimationClasses('categories', 'particle')} scroll-delay-1`}>
            {galleryCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-ocean-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                } scroll-delay-${index + 1}`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats Section */}
      <section 
        ref={statsRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('stats', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('stats', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Gallery Statistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A visual journey through our hotel's most beautiful moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryStats.map((stat, index) => (
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

      {/* Gallery Grid */}
      <section 
        ref={galleryRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('gallery', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('gallery', 'typewriter')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Visual Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Immerse yourself in the beauty of our hotel through these captivating images
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className={`group overflow-hidden cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 ${
                  item.size === 'large' ? 'md:col-span-2 lg:col-span-2' : 
                  item.size === 'medium' ? 'md:col-span-1 lg:col-span-1' : 
                  'md:col-span-1 lg:col-span-1'
                } ${getAnimationClasses('gallery', 'morph')} scroll-delay-${index + 2}`}
                onClick={() => openLightbox(item)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        item.size === 'large' ? 'h-64 lg:h-80' : 
                        item.size === 'medium' ? 'h-48 lg:h-64' : 
                        'h-40 lg:h-48'
                      }`}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <Eye className="h-8 w-8 text-white mx-auto mb-2" />
                        <span className="text-white font-medium">View Photo</span>
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gold-500 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    
                    {/* Likes Counter */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Heart className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.likes}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
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
            Create Your Own Memories
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Experience the beauty captured in these photos firsthand. Book your stay and create unforgettable memories.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">Share Your Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-white/80">
                  <Heart className="h-4 w-4 text-red-500 mr-2" />
                  <span>{selectedImage.likes} likes</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-white border-white/30 hover:bg-white/20">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="text-white border-white/30 hover:bg-white/20">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
