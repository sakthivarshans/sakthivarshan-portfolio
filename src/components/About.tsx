
const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Computer Science sophomore with hands-on experience in AI, IoT, Robotics, and Web Development. 
              Skilled in machine learning, embedded systems, automation, and real-time processing with a passion 
              for creating innovative solutions that bridge the gap between theoretical knowledge and practical applications.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              I thrive on solving complex problems and turning ideas into reality through code. My journey spans 
              from developing AI models that can predict and analyze to building autonomous systems that can 
              operate in challenging environments.
            </p>
            
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="hover-scale">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-zinc-400">Projects Completed</div>
              </div>
              <div className="hover-scale">
                <div className="text-3xl font-bold text-orange-500">40+</div>
                <div className="text-zinc-400">Students Guided</div>
              </div>
              <div className="hover-scale">
                <div className="text-3xl font-bold text-orange-500">4+</div>
                <div className="text-zinc-400">Internships</div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="bg-zinc-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">B.Tech, Computer Science and Engineering</h4>
                  <p className="text-orange-400">Karunya Institute of Technology and Science</p>
                  <p className="text-zinc-400">Aug 2023 – May 2027</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Diploma in Computer Application</h4>
                  <p className="text-orange-400">Computer Software College</p>
                  <p className="text-zinc-400">Oct 2020 – Apr 2021</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Traits</h4>
                <div className="flex flex-wrap gap-3">
                  {["Curious", "Problem Solver", "Innovator", "Team Player"].map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30"
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
