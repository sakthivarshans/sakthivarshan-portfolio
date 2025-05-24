
const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Internship Studio",
      period: "Jul–Aug 2024",
      description: "Real-time video analysis using Python and OpenCV.",
    },
    {
      title: "AI Intern",
      company: "Ediglobe Services",
      period: "Jun–Aug 2024",
      description: "Medical AI using TensorFlow, improved diagnostic accuracy.",
    },
    {
      title: "Cybersecurity Intern",
      company: "Cisco Networking",
      period: "May–Jul 2024",
      description: "Hands-on with firewalls, threat detection via Packet Tracer.",
    },
    {
      title: "Robotics Intern",
      company: "Kodacy",
      period: "Dec 2023",
      description: "Arduino-based automation, embedded hardware optimization.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Work <span className="text-orange-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-orange-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-zinc-900"></div>

                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-orange-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-zinc-400 bg-zinc-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-zinc-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
