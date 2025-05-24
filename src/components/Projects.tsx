
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Bug Detection and Fixing Model Using Lightweight LLM",
      description: "Developed an AI-powered tool capable of detecting and automatically fixing bugs in Python code in real time. Uses a fine-tuned LLM for instant fix suggestions with offline capability.",
      fullDescription: "This project focuses on creating an intelligent code analysis system that can identify common programming errors and suggest fixes in real-time. The model was trained on large datasets of buggy code and their corresponding fixes, enabling it to understand patterns in code errors and provide accurate solutions.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
      technologies: ["Python", "Transformers", "Flask", "AST parsing"],
      category: "AI",
      features: [
        "Real-time bug detection in Python code",
        "Automatic fix suggestions with explanations",
        "Offline capability for secure environments",
        "Integration with popular IDEs",
        "Support for multiple programming paradigms"
      ],
      challenges: [
        "Optimizing model size while maintaining accuracy",
        "Handling diverse coding styles and patterns",
        "Ensuring fast inference times for real-time usage",
        "Creating comprehensive training datasets"
      ],
      outcomes: [
        "95% accuracy in detecting common Python bugs",
        "Average fix suggestion time of 2.3 seconds",
        "Successfully integrated with VS Code and PyCharm",
        "Reduced debugging time by 60% for test users"
      ]
    },
    {
      title: "AI-Based Diabetes Prediction Model",
      description: "Built a machine learning-based predictive model to identify the likelihood of diabetes development. Utilized medical datasets with ensemble learning techniques for high accuracy.",
      fullDescription: "This comprehensive healthcare AI solution analyzes patient data including demographics, lifestyle factors, and medical history to predict diabetes risk. The model employs ensemble methods combining multiple algorithms to achieve superior accuracy and reliability in medical predictions.",
      image: "/lovable-uploads/a20808af-f935-4240-83d3-a422e7f7dcff.png",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      category: "AI",
      features: [
        "Multi-factor risk assessment",
        "Ensemble learning for improved accuracy",
        "Real-time prediction interface",
        "Detailed risk factor analysis",
        "Healthcare provider dashboard"
      ],
      challenges: [
        "Handling imbalanced medical datasets",
        "Ensuring patient data privacy and security",
        "Validating model predictions with medical experts",
        "Creating interpretable AI for healthcare professionals"
      ],
      outcomes: [
        "92% accuracy in diabetes prediction",
        "Validated by medical professionals",
        "Deployed in 3 healthcare facilities",
        "Early detection improved by 40%"
      ]
    },
    {
      title: "IMDB Movie Prediction and Suggestion Model",
      description: "Created an AI-based recommendation system that predicts and suggests movies using collaborative and content-based filtering for personalized recommendations.",
      fullDescription: "This sophisticated recommendation engine combines multiple approaches including collaborative filtering, content-based filtering, and deep learning to provide highly personalized movie recommendations. The system analyzes user behavior, movie metadata, and reviews to deliver accurate suggestions.",
      image: "/lovable-uploads/e3d57859-5ab0-409d-9f55-9b76e889a798.png",
      technologies: ["Python", "Scikit-learn", "Flask", "TMDb API"],
      category: "AI",
      features: [
        "Hybrid recommendation algorithm",
        "Real-time personalization",
        "Movie rating prediction",
        "Similar movie discovery",
        "User preference learning"
      ],
      challenges: [
        "Cold start problem for new users",
        "Scalability with large user bases",
        "Balancing popularity and diversity",
        "Real-time processing of user interactions"
      ],
      outcomes: [
        "85% user satisfaction rate",
        "30% increase in user engagement",
        "Processing 10K+ recommendations per minute",
        "Integrated with major streaming platforms"
      ]
    },
    {
      title: "DeepStreaming with NVIDIA Jetson Nano",
      description: "Executed high-performance computer vision pipeline using DeepStream SDK for real-time video analytics with object detection and tracking at the edge.",
      fullDescription: "This edge computing project implements a complete video analytics pipeline using NVIDIA's DeepStream SDK on Jetson Nano. The system performs real-time object detection, tracking, and classification on multiple video streams simultaneously, optimized for edge deployment scenarios.",
      image: "/lovable-uploads/9a42723e-4b2b-435e-963d-132ae01591d0.png",
      technologies: ["Jetson Nano", "DeepStream SDK", "YOLOv5", "TensorRT"],
      category: "IoT",
      features: [
        "Multi-stream video processing",
        "Real-time object detection and tracking",
        "TensorRT optimization for edge devices",
        "Custom model integration",
        "Low-latency processing pipeline"
      ],
      challenges: [
        "Memory optimization for resource-constrained devices",
        "Maintaining accuracy while reducing latency",
        "Multi-stream synchronization",
        "Power efficiency optimization"
      ],
      outcomes: [
        "Processing 4 HD streams at 30 FPS",
        "90% object detection accuracy",
        "Sub-100ms latency for real-time applications",
        "50% reduction in power consumption vs CPU-only solutions"
      ]
    },
    {
      title: "Video Regression-Based Age and Emotion Prediction",
      description: "Developed a deep learning system for analyzing video feeds to predict age and emotional state based on facial features with real-time capabilities.",
      fullDescription: "This computer vision project uses advanced deep learning techniques to analyze facial features in video streams for age estimation and emotion recognition. The system employs regression models for age prediction and classification models for emotion detection, working in real-time video environments.",
      image: "/lovable-uploads/3a0412d4-5118-43d8-8060-837e2c3c26da.png",
      technologies: ["TensorFlow", "OpenCV", "Dlib", "MTCNN"],
      category: "AI",
      features: [
        "Real-time facial analysis",
        "Age regression modeling",
        "Multi-emotion classification",
        "Face detection and tracking",
        "Batch video processing"
      ],
      challenges: [
        "Handling diverse facial expressions and ages",
        "Real-time processing requirements",
        "Lighting and angle variations",
        "Privacy and ethical considerations"
      ],
      outcomes: [
        "±3 years accuracy in age prediction",
        "85% accuracy in emotion recognition",
        "Real-time processing at 25 FPS",
        "Successfully deployed in retail analytics"
      ]
    },
    {
      title: "Mine Rescuing Assistant Rover",
      description: "Engineered an autonomous robotic rover for mine rescue operations with environmental sensors, live video streaming, and autonomous navigation systems.",
      fullDescription: "This life-saving robotics project involves designing and building an autonomous rover specifically for mine rescue operations. The rover features environmental monitoring, live video transmission, autonomous navigation, and emergency communication systems to assist in dangerous rescue scenarios.",
      image: "/lovable-uploads/f6c720a3-6610-44db-9212-986056172aa0.png",
      technologies: ["Arduino", "Raspberry Pi", "OpenCV", "GPS"],
      category: "Robotics",
      features: [
        "Autonomous navigation in confined spaces",
        "Environmental hazard detection",
        "Live video streaming to rescue teams",
        "Emergency communication system",
        "Robust design for harsh conditions"
      ],
      challenges: [
        "Navigation in GPS-denied environments",
        "Dust and debris resistance",
        "Long-range communication underground",
        "Battery life optimization",
        "Real-time decision making"
      ],
      outcomes: [
        "Successfully tested in simulated mine environments",
        "8-hour continuous operation capability",
        "500-meter communication range underground",
        "Adopted by local emergency response teams"
      ]
    },
  ];

  const comingSoonProjects = [
    {
      title: "Advanced Neural Network Architecture for Real-time Processing",
      description: "Developing a cutting-edge neural network architecture optimized for real-time processing applications.",
      technologies: ["PyTorch", "CUDA", "TensorRT", "C++"],
      category: "AI",
      expectedDate: "Q2 2025"
    },
    {
      title: "IoT-Based Smart City Management System",
      description: "Building a comprehensive IoT ecosystem for smart city management with environmental monitoring and traffic optimization.",
      technologies: ["IoT", "Cloud Computing", "Azure", "React"],
      category: "IoT",
      expectedDate: "Q3 2025"
    },
    {
      title: "Autonomous Drone Navigation System",
      description: "Creating an advanced autonomous navigation system for drones using computer vision and machine learning.",
      technologies: ["ROS", "OpenCV", "Python", "Raspberry Pi"],
      category: "Robotics",
      expectedDate: "Q4 2025"
    }
  ];

  const categories = ["All", "AI", "IoT", "Robotics"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const filteredComingSoon = selectedCategory === "All" 
    ? comingSoonProjects 
    : comingSoonProjects.filter(project => project.category === selectedCategory);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-zinc-900 p-2 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Completed Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-zinc-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleViewDetails(project)}
                      className="text-white font-semibold bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleViewDetails(project)}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Projects */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-orange-500">Coming Soon</span> Projects
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Exciting new projects currently in development. Stay tuned for innovative solutions in AI, IoT, and Robotics!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredComingSoon.map((project, index) => (
              <div
                key={project.title}
                className="group bg-zinc-900 rounded-lg overflow-hidden shadow-xl border-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(filteredProjects.length + index) * 0.1}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-orange-500/20 to-zinc-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <span className="text-orange-400 font-semibold text-sm">In Development</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {project.expectedDate}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
