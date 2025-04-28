
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Leaf, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-afri-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-afri-green font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-serif font-bold">Afripalta</span>
            </div>
            <p className="text-afri-green-pale">
              Premium avocado products and sustainable farming practices that support our community and environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-afri-brown transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-afri-brown transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-afri-brown transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-afri-brown transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-afri-brown transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/avocado-oil" className="hover:text-afri-brown transition-colors">Avocado Oil</Link>
              </li>
              <li>
                <Link to="/seedlings" className="hover:text-afri-brown transition-colors">Seedlings</Link>
              </li>
              <li>
                <Link to="/fresh-fruits" className="hover:text-afri-brown transition-colors">Fresh Fruits</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-afri-brown transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-afri-brown transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Leaf size={16} className="mr-2 text-afri-brown" />
                <span>Cold-Pressed Avocado Oil</span>
              </li>
              <li className="flex items-center">
                <Leaf size={16} className="mr-2 text-afri-brown" />
                <span>Hass Avocado Seedlings</span>
              </li>
              <li className="flex items-center">
                <Leaf size={16} className="mr-2 text-afri-brown" />
                <span>Jumbo Avocado Seedlings</span>
              </li>
              <li className="flex items-center">
                <Leaf size={16} className="mr-2 text-afri-brown" />
                <span>Fresh Hass Avocados</span>
              </li>
              <li className="flex items-center">
                <Leaf size={16} className="mr-2 text-afri-brown" />
                <span>Fresh Jumbo Avocados</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-afri-brown" />
                <span>2000-acre Farm, East Africa</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-afri-brown" />
                <span>+254 (0) 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-afri-brown" />
                <span>info@afripalta.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-afri-green-light my-8" />
        
        <div className="text-center text-sm text-afri-green-pale">
          <p>&copy; {new Date().getFullYear()} Afripalta. All rights reserved.</p>
          <p className="mt-2">Sustainably grown with love for the community and environment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
