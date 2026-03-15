import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Copy, Check, ArrowUpRight } from "lucide-react";
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
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('email2sakthi.s@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "@sakthivarshan-s",
      href: "https://www.linkedin.com/in/sakthivarshan-s-81aa50291",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      handle: "@sakthivarshans",
      href: "https://github.com/sakthivarshans",
      icon: Github,
    },
    {
      name: "Instagram",
      handle: "@sakthivarshan.s",
      href: "https://www.instagram.com/sakthivarshan.s",
      icon: Instagram,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Currently open to AI Engineer, ML Engineer, and AI Architect roles — internships, full-time, or research collaborations. Based in India, open to remote worldwide. Or just want to build something together? Reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Email Card */}
            <div className="bg-tertiary rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Email Address</h3>
              <p className="text-muted-foreground mb-4">You can send me an email at:</p>
              <div className="flex items-center justify-between bg-background p-4 rounded-xl border border-border">
                <span className="text-foreground font-mono text-sm">email2sakthi.s@gmail.com</span>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-tertiary rounded-lg transition-colors"
                >
                  {copied ? <Check size={18} className="text-foreground" /> : <Copy size={18} className="text-muted-foreground" />}
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                I typically respond within 24-48 hours during business days.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-tertiary rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Connect with Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-background rounded-xl border border-border hover:border-foreground transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center">
                        <social.icon size={18} className="text-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-tertiary rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 bg-background text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
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
                      className="w-full px-4 py-3 bg-background text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
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
                    className="w-full px-4 py-3 bg-background text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors placeholder-muted-foreground"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background text-foreground rounded-xl border border-border focus:border-foreground focus:outline-none transition-colors resize-none placeholder-muted-foreground"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-foreground text-background rounded-xl hover:bg-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
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
