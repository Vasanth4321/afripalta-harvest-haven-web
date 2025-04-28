
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Avocado Oil", path: "/avocado-oil" },
    { title: "Seedlings", path: "/seedlings" },
    { title: "Fresh Fruits", path: "/fresh-fruits" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-afri-green flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-serif font-bold text-afri-green">Afripalta</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-afri-green ${
                  isActive(link.path)
                    ? "text-afri-green"
                    : "text-foreground"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-5 shadow-lg animate-fade-in">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 text-base font-medium ${
                    isActive(link.path)
                      ? "text-afri-green"
                      : "text-foreground hover:text-afri-green"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
