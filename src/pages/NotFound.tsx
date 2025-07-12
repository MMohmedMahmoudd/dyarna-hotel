import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const NotFound = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-sand-50 to-ocean-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-bounce">
          <h1 className="text-9xl font-bold text-ocean-200 mb-4">404</h1>
        </div>
        
        <div className="scroll-zoom-rotate stagger-2">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Oops! Page Not Found
          </h2>
        </div>
        
        <div className="scroll-fade-up stagger-3">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            It seems like the page you're looking for has drifted away like a desert breeze. 
            Let's get you back to discovering the beauty of Dyarna Hotel.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-slide-up stagger-4">
          <Button asChild size="lg" className="bg-ocean-600 hover:bg-ocean-700 text-white rounded-full px-8">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-ocean-600 text-ocean-600 hover:bg-ocean-50 rounded-full px-8"
          >
            <Link to="/" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 scroll-flip stagger-5">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80"
            alt="Dahab desert landscape"
            className="w-64 h-40 object-cover rounded-2xl shadow-lg mx-auto opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
