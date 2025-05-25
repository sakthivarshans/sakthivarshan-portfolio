
import { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Have a question or want to collaborate? Feel free to reach out through any of these channels.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">How to Contact Me</h4>
                  <p className="text-zinc-300 mb-4">You can send me an email at the address below:</p>
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300 font-mono">email2sakthi.s@gmail.com</span>
                      <button 
                        onClick={() => navigator.clipboard.writeText('email2sakthi.s@gmail.com')}
                        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 text-zinc-400 text-sm">
                    <p>When sending an email, please include:</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>Your name</li>
                      <li>A detailed description of your inquiry or project</li>
                      <li>Any relevant timeline information</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Response Time</h4>
                  <p className="text-zinc-300">I typically respond within 24-48 hours during business days.</p>
                </div>
              </div>
            </div>

            {/* Connect with Me */}
            <div className="mt-8 bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect with Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/sakthivarshan-s-81aa50291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:scale-105 text-white"
                >
                  <Linkedin size={24} className="mr-3" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm opacity-80">@sakthivarshan-s</p>
                  </div>
                </a>

                <a
                  href="https://github.com/sakthivarshans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-105 text-white"
                >
                  <Github size={24} className="mr-3" />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm opacity-80">@sakthivarshans</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/sakthivarshan.s?igsh=ZmlsbGI2eWhlMW1o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all duration-300 hover:scale-105 text-white"
                >
                  <Instagram size={24} className="mr-3" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm opacity-80">@sakthivarshan.s</p>
                  </div>
                </a>

                <a
                  href="https://medium.com/@email2sakthi.s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-300 hover:scale-105 text-white"
                >
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    📝
                  </div>
                  <div>
                    <p className="font-semibold">Medium</p>
                    <p className="text-sm opacity-80">@email2sakthi.s</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
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
                      placeholder="Your name"
                    />
                  </div>
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
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-600 focus:border-purple-500 focus:outline-none transition-colors resize-none placeholder-zinc-400"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
