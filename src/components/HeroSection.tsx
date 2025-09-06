import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Calendar, Award } from "lucide-react";
import heroImage from "@/assets/hero-celebration.jpg";

const HeroSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'hi' | 'mr'>('en');

  const content = {
    en: {
      title: "Celebration Point",
      subtitle: "Your Dreams, Our Expertise",
      description: "Professional event planning services for all your special moments. From birthday parties to bridal ceremonies, we make your celebrations unforgettable.",
      cta: "Book Your Event",
      stats: [
        { number: "500+", label: "Happy Clients" },
        { number: "50+", label: "Events Monthly" },
        { number: "4.9★", label: "Client Rating" },
        { number: "₹549+", label: "Starting Price" }
      ]
    },
    hi: {
      title: "सेलिब्रेशन पॉइंट",
      subtitle: "आपके सपने, हमारी विशेषज्ञता",
      description: "आपके सभी खुशी के पलों के लिए व्यावसायिक इवेंट प्लानिंग सेवाएं। जन्मदिन की पार्टी से लेकर शादी की रस्में तक, हम आपके उत्सव को अविस्मरणीय बनाते हैं।",
      cta: "अपना इवेंट बुक करें",
      stats: [
        { number: "500+", label: "खुश ग्राहक" },
        { number: "50+", label: "मासिक इवेंट" },
        { number: "4.9★", label: "ग्राहक रेटिंग" },
        { number: "₹549+", label: "शुरुआती कीमत" }
      ]
    },
    mr: {
      title: "सेलिब्रेशन पॉईंट",
      subtitle: "तुमची स्वप्ने, आमची तज्ञता",
      description: "तुमच्या सर्व आनंदाच्या क्षणांसाठी व्यावसायिक इव्हेंट प्लानिंग सेवा. वाढदिवसाच्या पार्टीपासून ते लग्नाच्या विधींपर्यंत, आम्ही तुमचे उत्सव अविस्मरणीय बनवतो.",
      cta: "तुमचा इव्हेंट बुक करा",
      stats: [
        { number: "500+", label: "आनंदी ग्राहक" },
        { number: "50+", label: "मासिक इव्हेंट" },
        { number: "4.9★", label: "ग्राहक रेटिंग" },
        { number: "₹549+", label: "सुरुवातीची किंमत" }
      ]
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/80" />
      </div>
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Language Selector */}
          <div className="flex justify-center space-x-2 mb-8">
            {(['en', 'hi', 'mr'] as const).map((lang) => (
              <Button
                key={lang}
                variant={currentLanguage === lang ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentLanguage(lang)}
                className="transition-smooth"
              >
                {lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'मराठी'}
              </Button>
            ))}
          </div>

          {/* Main Content */}
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent animate-glow">
              {content[currentLanguage].title}
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-4 text-white/90">
              {content[currentLanguage].subtitle}
            </p>
            
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80 leading-relaxed">
              {content[currentLanguage].description}
            </p>

            <Button
              size="lg"
              onClick={scrollToBooking}
              variant="gold"
              className="px-8 py-4 text-lg hover-lift animate-glow"
            >
              {content[currentLanguage].cta}
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {content[currentLanguage].stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;