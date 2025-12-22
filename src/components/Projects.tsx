import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  category: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

const Projects = () => {
  const [projects] = useState<Project[]>(projectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-6 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => openModal(project)}
              className="group cursor-pointer bg-background rounded-2xl overflow-hidden shadow-soft hover-lift animate-fade-in-up border border-border hover:border-foreground transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-80 h-48 lg:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-tertiary text-xs text-muted-foreground rounded-full border border-border mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-foreground transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-4">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm lg:text-base line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-tertiary text-xs text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-tertiary text-xs text-muted-foreground rounded-full border border-border">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-background rounded-3xl p-12 border border-border shadow-soft">
            <div className="w-16 h-16 bg-foreground text-background rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ArrowRight size={28} />
            </div>
            <h3 className="font-display text-3xl font-medium text-foreground mb-4">
              Upcoming & Ongoing Projects
            </h3>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              I'm constantly working on new and exciting projects! Stay tuned for innovative solutions 
              in AI/ML, IoT, robotics, and more.
            </p>
            
            {/* Research Phase */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary text-foreground rounded-full text-sm border border-border mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Research Phase
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-tertiary rounded-2xl border border-border text-left">
                  <h4 className="font-semibold text-foreground mb-2">Self Healing Infrastructure</h4>
                  <p className="text-muted-foreground text-sm">Autonomous systems that detect and recover from failures</p>
                </div>
                <div className="p-6 bg-tertiary rounded-2xl border border-border text-left">
                  <h4 className="font-semibold text-foreground mb-2">Early Warning System for Industrial Sensor Drift</h4>
                  <p className="text-muted-foreground text-sm">Predictive maintenance through sensor anomaly detection</p>
                </div>
                <div className="p-6 bg-tertiary rounded-2xl border border-border text-left">
                  <h4 className="font-semibold text-foreground mb-2">Superposition Compression</h4>
                  <p className="text-muted-foreground text-sm">Advanced compression without breaking Shannon's limit</p>
                </div>
              </div>
            </div>

            {/* Testing Phase */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary text-foreground rounded-full text-sm border border-border mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Testing Phase
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="p-6 bg-tertiary rounded-2xl border border-border text-left">
                  <h4 className="font-semibold text-foreground mb-2">Federated Learning for System Privacy</h4>
                  <p className="text-muted-foreground text-sm">Privacy-preserving machine learning across distributed systems</p>
                </div>
                <div className="p-6 bg-tertiary rounded-2xl border border-border text-left">
                  <h4 className="font-semibold text-foreground mb-2">Noether - Complete Student Companion</h4>
                  <p className="text-muted-foreground text-sm">AI-powered academic assistant for students</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default Projects;
