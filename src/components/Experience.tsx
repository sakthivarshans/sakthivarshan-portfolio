import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Vice President",
      company: "Code Craft Club",
      location: "Karunya University",
      period: "Aug 2025 – Present",
      description: "Leading a community of innovators passionate about IoT, embedded systems, 3D modeling, and web development. Organizing hands-on training sessions and mentoring juniors in hardware design and system integration.",
      tags: ["Leadership", "IoT"],
    },
    {
      title: "Intel Unnati Industry Trainee",
      company: "Intel Corporation",
      location: "Industry Training",
      period: "Feb – Mar 2025",
      description: "Developed AI-based bug detection model improving software reliability by automatically scanning code to find bugs and vulnerabilities using machine learning.",
      tags: ["AI/ML", "Bug Detection"],
    },
    {
      title: "AI Intern",
      company: "Internship Studio",
      location: "Remote",
      period: "Jul – Aug 2024",
      description: "Developed real-time video analysis project using Python and OpenCV to process live video streams with object detection and motion tracking.",
      tags: ["Python", "OpenCV"],
    },
    {
      title: "AI Intern",
      company: "Ediglobe Services",
      location: "Remote",
      period: "Jun – Aug 2024",
      description: "Built Medical AI project using TensorFlow to improve diagnostic accuracy, training models on medical imaging data to assist healthcare professionals.",
      tags: ["TensorFlow", "Medical AI"],
    },
    {
      title: "Cybersecurity Intern",
      company: "Cisco Networking",
      location: "Virtual",
      period: "May – Jul 2024",
      description: "Hands-on project using Packet Tracer for firewalls and threat detection, configuring firewall rules and real-time security monitoring.",
      tags: ["Security", "Networking"],
    },
    {
      title: "Robotics Intern",
      company: "Kodacy",
      location: "On-site",
      period: "Dec 2023",
      description: "Arduino-based automation project focusing on optimizing embedded hardware, programming microcontrollers for efficient task automation.",
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
              Explore My<br />Design Journey
            </h2>
          </div>
          <div className="flex flex-col justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-muted-foreground mb-4">
              Over the past 4+ years, I've had the opportunity to work on a wide range of projects, 
              collaborating with diverse teams and clients to bring creative visions to life.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all">
              Book A Call <ArrowUpRight size={16} />
            </a>
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
