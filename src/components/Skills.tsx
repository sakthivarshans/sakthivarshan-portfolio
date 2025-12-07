const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "SQL"],
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
    },
    {
      title: "IoT & Embedded Systems",
      skills: [
        "Arduino", 
        "Raspberry Pi", 
        "Jetson Nano", 
        "RTOS", 
        "Sensor Calibration", 
        "Communication Protocols", 
        "Hardware-in-the-Loop", 
        "Software-in-the-Loop"
      ],
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
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Gradio", "Canva", "Streamlit"],
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
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-foreground">
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-background p-6 rounded-2xl shadow-soft hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-base font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-tertiary text-muted-foreground text-xs rounded-full border border-border hover:border-foreground hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
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
