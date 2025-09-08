import { Eye, Twitter, Linkedin, Mail, Phone, MapPin, Shield, FileText, Users, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "3D Visualization", href: "#features" },
        { name: "AI Analytics", href: "#features" },
        { name: "Security", href: "#" },
        { name: "Integrations", href: "#" }
      ]
    },
    solutions: {
      title: "Solutions",
      links: [
        { name: "Hospitals", href: "#" },
        { name: "Surgery Centers", href: "#" },
        { name: "Medical Schools", href: "#" },
        { name: "Insurance", href: "#" },
        { name: "Research", href: "#" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Training", href: "#" },
        { name: "24/7 Support", href: "#contact" },
        { name: "System Status", href: "#" },
        { name: "Contact", href: "#contact" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Awards", href: "#" }
      ]
    }
  };

  const certifications = [
    { name: "HIPAA Compliant", icon: Shield },
    { name: "FDA Approved", icon: FileText },
    { name: "ISO 27001", icon: Shield },
    { name: "SOC 2 Type II", icon: Users }
  ];

  return (
    <footer className="bg-gradient-secondary border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">CELEST</span>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full ml-2">™</span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing surgical visualization with immersive 3D technology and AI-powered analytics. 
                Transforming healthcare through innovation and precision.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) CELEST-1</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@celest.medical</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Innovation Campus, Healthcare District</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-card/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
                <a href="#" className="w-8 h-8 bg-card/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
                <a href="#" className="w-8 h-8 bg-card/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Certifications & Compliance</h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-card/30 rounded-lg px-3 py-2">
                    <cert.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 bg-card/30 rounded-lg px-4 py-2">
              <Zap className="w-4 h-4 text-primary animate-medical-pulse" />
              <span className="text-sm text-foreground font-medium">Enterprise Ready</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} CELEST by Taurean Surgical. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;