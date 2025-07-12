import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Star, 
  Heart, 
  ThumbsUp, 
  MessageSquare, 
  User,
  Calendar,
  MapPin,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Verified,
  Clock,
  Camera
} from "lucide-react";

const reviewStats = [
  {
    icon: Star,
    number: "4.8/5",
    title: "Overall Rating",
    description: "Based on 500+ reviews",
    color: "text-yellow-500"
  },
  {
    icon: Users,
    number: "95%",
    title: "Recommendation Rate",
    description: "Guests who recommend us",
    color: "text-green-600"
  },
  {
    icon: TrendingUp,
    number: "98%",
    title: "Satisfaction Score",
    description: "Extremely satisfied guests",
    color: "text-blue-600"
  },
  {
    icon: Award,
    number: "15+",
    title: "Awards Won",
    description: "Industry recognitions",
    color: "text-purple-600"
  }
];

const reviewHighlights = [
  {
    aspect: "Service",
    rating: 4.9,
    description: "Exceptional staff and hospitality",
    color: "bg-blue-100 text-blue-800"
  },
  {
    aspect: "Location",
    rating: 4.8,
    description: "Perfect beachfront location",
    color: "bg-green-100 text-green-800"
  },
  {
    aspect: "Cleanliness",
    rating: 4.9,
    description: "Spotless rooms and facilities",
    color: "bg-purple-100 text-purple-800"
  },
  {
    aspect: "Value",
    rating: 4.7,
    description: "Great value for money",
    color: "bg-orange-100 text-orange-800"
  }
];

const trustIndicators = [
  {
    icon: Verified,
    title: "Verified Reviews",
    description: "All reviews are from verified guests",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Protected review submission process",
    color: "text-blue-600"
  },
  {
    icon: Globe,
    title: "International Guests",
    description: "Reviews from 40+ countries",
    color: "text-purple-600"
  },
  {
    icon: Clock,
    title: "Recent Reviews",
    description: "Updated within the last 30 days",
    color: "text-orange-600"
  }
];

const reviewCategories = [
  {
    category: "Couples",
    count: 185,
    rating: 4.9,
    highlights: ["Romantic atmosphere", "Privacy", "Exceptional service"],
    icon: Heart,
    color: "text-red-600"
  },
  {
    category: "Families",
    count: 142,
    rating: 4.7,
    highlights: ["Kid-friendly", "Spacious rooms", "Activities"],
    icon: Users,
    color: "text-blue-600"
  },
  {
    category: "Business",
    count: 89,
    rating: 4.8,
    highlights: ["WiFi quality", "Meeting facilities", "Professional service"],
    icon: Award,
    color: "text-green-600"
  },
  {
    category: "Solo Travelers",
    count: 84,
    rating: 4.6,
    highlights: ["Safety", "Social atmosphere", "Local experiences"],
    icon: User,
    color: "text-purple-600"
  }
];

const featuredReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    rating: 5,
    title: "Perfect Honeymoon Destination",
    review: "Absolutely magical stay! The staff went above and beyond to make our honeymoon special. The room was stunning with incredible sea views, and the private beach was paradise. Can't wait to return!",
    date: "March 2024",
    verified: true,
    helpful: 24,
    experience: "Romantic Getaway",
    stayDuration: "7 nights",
    roomType: "Ocean Suite"
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Singapore",
    rating: 5,
    title: "Exceptional Diving Experience",
    review: "Best diving hotel in Dahab! The dive center is professional, equipment is top-notch, and the reef access is unbeatable. Food was amazing and staff incredibly helpful. Highly recommend for diving enthusiasts!",
    date: "February 2024",
    verified: true,
    helpful: 18,
    experience: "Adventure",
    stayDuration: "5 nights",
    roomType: "Sea View Room"
  },
  {
    id: 3,
    name: "Emma Martinez",
    country: "Spain",
    rating: 4,
    title: "Family Paradise",
    review: "Wonderful family vacation! Kids loved the pool and beach activities. Rooms were spacious and clean. Staff was very accommodating with our dietary restrictions. Only minor issue was slow WiFi, but who needs internet in paradise?",
    date: "January 2024",
    verified: true,
    helpful: 31,
    experience: "Family Vacation",
    stayDuration: "10 nights",
    roomType: "Family Suite"
  }
];

export default function Reviews() {
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const statsRef = createRef('stats');
  const highlightsRef = createRef('highlights');
  const trustRef = createRef('trust');
  const categoriesRef = createRef('categories');
  const featuredRef = createRef('featured');
  const ctaRef = createRef('cta');

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
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
            backgroundImage: "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'elastic')} scroll-delay-1`}>
            Guest Reviews
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Discover what our guests say about their unforgettable experiences at Dyarna Hotel
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Star className="h-4 w-4 mr-2" />
              500+ Reviews
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Verified className="h-4 w-4 mr-2" />
              Verified Guests
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Award className="h-4 w-4 mr-2" />
              Award Winning
            </Badge>
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section 
        ref={statsRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('stats', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('stats', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Review Statistics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our commitment to excellence reflected in guest satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewStats.map((stat, index) => (
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

      {/* Review Highlights */}
      <section 
        ref={highlightsRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('highlights', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('highlights', 'reveal')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Review Highlights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how we perform in key areas that matter most to our guests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewHighlights.map((highlight, index) => (
              <Card key={index} className={`text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${getAnimationClasses('highlights', 'morph')} scroll-delay-${index + 2}`}>
                <CardContent className="p-6">
                  <Badge className={`mb-4 ${highlight.color}`}>
                    {highlight.aspect}
                  </Badge>
                  <div className="flex justify-center mb-3">
                    {renderStars(highlight.rating)}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {highlight.rating}/5
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section 
        ref={trustRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('trust', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('trust', 'elastic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Trust & Authenticity
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our commitment to genuine, verified guest feedback
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('trust', 'magnetic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <indicator.icon className={`h-10 w-10 ${indicator.color} dark:${indicator.color}`} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {indicator.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section 
        ref={categoriesRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('categories', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('categories', 'typewriter')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Reviews by Experience Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See what different types of travelers say about their stays
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewCategories.map((category, index) => (
              <Card key={index} className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('categories', 'particle')} scroll-delay-${index + 2}`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                      <category.icon className={`h-10 w-10 ${category.color} dark:${category.color}`} />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {category.category}
                    </h3>
                    <div className="flex justify-center mb-2">
                      {renderStars(category.rating)}
                    </div>
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {category.rating}/5
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.count} reviews
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Top Highlights</h4>
                    <div className="space-y-1">
                      {category.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section 
        ref={featuredRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('featured', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('featured', 'elastic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Featured Reviews
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Read detailed experiences from our satisfied guests
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {featuredReviews.map((review, index) => (
              <Card key={review.id} className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${getAnimationClasses('featured', 'magnetic')} scroll-delay-${index + 2}`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full">
                        <User className="h-8 w-8 text-ocean-600 dark:text-ocean-400" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">{review.name}</h4>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              <Verified className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span>{review.country}</span>
                          <span>•</span>
                          <Calendar className="h-4 w-4" />
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">
                        {review.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>Stay: {review.stayDuration}</span>
                      <span>•</span>
                      <span>Room: {review.roomType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ThumbsUp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {review.helpful} helpful
                      </span>
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
            Create Your Own Review Story
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Join hundreds of satisfied guests and experience the magic of Dyarna Hotel for yourself
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">Share Your Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

