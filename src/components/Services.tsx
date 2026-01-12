import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Wix Website Design & Development",
      description: "Professional website creation using Wix platform with custom designs and functionality.",
    },
    {
      number: "02",
      title: "AI/ML Projects",
      description: "Expert consultation and guidance for AI/ML projects. Successfully guided 10+ people.",
    },
    {
      number: "03",
      title: "IoT & Embedded Systems Projects",
      description: "Complete IoT solutions and embedded systems development. Guided 30+ students.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">What I Do</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-4">
            My Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offering expert solutions across web development, design, and technical mentorship
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-tertiary p-8 rounded-2xl hover-lift animate-fade-in-up border border-border hover:border-foreground transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-light text-secondary">{service.number}</span>
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full hover:bg-secondary transition-all duration-300 font-medium group"
          >
            Get in Touch for a Consultation
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
