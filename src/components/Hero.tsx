import { Button } from "@/components/ui/button";
import { PlayCircle, Eye, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/40" />
        <img 
          src={heroImage}
          alt="Advanced Medical Visualization"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Immersive Surgical Visualization Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-primary animate-medical-pulse">
              HD Surgical Vision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience revolutionary 3D visualization with AI-powered analytics that transforms 
            surgical precision and patient outcomes through immersive technology.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">HD Visualization</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">AI Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Secure & Compliant</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              <PlayCircle className="w-5 h-5 mr-2 group-hover:animate-medical-pulse" />
              Request Live Demo
            </Button>
            <Button variant="outline" size="xl" className="backdrop-blur-sm">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10x</div>
              <div className="text-sm text-muted-foreground">Higher Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3D</div>
              <div className="text-sm text-muted-foreground">Immersive Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">AI</div>
              <div className="text-sm text-muted-foreground">Powered Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;