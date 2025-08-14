
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Crafting AI, Code & Innovation";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">{displayText}</span>
              <span className="animate-pulse text-orange-500">|</span>
            </h1>
            <p className="text-xl lg:text-2xl text-zinc-300 mb-8 leading-relaxed">
              Computer Science Enthusiast | AI & Robotics Developer | Web and System Designer
            </p>
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a
                href="https://github.com/sakthivarshans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/sakthivarshan-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:email2sakthi.s@gmail.com"
                className="text-zinc-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              Explore My Work
              <ArrowDown className="ml-2" size={20} />
            </a>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl"></div>
              <img
                src="/lovable-uploads/b46abbd1-5cec-49c6-9056-8866bb924b00.png"
                alt="Sakthivarshan S"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-orange-500/30 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
