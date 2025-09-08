import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building2, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building2,
      title: "Headquarters",
      details: ["Taurean Surgical", "Medical Technology Division", "Innovation Campus"]
    },
    {
      icon: MapPin,
      title: "Address", 
      details: ["1234 Medical Center Drive", "Healthcare District", "Innovation City, IC 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) CELEST-1", "+1 (555) 235-3781", "24/7 Support Available"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@celest.medical", "demo@celest.medical", "support@celest.medical"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM", "Emergency Support: 24/7"]
    },
    {
      icon: Globe,
      title: "Global Presence",
      details: ["North America", "Europe", "Asia-Pacific"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/3 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <div className="w-10 h-10 bg-gradient-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder & Additional Info */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Visit Our Innovation Center</span>
            </h3>
            <div className="bg-gradient-secondary rounded-xl p-8 text-center">
              <Building2 className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">
                Experience CELEST at our state-of-the-art demonstration facility. 
                Schedule a visit to see our technology in action.
              </p>
            </div>
          </div>

          {/* Support Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Need Immediate Support?
            </h3>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Emergency Technical Support</span>
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                For urgent technical issues during surgical procedures:
              </p>
              <p className="text-primary font-semibold">+1 (555) 911-TECH</p>
              <p className="text-xs text-muted-foreground">Available 24/7/365</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>Training & Education</span>
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Comprehensive training programs for medical staff:
              </p>
              <p className="text-primary font-semibold">training@celest.medical</p>
              <p className="text-xs text-muted-foreground">Response within 4 hours</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-primary" />
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