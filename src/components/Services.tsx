
const Services = () => {
  const services = [
    {
      title: "Wix Website Design & Development",
      description: "Professional website creation using Wix platform with custom designs and functionality.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design & Canva Branding",
      description: "Creative design solutions for digital products and brand identity development.",
      icon: "🎨",
    },
    {
      title: "AI/ML/DL Project Guidance",
      description: "Expert consultation and guidance for AI/ML projects. Successfully guided 10+ people.",
      icon: "🤖",
    },
    {
      title: "IoT & Embedded Systems Projects",
      description: "Complete IoT solutions and embedded systems development. Guided 30+ students.",
      icon: "⚡",
    },
  ];

  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-orange-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-zinc-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-zinc-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            Get in Touch for a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
