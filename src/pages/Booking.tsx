import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  Calendar, 
  Users, 
  Bed, 
  CheckCircle, 
  CreditCard,
  Coffee,
  Wifi,
  Car,
  ArrowRight,
  Star,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Shield,
  Award,
  Banknote,
  Heart,
  Sparkles,
  Crown
} from "lucide-react";

const bookingSteps = [
  {
    id: 1,
    title: "Dates & Guests",
    description: "Select your travel dates and number of guests",
    icon: Calendar
  },
  {
    id: 2,
    title: "Room Selection",
    description: "Choose your perfect room from our options",
    icon: Bed
  },
  {
    id: 3,
    title: "Services & Contact",
    description: "Add services and provide contact information",
    icon: Coffee
  },
  {
    id: 4,
    title: "Payment & Confirmation",
    description: "Complete payment and confirm your booking",
    icon: CreditCard
  }
];

const roomOptions = [
  {
    id: 1,
    name: "Standard Sea View",
    price: 80,
    originalPrice: 100,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    maxGuests: 2,
    features: ["Sea View", "AC", "Private Bath", "WiFi"],
    popular: false
  },
  {
    id: 2,
    name: "Deluxe Mountain View",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    maxGuests: 2,
    features: ["Mountain View", "AC", "Private Bath", "WiFi", "Balcony"],
    popular: true
  },
  {
    id: 3,
    name: "Family Suite",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    maxGuests: 4,
    features: ["Sea View", "AC", "Private Bath", "WiFi", "Kitchenette"],
    popular: false
  },
  {
    id: 4,
    name: "Premium Ocean Suite",
    price: 250,
    originalPrice: 300,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    maxGuests: 2,
    features: ["Panoramic Sea View", "AC", "Luxury Bath", "WiFi", "Private Terrace"],
    popular: true
  }
];

