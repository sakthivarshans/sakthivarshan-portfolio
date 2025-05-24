
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "SQL"],
      color: "bg-blue-500",
    },
    {
      title: "Framework & Libraries",
      skills: [
        "PyTorch", 
        "TensorFlow", 
        "OpenCV", 
        "Flask", 
        "CUDA", 
        "Matplotlib", 
        "Scikit-Learn", 
        "Pandas", 
        "NumPy", 
        "Tableau", 
        "Plotly"
      ],
      color: "bg-green-500",
    },
    {
      title: "Artificial Intelligence",
      skills: [
        "ML/DL", 
        "Model Optimization", 
        "Computer Vision", 
        "Image Processing", 
        "Video Regression", 
        "Data Analysis"
      ],
      color: "bg-purple-500",
    },
    {
      title: "IoT & Embedded",
      skills: [
        "Arduino", 
        "Raspberry Pi", 
        "Jetson Kit", 
        "RTOS", 
        "Sensor Integration", 
        "Node Red", 
        "Blynk", 
        "Google IoT Cloud"
      ],
      color: "bg-orange-500",
    },
    {
      title: "DevOps and Cloud",
      skills: [
        "Azure Cloud", 
        "Docker", 
        "Kubernetes", 
        "Git", 
        "GitHub", 
        "Bitbucket", 
        "Linux"
      ],
      color: "bg-red-500",
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Gradio", "Canva", "Streamlit"],
      color: "bg-cyan-500",
    },
    {
      title: "CS Fundamentals",
      skills: [
        "Data Structures", 
        "Algorithms", 
        "OOPs", 
        "Computer Networks", 
        "Operating Systems", 
        "Machine Learning"
      ],
      color: "bg-indigo-500",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-zinc-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3 flex-shrink-0`}></div>
                <h3 className="text-lg font-bold text-white leading-tight">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
                  >
                    <span className="text-zinc-300 text-sm">{skill}</span>
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
