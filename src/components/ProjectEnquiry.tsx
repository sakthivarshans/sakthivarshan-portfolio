
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
        description: "Thank you for your project enquiry. I'll get back to you soon with my resume!",
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
    <section id="project-enquiry" className="py-20 bg-zinc-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Project <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Enquiry</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-xl animate-fade-in">
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30">
            <p className="text-zinc-300 leading-relaxed">
              Hi there! I'm a developer who's passionate about turning innovative ideas into real-world solutions. 
              I love building projects across AI/ML, IoT, smart systems, and hardware design — and I'm always 
              looking to collaborate with curious minds. Whether you've got a concept that needs structure or a 
              prototype that needs polish, I'm here to help bring it to life. I believe great things happen when 
              people connect, share ideas, and build together. So if you're working on something exciting or just 
              want to brainstorm — reach out. Let's create something impactful, together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors placeholder-zinc-400"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-white mb-2 font-medium">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors placeholder-zinc-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors placeholder-zinc-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors placeholder-zinc-400"
                  placeholder="Project collaboration request"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectName" className="block text-white mb-2 font-medium">
                  Project Name *
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors placeholder-zinc-400"
                  placeholder="Your project name"
                />
              </div>
              <div>
                <label htmlFor="projectField" className="block text-white mb-2 font-medium">
                  Project Field *
                </label>
                <select
                  id="projectField"
                  name="projectField"
                  value={formData.projectField}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors"
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
              <label htmlFor="projectDescription" className="block text-white mb-2 font-medium">
                Project Description *
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={5}
                value={formData.projectDescription}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors resize-none placeholder-zinc-400"
                placeholder="Describe your project in detail..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="designIdea" className="block text-white mb-2 font-medium">
                Project Design Idea (Optional)
              </label>
              <textarea
                id="designIdea"
                name="designIdea"
                rows={4}
                value={formData.designIdea}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors resize-none placeholder-zinc-400"
                placeholder="Share any design ideas, mockups, or visual concepts you have in mind..."
              ></textarea>
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">
                Upload Files (Optional)
              </label>
              <div className="border-2 border-dashed border-zinc-600 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-zinc-400 mb-4" />
                  <p className="text-zinc-400">Click to upload files or drag and drop</p>
                  <p className="text-zinc-500 text-sm mt-2">PDF, DOC, TXT, Images up to 10MB each</p>
                </label>
              </div>
              
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-zinc-900 p-3 rounded-lg">
                      <span className="text-zinc-300 text-sm">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
              <p className="text-purple-200 text-sm">
                📄 <strong>Resume Delivery:</strong> Once you submit this form, I'll automatically send you my resume along with my response to your enquiry.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
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
