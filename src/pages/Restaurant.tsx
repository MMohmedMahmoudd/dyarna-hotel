import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  UtensilsCrossed, 
  Clock, 
  Star, 
  Fish, 
  Leaf, 
  Coffee, 
  Wine,
  ChefHat,
  MapPin,
  Heart,
  Users,
  Calendar,
  Phone,
  Globe,
  Award,
  Sparkles,
  Sun,
  Moon,
  Camera,
  Crown,
  Flame,
  Utensils,
  Check
} from "lucide-react";

const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    icon: UtensilsCrossed,
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    count: 8
  },
  {
    id: 'seafood',
    name: 'Fresh Seafood',
    icon: Fish,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    count: 12
  },
  {
    id: 'traditional',
    name: 'Egyptian Cuisine',
    icon: ChefHat,
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    count: 10
  },
  {
    id: 'international',
    name: 'International',
    icon: Globe,
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    count: 6
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: Coffee,
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    count: 15
  }
];

const featuredDishes = [
  {
    id: 1,
    name: 'Grilled Red Sea Fish',
    category: 'seafood',
    price: '$28',
    description: 'Fresh catch of the day grilled to perfection with Mediterranean herbs',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    popular: true,
    dietary: ['gluten-free']
  },
  {
    id: 2,
    name: 'Traditional Koshari',
    category: 'traditional',
    price: '$15',
    description: 'Egypt\'s national dish with rice, lentils, pasta, and spiced tomato sauce',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    popular: false,
    dietary: ['vegetarian']
  },
  {
    id: 3,
    name: 'Seafood Platter',
    category: 'seafood',
    price: '$45',
    description: 'Mixed grill of shrimp, calamari, and fish with garlic sauce',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    popular: true,
    dietary: ['gluten-free']
  },
  {
    id: 4,
    name: 'Mediterranean Mezze',
    category: 'appetizers',
    price: '$18',
    description: 'Selection of hummus, baba ganoush, tabbouleh, and fresh bread',
    image: 'https://images.unsplash.com/photo-1544510808-7e91c8a9c4c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    popular: false,
    dietary: ['vegetarian', 'vegan']
  },
  {
    id: 5,
    name: 'Lamb Tagine',
    category: 'traditional',
    price: '$32',
    description: 'Slow-cooked lamb with apricots, almonds, and Moroccan spices',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    popular: true,
    dietary: ['gluten-free']
  },
  {
    id: 6,
    name: 'Tropical Smoothie Bowl',
    category: 'beverages',
    price: '$12',
    description: 'Fresh mango, pineapple, and coconut with granola and berries',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    popular: false,
    dietary: ['vegetarian', 'vegan', 'gluten-free']
  }
];

