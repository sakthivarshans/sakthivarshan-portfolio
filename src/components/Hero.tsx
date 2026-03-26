import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Sakthivarshan.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-sm text-muted-foreground rounded-full mb-6 animate-pulse">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Open to Opportunities
            </div>

            <h1 className="font-display text-7xl lg:text-[10rem] font-medium mb-6 tracking-tight leading-none text-foreground">
              {displayText}
              <span className="animate-pulse text-secondary">|</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4">
              I'm Sakthivarshan — AI Builder & Researcher
            </p>
            
            <p className="text-base text-secondary mb-10 max-w-md lg:max-w-lg">
              I build AI that works in the real world. 10+ products shipped across healthcare, agriculture, marine science, autonomous systems & edge hardware.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full hover:bg-secondary transition-all duration-300 font-medium group"
              >
                Explore My Work
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="https://flowcv.com/resume/r7hsv86ut1k8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300 font-medium group"
              >
                Resume
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sakthivarshans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/sakthivarshan-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:email2sakthi.s@gmail.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start mb-12">
              <span className="px-4 py-1.5 border border-border text-muted-foreground text-sm rounded-full">10+ Products Shipped</span>
              <span className="px-4 py-1.5 border border-border text-muted-foreground text-sm rounded-full">5+ Domains Solved</span>
              <span className="px-4 py-1.5 border border-border text-muted-foreground text-sm rounded-full">Edge AI + Cloud</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">Scroll down</span>
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in order-first lg:order-last">
            <div className="relative">
              <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden bg-tertiary shadow-soft-xl">
                <img
                  src="/lovable-uploads/sakthivarshan-profile.png"
                  alt="Sakthivarshan S"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-tertiary border border-border -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-tertiary border border-border -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
