import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  MapPin, 
  Users, 
  Calendar, 
  Award, 
  Heart, 
  Star, 
  Waves, 
  Fish,
  Utensils,
  Bed,
  Coffee,
  Wifi,
  Car,
  UtensilsCrossed,
  Dumbbell,
  Palmtree,
  Sun,
  Moon,
  Camera,
  Mountain,
  Anchor,
  Sunset,
  TreePine,
  Flower2,
  Shield,
  Leaf,
  Globe,
  Zap
} from "lucide-react";

const achievements = [
  {
    icon: Users,
    number: "10,000+",
    title: "Happy Guests",
    description: "Satisfied visitors from around the world",
    color: "text-ocean-600 dark:text-ocean-400"
  },
  {
    icon: Star,
    number: "4.8/5",
    title: "Guest Rating",
    description: "Consistently high satisfaction scores",
    color: "text-gold-500 dark:text-gold-400"
  },
  {
    icon: Award,
    number: "5",
    title: "Awards Won",
    description: "Recognition for hospitality excellence",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Calendar,
    number: "13+",
    title: "Years Experience",
    description: "Serving the Red Sea community",
    color: "text-purple-600 dark:text-purple-400"
  }
];

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "General Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Leading our team with passion and dedication"
  },
  {
    name: "Fatima Al-Rashid",
    role: "Head of Hospitality",
    image: "https://images.unsplash.com/photo-1494790108755-2616b25cd369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Ensuring exceptional guest experiences"
  },
  {
    name: "Omar Mahmoud",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    description: "Creating culinary masterpieces"
  }
];

const coreValues = [
  {
    icon: Heart,
    title: "Hospitality",
    description: "Treating every guest like family with warmth and care",
    color: "text-red-600"
  },
  {
    icon: Shield,
    title: "Authenticity",
    description: "Preserving local culture and traditions",
    color: "text-blue-600"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Protecting the environment for future generations",
    color: "text-green-600"
  },
  {
    icon: Globe,
    title: "Excellence",
    description: "Continuous improvement in all we do",
    color: "text-purple-600"
  }
];

export default function About() {
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const storyRef = createRef('story');
  const achievementsRef = createRef('achievements');
  const teamRef = createRef('team');
  const valuesRef = createRef('values');
  const locationRef = createRef('location');
  const ctaRef = createRef('cta');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-ocean-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${getAnimationClasses('hero', 'slide-up')}`}>
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'elastic')} scroll-delay-1`}>
            About Dyarna Hotel
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Where traditional Bedouin hospitality meets modern luxury on the shores of the Red Sea
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Calendar className="h-4 w-4 mr-2" />
              Est. 2010
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Users className="h-4 w-4 mr-2" />
              50+ Staff
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Award className="h-4 w-4 mr-2" />
              4.8/5 Rating
            </Badge>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('story', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${getAnimationClasses('story', 'reveal')} scroll-delay-1`}>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Founded in 2010, Dyarna Hotel began as a vision to create a unique hospitality experience in Dahab. 
                We wanted to combine the warmth of traditional Bedouin culture with the comfort and amenities that 
                modern travelers expect.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Over the years, we've grown from a small family-run establishment to a renowned destination, 
                welcoming guests from around the world who come to experience the magic of the Red Sea and 
                the authentic charm of Dahab.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-ocean-100 text-ocean-800 dark:bg-ocean-900 dark:text-ocean-200 hover:scale-105 transition-transform">
                  <Heart className="h-4 w-4 mr-1" />
                  Family-Owned
                </Badge>
                <Badge className="bg-sand-100 text-sand-800 dark:bg-sand-900 dark:text-sand-200 hover:scale-105 transition-transform">
                  <Star className="h-4 w-4 mr-1" />
                  Locally Sourced
                </Badge>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:scale-105 transition-transform">
                  <Waves className="h-4 w-4 mr-1" />
                  Eco-Friendly
                </Badge>
              </div>
            </div>
            
            <div className={`grid grid-cols-2 gap-4 ${getAnimationClasses('story', 'morph')} scroll-delay-2`}>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Hotel exterior"
                  className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Red Sea view"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Hotel interior"
                  className="rounded-lg shadow-lg w-full h-32 object-cover hover:scale-105 transition-transform"
                />
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Dahab beach"
                  className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section 
        ref={achievementsRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('achievements', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('achievements', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <Card key={index} className={`text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('achievements', 'elastic')} scroll-delay-${index + 2}`}>
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-ocean-50 to-sand-50 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {stat.number}
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('team', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('team', 'reveal')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The passionate people who make Dyarna Hotel exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('team', 'morph')} scroll-delay-${index + 2}`}>
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden group-hover:scale-110 transition-transform">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-ocean-100 text-ocean-800 dark:bg-ocean-900 dark:text-ocean-200">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className={`py-20 bg-gradient-to-r from-sand-50 to-ocean-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('values', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('values', 'elastic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('values', 'magnetic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <value.icon className={`h-10 w-10 ${value.color} dark:${value.color}`} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section 
        ref={locationRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('location', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${getAnimationClasses('location', 'typewriter')} scroll-delay-1`}>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-6">
                Perfect Location
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Situated on Mashraba Street in the heart of Dahab, our hotel offers easy access to the best 
                diving spots, local restaurants, and cultural attractions. The Red Sea is just steps away, 
                and the majestic Sinai Mountains provide a stunning backdrop.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-ocean-100 dark:bg-ocean-900 rounded-full">
                    <Waves className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">2 minutes walk to the beach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-sand-100 dark:bg-sand-900 rounded-full">
                    <Mountain className="h-5 w-5 text-sand-600 dark:text-sand-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Blue Hole diving site nearby</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                    <Utensils className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Restaurants and cafes within walking distance</span>
                </div>
              </div>
            </div>
            
            <div className={`relative ${getAnimationClasses('location', 'wave')} scroll-delay-2`}>
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Dahab location"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Dahab, Egypt</span>
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
            Experience Our Story
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Join us at Dyarna Hotel and become part of our continuing story of hospitality and excellence
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