const chefSignatures = [
  {
    name: "Chef Ahmed's Special",
    description: "A secret recipe passed down through generations",
    price: "$38",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Red Sea Catch",
    description: "Daily fresh fish selection prepared with house spices",
    price: "$Market Price",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bedouin Feast",
    description: "Traditional desert cuisine with modern presentation",
    price: "$42",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const ambianceFeatures = [
  {
    icon: Sun,
    title: "Sunset Dining",
    description: "Watch the sun set over the Red Sea while enjoying your meal",
    color: "text-orange-600"
  },
  {
    icon: Moon,
    title: "Romantic Evenings",
    description: "Candlelit tables under the stars create the perfect atmosphere",
    color: "text-purple-600"
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Elegant presentation meets exceptional taste",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Special menus and seating for families with children",
    color: "text-green-600"
  }
];

export default function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { createRef, getAnimationClasses } = useScrollAnimation();
  
  // Create refs for each section
  const heroRef = createRef('hero');
  const signatureRef = createRef('signature');
  const menuRef = createRef('menu');
  const dishesRef = createRef('dishes');
  const ambianceRef = createRef('ambiance');
  const ctaRef = createRef('cta');

  const filteredDishes = selectedCategory === 'all' 
    ? featuredDishes 
    : featuredDishes.filter(dish => dish.category === selectedCategory);

  const getDietaryIcon = (dietary) => {
    if (dietary.includes('vegan')) return <Leaf className="h-4 w-4 text-green-600" />;
    if (dietary.includes('vegetarian')) return <Leaf className="h-4 w-4 text-green-500" />;
    if (dietary.includes('gluten-free')) return <Sparkles className="h-4 w-4 text-blue-500" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 via-white to-ocean-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${getAnimationClasses('hero', 'slide-up')}`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-ocean-600 to-ocean-800"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-6 ${getAnimationClasses('hero', 'typewriter')} scroll-delay-1`}>
            Restaurant & Dining
          </h1>
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getAnimationClasses('hero', 'typewriter')} scroll-delay-2`}>
            Savor exquisite flavors with breathtaking Red Sea views at our award-winning restaurant
          </p>
          <div className={`flex flex-wrap justify-center gap-4 text-white/80 ${getAnimationClasses('hero', 'wave')} scroll-delay-3`}>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <ChefHat className="h-4 w-4 mr-2" />
              Expert Chefs
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Fish className="h-4 w-4 mr-2" />
              Fresh Seafood
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all">
              <Award className="h-4 w-4 mr-2" />
              Award-Winning
            </Badge>
          </div>
        </div>
      </section>

      {/* Chef's Signature Dishes */}
      <section 
        ref={signatureRef}
        className={`py-20 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('signature', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('signature', 'magnetic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Chef's Signature Dishes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Exclusive creations by our master chefs, featuring the finest ingredients and traditional techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefSignatures.map((dish, index) => (
              <Card key={index} className={`overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('signature', 'morph')} scroll-delay-${index + 2}`}>
                <div className="relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold-500 text-white">
                      <Crown className="h-3 w-3 mr-1" />
                      Chef's Special
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {dish.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-ocean-600 dark:text-ocean-400">
                      {dish.price}
                    </span>
                    <Button size="sm" className="bg-ocean-600 hover:bg-ocean-700 text-white rounded-full">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section 
        ref={menuRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('menu', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('menu', 'reveal')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Menu
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our diverse culinary offerings, from traditional Egyptian dishes to international favorites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {menuCategories.map((category, index) => (
              <div key={category.id} className={`text-center group ${getAnimationClasses('menu', 'elastic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <category.icon className="h-8 w-8 text-ocean-600 dark:text-ocean-400" />
                </div>
                <h3 className="text-lg font-poppins font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {category.name}
                </h3>
                <Badge className={category.color}>
                  {category.count} dishes
                </Badge>
              </div>
            ))}
          </div>

          <div className={`flex flex-wrap justify-center gap-4 ${getAnimationClasses('menu', 'particle')} scroll-delay-7`}>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'all'
                  ? 'bg-ocean-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Dishes
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-ocean-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section 
        ref={dishesRef}
        className={`py-20 bg-gradient-to-r from-ocean-50 to-sand-50 dark:from-gray-800 dark:to-gray-900 ${getAnimationClasses('dishes', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('dishes', 'typewriter')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Featured Dishes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Taste the best of our culinary artistry with these specially curated dishes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish, index) => (
              <Card key={dish.id} className={`overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group ${getAnimationClasses('dishes', 'morph')} scroll-delay-${index + 2}`}>
                <div className="relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {dish.popular && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        <Flame className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {dish.rating}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200">
                      {dish.name}
                    </h3>
                    <span className="text-xl font-bold text-ocean-600 dark:text-ocean-400">
                      {dish.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {dish.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {dish.dietary.map((diet, idx) => (
                        <div key={idx} className="flex items-center">
                          {getDietaryIcon(dish.dietary)}
                          <span className="text-xs ml-1 text-gray-500 capitalize">{diet}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button size="sm" className="bg-ocean-600 hover:bg-ocean-700 text-white rounded-full">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section 
        ref={ambianceRef}
        className={`py-20 bg-white dark:bg-gray-900 ${getAnimationClasses('ambiance', 'slide-up')}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${getAnimationClasses('ambiance', 'elastic')} scroll-delay-1`}>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-4">
              Dining Ambiance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience dining like never before with our carefully crafted atmosphere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ambianceFeatures.map((feature, index) => (
              <div key={index} className={`text-center group ${getAnimationClasses('ambiance', 'magnetic')} scroll-delay-${index + 2}`}>
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-ocean-100 to-sand-100 dark:from-ocean-900 dark:to-gray-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <feature.icon className={`h-10 w-10 ${feature.color} dark:${feature.color}`} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
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
            Reserve Your Table
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto ${getAnimationClasses('cta', 'typewriter')} scroll-delay-2`}>
            Experience exceptional dining with breathtaking views. Book your table now for an unforgettable culinary journey.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('cta', 'magnetic')} scroll-delay-3`}>
            <Button asChild size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/booking">Make Reservation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-600 rounded-full px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all">
              <Link to="/contact">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
