import { useState } from "react";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ProjectEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    projectName: "",
    projectField: "",
    projectDescription: "",
    designIdea: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const projectFields = [
    "AI/ML",
    "IoT",
    "Embedded System",
    "Robotics",
    "3D Modelling",
    "Others"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-project-enquiry', {
        body: { ...formData, files: files.map(f => f.name) }
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Enquiry Sent!",
        description: "Thank you for your project enquiry. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        projectName: "",
        projectField: "",
        projectDescription: "",
        designIdea: "",
      });
      setFiles([]);
    } catch (error) {
      console.error('Project enquiry error:', error);
      toast({
        title: "Error",
        description: "There was an error sending your enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="project-enquiry" className="py-24 lg:py-32 bg-tertiary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Collaborate</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground">
            Project Enquiry
          </h2>
        </div>

        <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border shadow-soft animate-fade-in-up">
          {/* Intro Text */}
          <div className="mb-10 p-6 bg-tertiary rounded-2xl border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Hi there! I'm a developer who's passionate about turning innovative ideas into real-world solutions. 
              I love building projects across AI/ML, IoT, smart systems, and hardware design — and I'm always 
              looking to collaborate with curious minds. Let's create something impactful, together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                  placeholder="Project collaboration request"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-foreground mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                  placeholder="Your project name"
                />
              </div>
              <div>
                <label htmlFor="projectField" className="block text-sm font-medium text-foreground mb-2">
                  Project Field
                </label>
                <select
                  id="projectField"
                  name="projectField"
                  value={formData.projectField}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors"
                >
                  <option value="">Select project field</option>
                  {projectFields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground mb-2">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={5}
                value={formData.projectDescription}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors resize-none placeholder-muted-foreground"
                placeholder="Describe your project in detail..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="designIdea" className="block text-sm font-medium text-foreground mb-2">
                Project Design Idea (Optional)
              </label>
              <textarea
                id="designIdea"
                name="designIdea"
                rows={4}
                value={formData.designIdea}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-tertiary text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors resize-none placeholder-muted-foreground"
                placeholder="Share any design ideas, mockups, or visual concepts you have in mind..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Upload Files (Optional)
              </label>
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-foreground transition-colors cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Click to upload files or drag and drop</p>
                  <p className="text-secondary text-sm mt-2">PDF, DOC, TXT, Images up to 10MB each</p>
                </label>
              </div>
              
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-tertiary p-3 rounded-xl border border-border">
                      <span className="text-foreground text-sm">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-foreground text-background rounded-xl hover:bg-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isSubmitting ? "Sending Enquiry..." : "Send Project Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProjectEnquiry;
