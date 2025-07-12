import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Star,
  CheckCircle,
  Users,
  MessageSquare,
  Globe,
  Calendar,
  Heart,
  Award,
  Navigation,
  MessageCircle,
  HelpCircle,
  Info
} from "lucide-react";

const quickInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+20 123 456 789",
    description: "24/7 Guest Services",
    color: "text-green-600"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@dyarnahotel.com",
    description: "Response within 2 hours",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Mashraba Street, Dahab",
    description: "South Sinai, Egypt",
    color: "text-red-600"
  },
  {
    icon: Clock,
    title: "Reception",
    value: "24/7 Available",
    description: "Always here to help",
    color: "text-purple-600"
  }
];

const contactReasons = [
  {
    icon: Calendar,
    title: "Reservations",
    description: "Room bookings and modifications",
    action: "Book Now"
  },
  {
    icon: Info,
    title: "Information",
    description: "Hotel services and amenities",
    action: "Learn More"
  },
  {
    icon: HelpCircle,
    title: "Support",
    description: "Guest assistance and inquiries",
    action: "Get Help"
  },
  {
    icon: Heart,
    title: "Feedback",
    description: "Share your experience with us",
    action: "Give Feedback"
  }
];

export default function Contact() {
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const quickInfoRef = createRef('quickInfo');
  const formRef = createRef('form');
  const reasonsRef = createRef('reasons');
  const locationRef = createRef('location');
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
            backgroundImage: "url('https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'elastic')} scroll-delay-1`}>
            Contact Us
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            We're here to help make your stay exceptional. Reach out to us for any assistance or information you need
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <MessageCircle className="h-4 w-4 mr-2" />
              24/7 Support
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Globe className="h-4 w-4 mr-2" />
              Multi-Language
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Award className="h-4 w-4 mr-2" />
              Expert Service
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section 
        ref={quickInfoRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('quickInfo', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('quickInfo', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Quick Contact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get in touch with us through any of these convenient methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickInfo.map((info, index) => (
              <Card key={index} className={`text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('quickInfo', 'elastic')} scroll-delay-${index + 2}`}>
                <CardContent className="p-6">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                    <info.icon className={`h-10 w-10 ${info.color} dark:${info.color}`} />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{info.value}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section 
        ref={reasonsRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('reasons', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('reasons', 'reveal')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the type of assistance you need and we'll connect you with the right team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactReasons.map((reason, index) => (
              <Card key={index} className={`text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('reasons', 'morph')} scroll-delay-${index + 2}`}>
                <CardContent className="p-6">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                    <reason.icon className="h-10 w-10 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{reason.description}</p>
                  <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white rounded-full transform hover:scale-105 transition-all">
                    {reason.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section 
        ref={formRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('form', 'slide-up')}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('form', 'typewriter')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          
          <Card className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl ${getAnimationClasses('form', 'particle')} scroll-delay-2`}>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your first name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your last name"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <Input 
                  type="text" 
                  placeholder="What is this regarding?"
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Please describe how we can help you..."
                  rows={6}
                  className="w-full"
                />
              </div>
              
              <div className="flex items-center mb-6">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  className="rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
                />
                <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  I would like to receive updates and special offers from Dyarna Hotel
                </label>
              </div>
              
              <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white rounded-full text-lg py-3 transform hover:scale-105 transition-all">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Info */}
      <section 
        ref={locationRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('location', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${getAnimationClasses('location', 'elastic')} scroll-delay-1`}>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-6">
                Visit Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Located in the heart of Dahab on Mashraba Street, our hotel offers easy access to the best diving spots, 
                local attractions, and the vibrant culture of this Red Sea paradise.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-ocean-100 dark:bg-ocean-900 rounded-full">
                    <MapPin className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">Mashraba Street, Dahab, South Sinai, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                    <Navigation className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Directions</h4>
                    <p className="text-gray-600 dark:text-gray-400">15 minutes from Sharm El Sheikh Airport</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Check-in/Check-out</h4>
                    <p className="text-gray-600 dark:text-gray-400">Check-in: 3:00 PM | Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`relative ${getAnimationClasses('location', 'magnetic')} scroll-delay-2`}>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-ocean-600 dark:text-ocean-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Interactive Map</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Mashraba Street, Dahab
                  </p>
                </div>
              </div>
            </div>
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
            Ready to Experience Dyarna?
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Contact us today to start planning your perfect Red Sea getaway
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <a href="tel:+201234567890">Call Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <a href="mailto:info@dyarnahotel.com">Send Email</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
