import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye, Activity, Users, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Solutions", href: "#solutions", icon: Eye },
    { name: "Features", href: "#features", icon: Activity },
    { name: "Testimonials", href: "#testimonials", icon: Users },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-light animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-bounce-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/d37d94e8-172c-41e9-aacb-3bcdba983d02.png" 
                alt="CELEST Logo"
                className="w-10 h-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-foreground">CELEST</span>
              <span className="text-xs text-primary bg-primary-light px-2 py-1 rounded-full animate-medical-pulse">™</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary flex items-center space-x-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-4 h-4 group-hover:animate-medical-pulse" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 animate-slide-in-right">
            <Button variant="demo" size="lg" className="animate-medical-glow">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover-scale"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up bg-card/50 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary flex items-center space-x-2 py-2 animate-fade-in"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-border/50">
                <Button variant="demo" size="lg" className="w-full animate-scale-in">
                  Request Demo
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