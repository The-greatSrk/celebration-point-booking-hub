import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, MessageCircle, Star } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialLinks = {
    instagram: "https://instagram.com/celebrationpoint",
    whatsapp: "https://wa.me/919876543210?text=Hi! I want to book an event at Celebration Point",
    reviews: "https://g.page/r/celebrationpoint/review"
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Celebration Point
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Book Now
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(socialLinks.instagram, '_blank')}
              className="hover-lift"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
              className="hover-lift"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(socialLinks.reviews, '_blank')}
              className="hover-lift"
            >
              <Star className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 shadow-card">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-smooth"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-smooth"
              >
                Book Now
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              
              <div className="flex items-center space-x-3 px-3 pt-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(socialLinks.instagram, '_blank')}
                  className="hover-lift"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                  className="hover-lift"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(socialLinks.reviews, '_blank')}
                  className="hover-lift"
                >
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;