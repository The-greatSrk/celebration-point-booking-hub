import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cake, 
  Heart, 
  Baby, 
  Gift, 
  Users, 
  Coffee,
  Monitor,
  Film,
  Sparkles
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Cake className="h-8 w-8" />,
      title: "Birthday Parties",
      emoji: "🎂",
      description: "Customizable birthday celebration packages for all ages",
      priceRange: "₹549 - ₹1,899",
      features: ["Theme Decorations", "Cake & Snacks", "Games & Activities", "Photography"],
      popular: true
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Bridal Rope Ceremony",
      emoji: "👰",
      description: "Traditional and elegant bridal ceremonies",
      priceRange: "Custom Pricing",
      features: ["Traditional Setup", "Floral Arrangements", "Ceremony Coordination", "Photography"]
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Baby Shower",
      emoji: "👶",
      description: "Beautiful baby shower celebrations",
      priceRange: "₹799",
      features: ["Themed Decorations", "Games & Activities", "Refreshments", "Gift Arrangements"]
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Propose Event",
      emoji: "💍",
      description: "Romantic proposal setups and arrangements",
      priceRange: "Custom Pricing",
      features: ["Romantic Setup", "Surprise Elements", "Photography", "Special Arrangements"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Farewell & Group Events",
      emoji: "👥",
      description: "Memorable farewell parties and group meetings",
      priceRange: "Custom Pricing",
      features: ["Group Activities", "Memory Books", "Catering Options", "Entertainment"]
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Couple Date",
      emoji: "❤️",
      description: "Romantic date experiences and couple celebrations",
      priceRange: "Custom Pricing",
      features: ["Romantic Ambiance", "Special Dining", "Privacy", "Memorable Experience"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "E-Celebration",
      emoji: "🌐",
      description: "Virtual celebrations and online events",
      priceRange: "Custom Pricing",
      features: ["Virtual Setup", "Online Games", "Digital Invites", "Live Streaming"]
    },
    {
      icon: <Film className="h-8 w-8" />,
      title: "Mini Movie Theatre",
      emoji: "🎥",
      description: "Private movie screening experiences",
      priceRange: "Custom Pricing",
      features: ["Private Screening", "Comfortable Seating", "Snacks & Drinks", "Movie Selection"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Surprise Date",
      emoji: "🌹",
      description: "Special surprise arrangements and dates",
      priceRange: "Custom Pricing",
      features: ["Surprise Planning", "Special Setup", "Unique Experience", "Memory Creation"]
    }
  ];

  const openWhatsApp = (serviceName: string) => {
    const message = `Hi! I'm interested in booking ${serviceName} at Celebration Point. Could you please provide more details about pricing and availability?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we create unforgettable moments tailored to your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift shadow-card relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-gold text-gold-foreground">
                  Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">
                  {service.title} {service.emoji}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary">{service.priceRange}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-2">
                  <Button 
                    onClick={() => openWhatsApp(service.title)}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Book Now via WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={scrollToBooking}
                    className="w-full"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToBooking}
            variant="celebration"
            className="px-8 py-4 hover-lift"
          >
            View All Services & Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;