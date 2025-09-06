import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, MessageCircle, Star, MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const socialLinks = {
    instagram: "https://instagram.com/celebrationpoint",
    whatsapp: "https://wa.me/919876543210?text=Hi! I want to book an event at Celebration Point",
    reviews: "https://g.page/r/celebrationpoint/review"
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start planning your perfect celebration? We're here to help make your dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Phone className="h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@celebrationpoint.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Service Areas</p>
                    <p className="text-muted-foreground">Mumbai, Pune, and surrounding areas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Follow Us & Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <Button
                    className="justify-start bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover-lift"
                    onClick={() => window.open(socialLinks.instagram, '_blank')}
                  >
                    <Instagram className="h-5 w-5 mr-3" />
                    Follow us on Instagram
                  </Button>
                  
                  <Button
                    className="justify-start bg-green-600 hover:bg-green-700 text-white shadow-lg hover-lift"
                    onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    Chat on WhatsApp
                  </Button>
                  
                  <Button
                    className="justify-start bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover-lift"
                    onClick={() => window.open(socialLinks.reviews, '_blank')}
                  >
                    <Star className="h-5 w-5 mr-3" />
                    Write a Google Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ / Additional Info */}
          <div className="space-y-6">
            <Card className="shadow-card hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary">How far in advance should I book?</h4>
                    <p className="text-sm text-muted-foreground">We recommend booking at least 2-3 weeks in advance for popular dates, but we can accommodate last-minute requests based on availability.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">Do you provide decorations?</h4>
                    <p className="text-sm text-muted-foreground">Yes! All our packages include themed decorations, and we can customize them according to your preferences.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">Can you handle dietary restrictions?</h4>
                    <p className="text-sm text-muted-foreground">Absolutely! We accommodate all dietary requirements including vegetarian, vegan, gluten-free, and other special dietary needs.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">What if I need to cancel or reschedule?</h4>
                    <p className="text-sm text-muted-foreground">We understand things can change. Contact us as soon as possible, and we'll work together to find the best solution.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-center">Ready to Celebrate?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Don't wait! Book your perfect event today and let us create memories that will last a lifetime.
                </p>
                <Button 
                  size="lg"
                  variant="celebration"
                  className="w-full hover-lift animate-glow"
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book Your Event Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;