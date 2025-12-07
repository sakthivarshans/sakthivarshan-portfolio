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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background text-foreground border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium text-foreground mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="px-4 py-1.5 bg-foreground text-background rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Project Overview</h3>
            <p className="text-foreground leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {project.features && (
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Challenges Addressed</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && (
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Outcomes & Results</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-tertiary text-foreground rounded-full text-sm border border-border"
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
