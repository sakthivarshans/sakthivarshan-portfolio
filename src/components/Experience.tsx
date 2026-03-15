const Experience = () => {
  const experiences = [
    {
      title: "Vice President",
      company: "Code Craft Club",
      location: "Karunya University",
      period: "Aug 2025 – Present",
      description: "Lead technical workshops, hackathons, and coding events for 100+ student members. Mentoring juniors in AI/ML, IoT, and embedded systems — building a culture of real-world builders, not just learners.",
      tags: ["Leadership", "IoT"],
    },
    {
      title: "Intel Unnati Industry Trainee",
      company: "Intel Corporation",
      location: "Industry Training",
      period: "Feb – Mar 2025",
      description: "Engineered an LLM-powered bug detection and auto-fix engine that identifies syntax errors, type mismatches, and logical flaws in Python codebases — automating error resolution for real-world programming scenarios.",
      tags: ["AI/ML", "Bug Detection"],
    },
    {
      title: "AI Intern",
      company: "Internship Studio",
      location: "Remote",
      period: "Jul – Aug 2024",
      description: "Developed a real-time video analysis pipeline using Python and OpenCV — object detection, motion tracking, and live stream processing on edge devices.",
      tags: ["Python", "OpenCV"],
    },
    {
      title: "AI Intern",
      company: "Ediglobe Services",
      location: "Remote",
      period: "Jun – Aug 2024",
      description: "Built a Medical AI diagnostic model using TensorFlow trained on medical imaging data to assist healthcare professionals with improved diagnostic accuracy.",
      tags: ["TensorFlow", "Medical AI"],
    },
    {
      title: "Cybersecurity Intern",
      company: "Cisco Networking",
      location: "Virtual",
      period: "May – Jul 2024",
      description: "Designed and simulated secure enterprise network architectures using Cisco Packet Tracer — firewalls, IDS/IPS, VPNs, encryption, and incident response playbooks.",
      tags: ["Security", "Networking"],
    },
    {
      title: "Robotics Intern",
      company: "Kodacy",
      location: "On-site",
      period: "Dec 2023",
      description: "Arduino-based embedded automation — programming microcontrollers for task automation and hardware-in-the-loop testing.",
      tags: ["Arduino", "Robotics"],
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Experiences</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground">
              My Journey<br />So Far
            </h2>
          </div>
          <div className="flex flex-col justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-muted-foreground">
              From embedded hardware to LLMs — every internship added a new layer to how I think about building AI products.
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-0 border-t border-border">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="py-8 border-b border-border group hover:bg-tertiary/50 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                    {exp.company}, {exp.location}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">• {exp.period}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.title}. {exp.description}
                  </p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-2 justify-start lg:justify-end">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-tertiary text-foreground text-xs rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
