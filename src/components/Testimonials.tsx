import { Star, Quote, User, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief of Surgery",
      hospital: "Metropolitan Medical Center",
      rating: 5,
      content: "CELEST has revolutionized our surgical procedures. The HD visualization and AI analytics have improved our precision by 40% and reduced operation times significantly.",
      specialization: "Cardiovascular Surgery"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of Neurosurgery",
      hospital: "Advanced Brain Institute",
      rating: 5,
      content: "The 3D immersive experience is unprecedented. Students can now learn complex procedures in a way that was never possible before. It's truly transformative for medical education.",
      specialization: "Neurosurgery"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Director of Medical Technology",
      hospital: "Innovation Health Systems",
      rating: 5,
      content: "The secure data management and insurer portal integration have streamlined our entire workflow. CELEST isn't just a visualization tool - it's a complete surgical ecosystem.",
      specialization: "Medical Technology"
    },
    {
      name: "Dr. David Park",
      role: "Senior Orthopedic Surgeon",
      hospital: "Precision Orthopedics Center",
      rating: 5,
      content: "Having performed over 1000 surgeries with traditional methods, I can confidently say CELEST has elevated my practice to new heights. Patient outcomes have never been better.",
      specialization: "Orthopedic Surgery"
    }
  ];

  const stats = [
    { icon: Building2, number: "500+", label: "Healthcare Facilities" },
    { icon: User, number: "2,000+", label: "Medical Professionals" },
    { icon: Award, number: "98%", label: "Satisfaction Rate" },
    { icon: Star, number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by 
            <span className="text-primary"> Medical Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of healthcare professionals who have transformed their practice with CELEST's 
            innovative surgical visualization technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.hospital}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.specialization}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join these industry leaders?
          </p>
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-primary animate-medical-pulse" />
            <span className="text-primary font-medium">Schedule your personalized demo today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;