const additionalServices = [
  { id: "airport", name: "Airport Transfer", price: 25, description: "Round-trip transportation" },
  { id: "breakfast", name: "Daily Breakfast", price: 15, description: "Continental breakfast included" },
  { id: "spa", name: "Spa Package", price: 50, description: "Relaxing spa treatments" },
  { id: "diving", name: "Diving Package", price: 75, description: "Professional diving excursions" },
  { id: "wifi", name: "Premium WiFi", price: 5, description: "High-speed internet access" },
  { id: "parking", name: "Parking Space", price: 10, description: "Secure parking spot" }
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    selectedRoom: null,
    services: [],
    contactInfo: {},
    paymentMethod: "card"
  });
  
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const stepsRef = createRef('steps');
  const bookingRef = createRef('booking');
  const ctaRef = createRef('cta');

  const calculateTotal = () => {
    let total = 0;
    if (bookingData.selectedRoom && bookingData.checkIn && bookingData.checkOut) {
      const nights = Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 60 * 60 * 24));
      total += bookingData.selectedRoom.price * nights;
    }
    bookingData.services.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) total += service.price;
    });
    return total;
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const selectRoom = (room) => {
    setBookingData({ ...bookingData, selectedRoom: room });
  };

  const toggleService = (serviceId) => {
    const services = bookingData.services.includes(serviceId)
      ? bookingData.services.filter(id => id !== serviceId)
      : [...bookingData.services, serviceId];
    setBookingData({ ...bookingData, services });
  };

  const completionPercentage = (currentStep / 4) * 100;

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
            Book Your Stay
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Secure your perfect Red Sea getaway with our easy 4-step booking process
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Shield className="h-4 w-4 mr-2" />
              Secure Booking
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Award className="h-4 w-4 mr-2" />
              Best Price Guarantee
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Heart className="h-4 w-4 mr-2" />
              Instant Confirmation
            </Badge>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section 
        ref={stepsRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('steps', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('steps', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Booking Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Complete your reservation in just 4 simple steps
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className={`mb-12 ${getAnimationClasses('steps', 'reveal')} scroll-delay-2`}>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-ocean-500 to-ocean-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {completionPercentage.toFixed(0)}% Complete
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={step.id} className={`text-center group ${getAnimationClasses('steps', 'elastic')} scroll-delay-${index + 3}`}>
                <div className={`mx-auto mb-6 p-4 rounded-full w-fit transition-all ${
                  currentStep >= step.id 
                    ? 'bg-ocean-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                } group-hover:scale-110`}>
                  <step.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section 
        ref={bookingRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('booking', 'slide-up')}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl ${getAnimationClasses('booking', 'particle')} scroll-delay-1`}>
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-gray-800 dark:text-gray-200 text-center">
                Step {currentStep}: {bookingSteps[currentStep - 1].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Step 1: Dates & Guests */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Check-in Date *
                      </label>
                      <Input 
                        type="date" 
                        value={bookingData.checkIn}
                        onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Check-out Date *
                      </label>
                      <Input 
                        type="date" 
                        value={bookingData.checkOut}
                        onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                        min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Number of Guests *
                    </label>
                    <select 
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Room Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {roomOptions
                      .filter(room => room.maxGuests >= bookingData.guests)
                      .map((room) => (
                        <Card 
                          key={room.id}
                          className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            bookingData.selectedRoom?.id === room.id 
                              ? 'ring-2 ring-ocean-500 bg-ocean-50 dark:bg-ocean-900/20' 
                              : 'hover:shadow-xl'
                          }`}
                          onClick={() => selectRoom(room)}
                        >
                          <div className="relative">
                            <img 
                              src={room.image} 
                              alt={room.name}
                              className="w-full h-32 object-cover rounded-t-lg"
                            />
                            {room.popular && (
                              <Badge className="absolute top-2 left-2 bg-purple-600 text-white">
                                <Crown className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                            <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2">
                              <div className="text-right">
                                <span className="text-lg font-bold text-gray-800 dark:text-gray-200">${room.price}</span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">/night</span>
                                {room.originalPrice && (
                                  <div className="text-sm text-gray-500 line-through">
                                    ${room.originalPrice}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{room.name}</h3>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                              <Users className="h-4 w-4 mr-1" />
                              Up to {room.maxGuests} guests
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {room.features.map((feature, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* Step 3: Services & Contact */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Additional Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {additionalServices.map((service) => (
                        <div 
                          key={service.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            bookingData.services.includes(service.id)
                              ? 'border-ocean-500 bg-ocean-50 dark:bg-ocean-900/20'
                              : 'border-gray-300 dark:border-gray-600 hover:border-ocean-300'
                          }`}
                          onClick={() => toggleService(service.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-800 dark:text-gray-200">{service.name}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-gray-800 dark:text-gray-200">${service.price}</span>
                              {bookingData.services.includes(service.id) && (
                                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          First Name *
                        </label>
                        <Input type="text" placeholder="Your first name" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <Input type="text" placeholder="Your last name" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="your.email@example.com" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <Input type="tel" placeholder="+1 (555) 123-4567" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Special Requests
                      </label>
                      <Textarea 
                        placeholder="Any special requests or preferences..."
                        rows={3}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Payment & Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Booking Summary</h3>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Check-in:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{bookingData.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Check-out:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{bookingData.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Guests:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{bookingData.guests}</span>
                      </div>
                      {bookingData.selectedRoom && (
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Room:</span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">{bookingData.selectedRoom.name}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span className="text-gray-800 dark:text-gray-200">Total:</span>
                          <span className="text-ocean-600 dark:text-ocean-400">${calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Payment Method</h3>
                    <div className="space-y-4">
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          bookingData.paymentMethod === 'card'
                            ? 'border-ocean-500 bg-ocean-50 dark:bg-ocean-900/20'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onClick={() => setBookingData({...bookingData, paymentMethod: 'card'})}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">Credit/Debit Card</span>
                          </div>
                          {bookingData.paymentMethod === 'card' && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      </div>
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          bookingData.paymentMethod === 'cash'
                            ? 'border-ocean-500 bg-ocean-50 dark:bg-ocean-900/20'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                        onClick={() => setBookingData({...bookingData, paymentMethod: 'cash'})}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Banknote className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">Pay at Hotel</span>
                          </div>
                          {bookingData.paymentMethod === 'cash' && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="rounded-full px-6"
                >
                  Previous
                </Button>
                
                {currentStep < 4 ? (
                  <Button 
                    onClick={nextStep}
                    className="bg-ocean-600 hover:bg-ocean-700 text-white rounded-full px-6"
                    disabled={
                      (currentStep === 1 && (!bookingData.checkIn || !bookingData.checkOut)) ||
                      (currentStep === 2 && !bookingData.selectedRoom)
                    }
                  >
                    Continue
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                  >
                    Confirm Booking
                    <CheckCircle className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className={`py-20 bg-gradient-to-r from-ocean-600 to-ocean-800 dark:from-ocean-800 dark:to-gray-900 ${getAnimationClasses('cta', 'slide-up')}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('cta', 'elastic')} scroll-delay-1`}>
            Need Help with Your Booking?
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Our friendly team is here to assist you 24/7 with any questions or special requests
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <a href="tel:+201234567890">
                <Phone className="h-5 w-5 mr-2" />
                Call Us Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <a href="mailto:info@dyarnahotel.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
