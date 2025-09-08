import { Eye, Brain, Monitor, Shield, Users, Video, Zap, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import celestDevice from "@/assets/celest-device.png";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "HD 3D Visualization",
      description: "Crystal-clear, high-resolution 3D imaging that provides surgeons with unparalleled depth perception and anatomical detail.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Brain,
      title: "AI Detection & Segmentation", 
      description: "Advanced artificial intelligence automatically identifies and segments anatomical structures for enhanced surgical planning.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Monitor,
      title: "IMAX-like Experience",
      description: "Immersive cinematic-quality visualization that transforms the operating room into a state-of-the-art surgical theater.",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Users,
      title: "Medical E-Learning",
      description: "Comprehensive educational platform for medical students and professionals with interactive surgical simulations.",
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Video,
      title: "Evidence-Based Documentation",
      description: "Secure video recording and documentation system for surgical procedures, ensuring fraud-free claim management.",
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      icon: Shield,
      title: "Secure Data Management",
      description: "HIPAA-compliant data handling with enterprise-grade security for patient information and surgical records.",
      gradient: "from-teal-500/10 to-blue-500/10"
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Live surgical metrics and performance analytics to optimize procedures and improve patient outcomes.",
      gradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: Zap,
      title: "Insurer Portal Integration",
      description: "Seamless integration with insurance systems for streamlined claim processing and approval workflows.",
      gradient: "from-cyan-500/10 to-blue-500/10"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-secondary relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/3 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary 
            <span className="text-primary"> Medical Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CELEST transforms surgical visualization with cutting-edge technology, 
            delivering unprecedented clarity and intelligence to operating rooms worldwide.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-2xl transform rotate-6" />
              <img 
                src={celestDevice}
                alt="CELEST Medical Device"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl float animate-float"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Immersive Surgical Intelligence Platform
            </h3>
            <p className="text-lg text-muted-foreground">
              CELEST represents the pinnacle of medical visualization technology, combining 
              high-definition imaging, artificial intelligence, and immersive 3D experiences 
              to revolutionize surgical procedures and medical education.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-medical-pulse" />
                <span className="text-foreground">10x higher resolution than traditional systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-medical-pulse" style={{ animationDelay: "0.5s" }} />
                <span className="text-foreground">Real-time AI-powered surgical guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-medical-pulse" style={{ animationDelay: "1s" }} />
                <span className="text-foreground">HIPAA-compliant secure data management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;