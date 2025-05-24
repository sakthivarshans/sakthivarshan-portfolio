
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 text-white border-zinc-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-orange-500/90 text-white rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-3">Project Overview</h3>
            <p className="text-zinc-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {project.features && (
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Challenges Addressed</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-zinc-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && (
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Outcomes & Results</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-zinc-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
