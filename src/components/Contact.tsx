import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building2, Globe, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building2,
      title: "Headquarters",
      details: ["Taurean Surgical Pvt Ltd", "Medical Technology Division", "Innovation Campus"]
    },
    {
      icon: MapPin,
      title: "Address", 
      details: ["Hyderabad, Telangana", "India", "View on Google Maps"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9876543210", "Business Line", "24/7 Support Available"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@celest.medical", "demo@celest.medical", "support@celest.medical"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM", "Emergency Support: 24/7"]
    },
    {
      icon: Globe,
      title: "Global Presence",
      details: ["India (HQ)", "North America", "Europe"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in 
            <span className="text-primary"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your surgical practice? Our team of medical technology 
            experts is here to help you get started with CELEST.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className="group bg-card/70 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-scale-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <div className="w-10 h-10 bg-primary-light/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-light">
                    <item.icon className="w-5 h-5 text-primary animate-medical-pulse" />
                  </div>
                  <span className="text-lg">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.title === "Address" && detailIndex === 2 ? (
                        <a 
                          href="https://maps.google.com/maps?q=Taurean+Surgical+Pvt+Ltd+Hyderabad" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-primary hover:text-primary/80 hover-scale"
                        >
                          <span>{detail}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        detail
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Maps & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {/* Google Maps Embed */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-light hover-glow">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary animate-medical-pulse" />
              <span>Find Us on Google Maps</span>
            </h3>
            <div className="aspect-video rounded-xl overflow-hidden shadow-medical">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.7570655989!2d78.24323!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Support Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6 animate-slide-up">
              Need Immediate Support?
            </h3>
            
            <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-light hover-glow animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary animate-medical-pulse" />
                <span>Emergency Technical Support</span>
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                For urgent technical issues during surgical procedures:
              </p>
              <p className="text-primary font-semibold text-lg">+91 9876543210</p>
              <p className="text-xs text-muted-foreground">Available 24/7/365</p>
            </div>

            <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-light hover-glow animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary animate-medical-pulse" />
                <span>Training & Education</span>
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Comprehensive training programs for medical staff:
              </p>
              <p className="text-primary font-semibold">training@celest.medical</p>
              <p className="text-xs text-muted-foreground">Response within 4 hours</p>
            </div>

            <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-light hover-glow animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-primary animate-medical-pulse" />
                <span>Partnership Opportunities</span>
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Interested in becoming a CELEST partner or distributor:
              </p>
              <p className="text-primary font-semibold">partnerships@celest.medical</p>
              <p className="text-xs text-muted-foreground">Business development team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;