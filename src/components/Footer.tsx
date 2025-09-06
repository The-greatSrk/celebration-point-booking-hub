import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Star, Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = {
    instagram: "https://instagram.com/celebrationpoint",
    whatsapp: "https://wa.me/919876543210?text=Hi! I want to book an event at Celebration Point",
    reviews: "https://g.page/r/celebrationpoint/review"
  };

  const services = [
    "Birthday Parties 🎂",
    "Bridal Rope Ceremony 👰",
    "Baby Shower 👶",
    "Propose Event 💍",
    "Farewell Events 👥",
    "Couple Date ❤️",
    "E-Celebration 🌐",
    "Mini Movie Theatre 🎥",
    "Surprise Date 🌹"
  ];

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Celebration Point
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for creating unforgettable celebrations. Professional event planning services with a personal touch, making every moment special.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.instagram, '_blank')}
                className="hover-lift transition-smooth"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                className="hover-lift transition-smooth"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.reviews, '_blank')}
                className="hover-lift transition-smooth"
              >
                <Star className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <button 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth text-left"
                    onClick={() => {
                      const element = document.getElementById('services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book Now
                </button>
              </li>
              <li>
                <button 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  onClick={() => window.open(socialLinks.reviews, '_blank')}
                >
                  Reviews & Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">info@celebrationpoint.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Service Area</p>
                  <p className="text-sm text-muted-foreground">Mumbai, Pune & nearby</p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full hover-lift mt-4"
              variant="celebration"
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <p>© {currentYear} Celebration Point. Made with</p>
              <Heart className="h-4 w-4 text-red-500" />
              <p>for creating beautiful memories.</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-smooth">Privacy Policy</button>
              <button className="hover:text-primary transition-smooth">Terms of Service</button>
              <button className="hover:text-primary transition-smooth">Refund Policy</button>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              🎉 Creating Beautiful Celebrations Since 2019 | 500+ Happy Clients | Available 24/7 🎉
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;