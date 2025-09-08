import { Star, Quote, User, Building2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import doctor1 from "@/assets/doctor1.jpg";
import doctor2 from "@/assets/doctor2.jpg";
import doctor3 from "@/assets/doctor3.jpg";
import doctor4 from "@/assets/doctor4.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rahul Kumar",
      role: "Founder & CEO",
      hospital: "Taurean Surgical",
      rating: 5,
      content: "CELEST has revolutionized our surgical procedures. The HD visualization and AI analytics have improved our precision by 40% and reduced operation times significantly. It's the future of surgical technology.",
      specialization: "Cardiovascular Surgery",
      image: doctor1
    },
    {
      name: "Dr. Sunil Manjila",
      role: "Co-Founder & CMO",
      hospital: "Taurean Surgical",
      rating: 5,
      content: "The 3D immersive experience is unprecedented. Students can now learn complex procedures in a way that was never possible before. It's truly transformative for medical education and surgical training.",
      specialization: "Neurosurgery",
      image: doctor3
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director of Medical Technology",
      hospital: "Innovation Health Systems",
      rating: 5,
      content: "The secure data management and insurer portal integration have streamlined our entire workflow. CELEST isn't just a visualization tool - it's a complete surgical ecosystem that enhances patient care.",
      specialization: "Medical Technology",
      image: doctor2
    },
    {
      name: "Dr. Arjun Patel",
      role: "Senior Orthopedic Surgeon",
      hospital: "Precision Orthopedics Center",
      rating: 5,
      content: "Having performed over 1000 surgeries with traditional methods, I can confidently say CELEST has elevated my practice to new heights. Patient outcomes have never been better with this revolutionary technology.",
      specialization: "Orthopedic Surgery",
      image: doctor4
    }
  ];

  const stats = [
    { icon: Building2, number: "500+", label: "Healthcare Facilities" },
    { icon: User, number: "2,000+", label: "Medical Professionals" },
    { icon: Award, number: "98%", label: "Satisfaction Rate" },
    { icon: Star, number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
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
            <div key={index} className="text-center group animate-bounce-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-16 h-16 bg-primary-light/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-light hover-glow">
                <stat.icon className="w-8 h-8 text-primary animate-medical-pulse" />
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
              className="group bg-card/70 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 relative animate-scale-in hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-bounce-in shadow-glow">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current animate-medical-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-colors hover-scale"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity animate-medical-pulse" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.hospital}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.specialization}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join these industry leaders?
          </p>
          <div className="inline-flex items-center space-x-2 bg-primary-light/30 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 hover-glow hover-scale">
            <Star className="w-5 h-5 text-primary animate-medical-pulse" />
            <span className="text-primary font-medium">Schedule your personalized demo today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;