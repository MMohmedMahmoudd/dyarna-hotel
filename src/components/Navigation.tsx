import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Facilities", path: "/facilities" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Spa", path: "/spa" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-sand-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-ocean-100 dark:bg-ocean-900 rounded-full group-hover:bg-ocean-200 dark:group-hover:bg-ocean-800 transition-colors">
              <Waves className="h-6 w-6 text-ocean-600 dark:text-ocean-400" />
            </div>
            <span className="text-xl font-poppins font-bold text-gray-800 dark:text-gray-200">
              Dyarna Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-ocean-600 dark:hover:text-ocean-400 ${
                  isActive(item.path)
                    ? "text-ocean-600 dark:text-ocean-400 border-b-2 border-ocean-600 dark:border-ocean-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="bg-ocean-600 hover:bg-ocean-700 dark:bg-ocean-700 dark:hover:bg-ocean-600 text-white rounded-full px-6">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-ocean-600 dark:text-ocean-400 bg-ocean-50 dark:bg-ocean-900/50"
                      : "text-gray-700 dark:text-gray-300 hover:text-ocean-600 dark:hover:text-ocean-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-ocean-600 hover:bg-ocean-700 dark:bg-ocean-700 dark:hover:bg-ocean-600 text-white rounded-full">
                  <Link to="/booking" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
