
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "C++", "SQL"],
      color: "bg-blue-500",
    },
    {
      title: "Frameworks/Libraries",
      skills: ["PyTorch", "TensorFlow", "OpenCV", "Flask", "CUDA"],
      color: "bg-green-500",
    },
    {
      title: "Domains",
      skills: ["AI/ML/DL", "IoT", "Cloud (Azure)", "Web Development", "Security"],
      color: "bg-purple-500",
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Kubernetes", "Tableau", "Streamlit", "Canva"],
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-zinc-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
                  >
                    <span className="text-zinc-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
