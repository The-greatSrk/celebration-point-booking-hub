import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Phone, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 to-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-2">
            Oops! Page not found
          </h2>
          <p className="text-muted-foreground mb-8">
            Looks like this celebration got lost! Let's get you back to the party.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            asChild
            variant="celebration"
            size="lg"
            className="w-full hover-lift"
          >
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full hover-lift"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>

          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              className="flex-1 hover-lift"
              onClick={() => window.open('tel:+918805158674')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
            <Button 
              variant="ghost" 
              className="flex-1 hover-lift"
              onClick={() => window.open('https://wa.me/918805158674?text=Hi! I need help finding what I was looking for on Celebration Point website.')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-12 text-xs text-muted-foreground">
          <p>Error Code: 404 | Page: {location.pathname}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
