import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ProjectEnquiry from "@/components/ProjectEnquiry";
import Navigation from "@/components/Navigation";
import RedStringBackground from "@/components/RedStringBackground";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <RedStringBackground />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <ProjectEnquiry />
      
      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-display text-2xl font-semibold">Sakthivarshan</span>
              <p className="text-background/60 mt-1">AI & Robotics Developer</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sakthivarshans"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/sakthivarshan-s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:email2sakthi.s@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
