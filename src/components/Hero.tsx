import { Button } from "@/components/ui/button";
import { PlayCircle, Eye, Zap, Shield, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage}
          alt="Advanced Medical Visualization"
          className="w-full h-full object-cover mix-blend-overlay opacity-10"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-10 right-1/4 w-16 h-16 bg-primary/15 rounded-full blur-xl animate-medical-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-light animate-bounce-in hover-glow">
            <Sparkles className="w-5 h-5 text-primary animate-medical-pulse" />
            <span className="text-sm text-primary font-semibold">Revolutionary Surgical Visualization Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-primary animate-gradient-shift gradient-animate">
              HD Surgical Vision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Experience revolutionary 3D visualization with AI-powered analytics that transforms 
            surgical precision and patient outcomes through immersive technology.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center space-x-2 bg-card/40 backdrop-blur-sm rounded-full px-4 py-3 shadow-light hover-scale hover-glow">
              <Eye className="w-5 h-5 text-primary animate-medical-pulse" />
              <span className="text-sm text-foreground font-medium">HD Visualization</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/40 backdrop-blur-sm rounded-full px-4 py-3 shadow-light hover-scale hover-glow">
              <Zap className="w-5 h-5 text-primary animate-medical-pulse" style={{ animationDelay: "0.5s" }} />
              <span className="text-sm text-foreground font-medium">AI Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/40 backdrop-blur-sm rounded-full px-4 py-3 shadow-light hover-scale hover-glow">
              <Shield className="w-5 h-5 text-primary animate-medical-pulse" style={{ animationDelay: "1s" }} />
              <span className="text-sm text-foreground font-medium">Secure & Compliant</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in" style={{ animationDelay: "0.9s" }}>
            <Button variant="hero" size="xl" className="group">
              <PlayCircle className="w-6 h-6 mr-3 group-hover:animate-medical-pulse" />
              Request Live Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="backdrop-blur-sm">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <div className="text-center group hover-scale">
              <div className="text-4xl font-bold text-primary mb-2 animate-bounce-in hover:animate-medical-pulse" style={{ animationDelay: "1.4s" }}>10x</div>
              <div className="text-sm text-muted-foreground">Higher Resolution</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="text-4xl font-bold text-primary mb-2 animate-bounce-in hover:animate-medical-pulse" style={{ animationDelay: "1.6s" }}>3D</div>
              <div className="text-sm text-muted-foreground">Immersive Experience</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="text-4xl font-bold text-primary mb-2 animate-bounce-in hover:animate-medical-pulse" style={{ animationDelay: "1.8s" }}>AI</div>
              <div className="text-sm text-muted-foreground">Powered Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;