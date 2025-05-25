import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

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
  const [projects, setProjects] = useState<Project[]>(projectsData);
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
    <section id="projects" className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-orange-500/90 text-white rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => openModal(project)}
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming and Ongoing Projects Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-zinc-900 rounded-2xl p-12 border border-zinc-700 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Upcoming and Ongoing <span className="text-orange-500">Projects</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              I'm constantly working on new and exciting projects! Stay tuned for innovative solutions 
              in AI/ML, IoT, robotics, and more. Each project brings unique challenges and opportunities 
              to push the boundaries of technology.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                <div className="text-orange-400 mb-2">🤖</div>
                <h4 className="font-semibold text-white mb-2">AI/ML Projects</h4>
                <p className="text-zinc-400 text-sm">Advanced machine learning models and intelligent systems</p>
              </div>
              <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                <div className="text-orange-400 mb-2">⚡</div>
                <h4 className="font-semibold text-white mb-2">IoT Solutions</h4>
                <p className="text-zinc-400 text-sm">Smart connected devices and automation systems</p>
              </div>
              <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                <div className="text-orange-400 mb-2">🔧</div>
                <h4 className="font-semibold text-white mb-2">Hardware Design</h4>
                <p className="text-zinc-400 text-sm">Embedded systems and robotics development</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                In Development
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                Research Phase
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                Testing
              </span>
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
