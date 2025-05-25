
import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ResumeRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-resume-request', {
        body: formData
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Resume Sent!",
        description: "Thank you for your interest! My resume has been sent to your email.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        purpose: "",
        message: "",
      });
    } catch (error) {
      console.error('Resume request error:', error);
      toast({
        title: "Error",
        description: "There was an error sending the resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="resume-request" className="py-20 bg-zinc-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText size={32} className="text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Request My <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Interested in my background and experience? Fill out the form below and I'll send you my latest resume.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-xl animate-fade-in">
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30">
            <div className="flex items-center mb-4">
              <Download className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">What you'll receive:</h3>
            </div>
            <ul className="text-zinc-300 space-y-2">
              <li>• My latest professional resume in PDF format</li>
              <li>• Detailed work experience and project portfolio</li>
              <li>• Technical skills and certifications</li>
              <li>• Contact information for further discussions</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Full Name *
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
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email Address *
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-white mb-2 font-medium">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors placeholder-zinc-400"
                  placeholder="Your company name (optional)"
                />
              </div>
              <div>
                <label htmlFor="purpose" className="block text-white mb-2 font-medium">
                  Purpose *
                </label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors placeholder-zinc-400"
                  placeholder="e.g., Job opportunity, Partnership, etc."
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2 font-medium">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors resize-none placeholder-zinc-400"
                placeholder="Any additional information or specific questions..."
              ></textarea>
            </div>

            <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
              <p className="text-green-200 text-sm">
                🔒 <strong>Privacy Notice:</strong> Your information will only be used to send you my resume and will not be shared with third parties.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center justify-center"
            >
              {isSubmitting ? (
                "Sending Resume..."
              ) : (
                <>
                  <Download className="mr-2" size={20} />
                  Send My Resume
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResumeRequest;
