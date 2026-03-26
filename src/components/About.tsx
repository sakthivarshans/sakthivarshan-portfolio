const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-8">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a CS student at Karunya Institute of Technology and Sciences — and I build AI that solves real problems. Not prototypes. Not tutorials. Actual systems people can use.
            </p>
            <p className="text-base text-secondary leading-relaxed mb-10">
              What makes me different isn't just the AI. I work where software meets hardware — deploying models on Raspberry Pi, NVIDIA Jetson Nano, and edge devices. Because real-world problems don't always have a cloud connection.
            </p>

            {/* Stats Card */}
            <div className="bg-background rounded-2xl p-8 shadow-soft mb-8">
              <div className="text-5xl lg:text-6xl font-semibold text-foreground mb-2">10+</div>
              <p className="text-muted-foreground">AI Products Shipped</p>
            </div>

            {/* Feature Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  I don't grind leetcode. I research problems, engineer solutions, and ship products that work in the real world.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Currently open to AI Engineer, ML Engineer, and AI Architect roles — internships, full-time, or research collaborations. Based in India, open to remote worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Logo */}
            <div className="rounded-2xl overflow-hidden bg-background shadow-soft flex items-center justify-center h-64">
              <span className="font-display text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
                Sakthivarshan
              </span>
            </div>

            {/* Education Card */}
            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-6">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-foreground pl-6">
                  <h4 className="text-lg font-medium text-foreground">B.Tech, Computer Science and Engineering</h4>
                  <p className="text-muted-foreground">Karunya Institute of Technology and Science</p>
                  <p className="text-sm text-secondary">Aug 2023 – May 2027</p>
                </div>
                
                <div className="border-l-2 border-secondary pl-6">
                  <h4 className="text-lg font-medium text-foreground">Diploma in Computer Application</h4>
                  <p className="text-muted-foreground">Computer Software College</p>
                  <p className="text-sm text-secondary">Oct 2020 – Apr 2021</p>
                </div>
              </div>

              {/* Key Traits */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Key Traits</h4>
                <div className="flex flex-wrap gap-2">
                  {["Builder", "Researcher", "Problem Solver", "Innovator"].map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-tertiary text-foreground rounded-full text-sm border border-border"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
