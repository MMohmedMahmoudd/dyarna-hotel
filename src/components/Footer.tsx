
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-ocean-600 rounded-full">
                <Waves className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-poppins font-bold">Dyarna Hotel</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your oasis in Dahab, Egypt. Experience authentic Bedouin hospitality 
              with modern luxury on the beautiful Red Sea coast.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-ocean-600">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-ocean-600">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-ocean-600">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Rooms", path: "/rooms" },
                { name: "Spa & Wellness", path: "/spa" },
                { name: "Restaurant", path: "/restaurant" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-ocean-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-ocean-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mashraba Street, Dahab<br />
                  South Sinai, Egypt
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-ocean-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+20 69 364 0301</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-ocean-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@dyarnahotel.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dyarna Hotel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
