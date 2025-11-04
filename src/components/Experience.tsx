
const Experience = () => {
  const experiences = [
    {
      title: "Vice President",
      company: "Code Craft Club",
      period: "Aug 2025–Present",
      description: "As Vice President of the Code Craft Club, I led a vibrant community of innovators passionate about IoT, embedded systems, 3D modeling, and web development. I organized and conducted hands-on training sessions, mentoring juniors in hardware design, embedded programming, and system integration. I coordinated team projects from concept to completion, encouraged creative problem solving, and fostered a collaborative environment that inspired members to push their technical boundaries. Through this role, I combined leadership with technical expertise, helping transform ideas into real-world solutions.",
    },
    {
      title: "Intel Unnati Industry Trainee",
      company: "Intel Corporation",
      period: "Feb–Mar 2025",
      description: "An AI-based bug detection model improves software reliability by automatically scanning code to find bugs and vulnerabilities. It uses machine learning to detect complex errors early in development, reducing false positives and speeding up fixes. The model predicts high-risk areas, helping developers focus testing efforts efficiently. By automating routine debugging tasks, it enhances developer productivity and results in higher-quality, more robust software applications.",
    },
    {
      title: "AI Intern",
      company: "Internship Studio",
      period: "Jul–Aug 2024",
      description: "A real-time video analysis project was developed during an internship using Python and OpenCV to process live video streams efficiently. The system captures video frames from a camera or video source and applies image processing techniques to extract actionable insights, such as object detection and motion tracking. By processing frames in real-time, the project enables immediate feedback and interaction suited for surveillance, automation, or user-interface applications.",
    },
    {
      title: "AI Intern",
      company: "Ediglobe Services",
      period: "Jun–Aug 2024",
      description: "A Medical AI project was undertaken to improve diagnostic accuracy using TensorFlow. The model was trained on medical imaging data to assist healthcare professionals in identifying diseases more reliably and quickly. By leveraging deep learning techniques, the system enhanced the precision of diagnoses and reduced human error. TensorFlow's powerful framework enabled efficient model development and deployment in clinical settings. This AI-driven approach contributes to better patient outcomes through timely and accurate medical analysis.",
    },
    {
      title: "Cybersecurity Intern",
      company: "Cisco Networking",
      period: "May–Jul 2024",
      description: "A hands-on project was conducted using Packet Tracer to work with firewalls and threat detection. The project involved configuring firewall rules to control network traffic and prevent unauthorized access. It demonstrated real-time monitoring and identification of potential security threats within a simulated network environment. Through practical exercises, skills in network security and intrusion detection were enhanced.",
    },
    {
      title: "Robotics Intern",
      company: "Kodacy",
      period: "Dec 2023",
      description: "An Arduino-based automation project was completed during a robotics internship focusing on optimizing embedded hardware. It involved programming microcontrollers to automate tasks efficiently while improving hardware performance and power usage. This hands-on work enhanced skills in embedded systems and real-time control for robotic applications.",
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
