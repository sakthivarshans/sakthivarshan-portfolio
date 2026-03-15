export const projectsData = [
  {
    title: "Autonomous SRE Platform",
    description: "An AI that monitors production systems 24/7 and autonomously fixes incidents — no human SRE engineer needed.",
    fullDescription: "A fully autonomous Site Reliability Engineering platform powered by LLMs that monitors application health 24/7, detects anomalies, diagnoses root causes, and auto-resolves incidents without any human intervention. Built to replace repetitive SRE tasks and reduce MTTR to near-zero.",
    image: "/lovable-uploads/sre-project.png",
    technologies: ["Python", "LLMs", "Docker", "Kubernetes", "Azure", "REST APIs", "Monitoring", "Automation"],
    category: "AI/ML",
    features: [
      "24/7 autonomous application monitoring",
      "LLM-powered root cause analysis",
      "Auto-remediation of production incidents",
      "Real-time alerting and incident reporting",
      "Zero human intervention for common failure patterns",
      "Integration with cloud infrastructure"
    ],
    challenges: [
      "Building reliable autonomous decision-making for production systems",
      "Minimizing false positives in anomaly detection",
      "Ensuring safe auto-remediation without causing cascading failures"
    ],
    outcomes: [
      "Replaces repetitive SRE workload with autonomous AI",
      "Near-zero MTTR for common incident patterns",
      "Production-grade monitoring with intelligent auto-fix"
    ]
  },
  {
    title: "DataSpine — Marine Science AI Platform",
    description: "A full platform for marine scientists to identify new species, match DNA sequences, and collaborate globally.",
    fullDescription: "DataSpine is a comprehensive AI-powered platform built specifically for marine scientists. It enables real-time species identification from images using computer vision, DNA sequence matching, and a global collaboration network connecting marine researchers worldwide. Built to accelerate marine biodiversity research.",
    image: "/lovable-uploads/dataspine-project.png",
    technologies: ["Python", "TensorFlow", "Computer Vision", "React", "Node.js", "MongoDB", "DNA Analysis", "REST APIs"],
    category: "AI/ML",
    features: [
      "AI-powered species identification from photos",
      "DNA sequence matching and comparison engine",
      "Global scientist collaboration and networking platform",
      "Marine biodiversity database with search",
      "Real-time image analysis and classification",
      "Research publication and data sharing tools"
    ],
    challenges: [
      "Training accurate species identification models on limited marine datasets",
      "Building DNA matching algorithms with high precision",
      "Designing a platform usable by non-technical marine scientists"
    ],
    outcomes: [
      "End-to-end platform for marine biodiversity research",
      "Accelerated species identification and cataloguing",
      "Connected marine researchers across institutions globally"
    ]
  },
  {
    title: "Noether — AI Study Companion",
    description: "A complete AI-powered study companion for students and professionals — built to actually work, not just demo.",
    fullDescription: "Noether is a full-featured AI study companion that helps students and professionals learn faster and smarter. Built with LLMs and RAG architecture, it understands documents, answers questions, creates study plans, generates quizzes, and adapts to individual learning styles. Named after Emmy Noether, the mathematician.",
    image: "/lovable-uploads/noether-project.png",
    technologies: ["Python", "LLMs", "RAG", "TensorFlow", "React", "FastAPI", "Vector DB", "NLP"],
    category: "AI/ML",
    features: [
      "LLM-powered document understanding and Q&A",
      "Personalized study plan generation",
      "Automatic quiz and flashcard creation",
      "RAG-based knowledge retrieval from uploaded materials",
      "Progress tracking and learning analytics",
      "Multi-subject support for students and professionals"
    ],
    challenges: [
      "Building accurate RAG pipeline for diverse document types",
      "Personalizing content to individual learning styles",
      "Maintaining context across long study sessions"
    ],
    outcomes: [
      "Complete AI study assistant from document to quiz",
      "Significant reduction in study time through intelligent summarization",
      "Adaptive learning experience for diverse users"
    ]
  },
  {
    title: "BlinkWall - Ephemeral Message Board",
    description: "An exclusive ephemeral message board for Karunya University — notes disappear after 24 hours, restricted to @karunya.edu emails only.",
    fullDescription: "BlinkWall is a full-stack MERN (MongoDB, Express, React, Node.js) social application built from scratch as an exclusive note-sharing platform for the Karunya University community. By leveraging a custom Google OAuth 2.0 strategy with Passport.js, it ensures that only users with a valid @karunya.edu.in (student) or @karunya.edu (faculty) email can sign up. The app delivers a secure, performant, and modern web application that manages user authentication, profile onboarding, and real-time CRUD operations for short-form notes called 'Blinks'.",
    image: "/lovable-uploads/blinkwall-project.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Passport.js", "Google OAuth 2.0", "Framer Motion", "Bootstrap", "Axios", "Mongoose"],
    category: "Full-Stack Development",
    features: [
      "Dual-Domain Google OAuth 2.0 for secure login restricted to specific email domains",
      "Mandatory profile onboarding after first login",
      "Full-Stack CRUD operations for creating, reading, and deleting notes",
      "Note categorization as 'Featured', 'Events', or 'For You' with filterable feed",
      "Modern, responsive dark-theme UI with glassmorphism effects",
      "Framer Motion animations for scroll-in, delete, and logout/login screens",
      "Custom modals and error pages for enhanced user experience",
      "Stateful session management using express-session",
      "Protected routes with multi-stage authentication flow"
    ],
    challenges: [
      "Implementing custom Passport.js strategy to validate users from two different domains (@karunya.edu.in and @karunya.edu)",
      "Managing hybrid deployment with stateful Node.js backend on Render and React frontend on Vercel",
      "Engineering multi-stage authentication flow (Login -> Profile Onboarding -> Main App) and securing all API endpoints",
      "Configuring CORS, withCredentials, and secure cookies between two different live domains (Vercel and Render)",
      "Managing stateful backend sessions on modern platforms like Render"
    ],
    outcomes: [
      "A fully functional, secure, and deployed full-stack web application",
      "Successfully managed stateful backend on Render with persistent user sessions",
      "Highly responsive and engaging UI with complex animations deployed globally via Vercel",
      "Complete CI/CD pipeline implementation from GitHub repository",
      "Secure authentication system with domain-restricted access"
    ]
  },
  {
    title: "Deepstreaming Using Jetson Nano",
    description: "Implemented a computer vision project using DeepStream on Jetson Nano, optimizing real-time video analytics.",
    fullDescription: "Implemented a computer vision project using DeepStream on Jetson Nano, optimizing real-time video analytics. Enhanced object detection and tracking efficiency, leveraging AI-powered edge computing for high-performance visual processing.",
    image: "/lovable-uploads/be9b65e5-3de9-407e-b86f-69a6e756bcef.png",
    technologies: ["Python", "DeepStream", "Jetson Nano", "OpenCV", "CUDA", "TensorRT"],
    category: "AI/ML",
    features: [
      "Real-time video analytics processing",
      "Object detection and tracking optimization",
      "AI-powered edge computing implementation",
      "High-performance visual processing",
      "CUDA acceleration for enhanced performance",
      "Efficient resource utilization on embedded hardware"
    ],
    challenges: [
      "Optimizing performance on limited hardware resources",
      "Real-time processing constraints",
      "Memory management on embedded systems",
      "Balancing accuracy with processing speed",
      "Power consumption optimization"
    ],
    outcomes: [
      "Achieved efficient real-time video analytics",
      "Successfully deployed on edge computing platform",
      "Optimized object detection and tracking performance",
      "Enhanced visual processing capabilities"
    ]
  },
  {
    title: "IMDb Movie Prediction and Suggestion Model",
    description: "Developed an AI-based IMDB movie suggestion and prediction model using machine learning. Analyzed user preferences and ratings to recommend movies.",
    fullDescription: "Developed an AI-based IMDB movie suggestion and prediction model using machine learning. Analyzed user preferences and ratings to recommend movies, enhancing personalized recommendations and improving user experience.",
    image: "/lovable-uploads/1916b1e0-6660-41ed-b8e4-a9145a58e8b8.png",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "NumPy", "Seaborn"],
    category: "Data Science",
    features: [
      "AI-based movie recommendation system",
      "User preference analysis and pattern recognition",
      "Rating-based prediction algorithms",
      "Personalized movie suggestions",
      "Enhanced user experience through ML",
      "Comprehensive data analysis and visualization"
    ],
    challenges: [
      "Handling large-scale movie datasets",
      "User preference pattern recognition",
      "Recommendation algorithm optimization",
      "Dealing with sparse rating data",
      "Improving prediction accuracy"
    ],
    outcomes: [
      "Enhanced personalized movie recommendations",
      "Improved user experience and engagement",
      "Successful implementation of ML algorithms",
      "Accurate prediction of user preferences"
    ]
  },
  {
    title: "Mine Rescuing Assistant Rover",
    description: "A fully autonomous 6x6 rover that navigates mine environments, monitors conditions, and releases oxygen at target rescue positions.",
    fullDescription: "A mine rescuing assistant rover which helps in the mine rescue operations where this rover is totally autonomous, 6x6 rover wheelbase which monitors the environment and releases oxygen once it reaches its target position.",
    image: "/lovable-uploads/1a08d54e-00c2-420d-8baa-35b92015d0a8.png",
    technologies: ["Arduino", "Raspberry Pi", "Sensors", "GPS", "Autonomous Navigation", "Robotics"],
    category: "Robotics",
    features: [
      "Fully autonomous 6x6 wheelbase rover",
      "Environmental monitoring capabilities",
      "Oxygen release system at target locations",
      "GPS-based navigation and positioning",
      "Real-time sensor data collection",
      "Emergency rescue operation support"
    ],
    challenges: [
      "Autonomous navigation in harsh mine environments",
      "Reliable sensor integration for environmental monitoring",
      "Precise oxygen delivery system implementation",
      "Robust communication in underground conditions",
      "Emergency response system design"
    ],
    outcomes: [
      "Successfully developed autonomous rescue rover",
      "Implemented reliable environmental monitoring",
      "Achieved precise target positioning",
      "Enhanced mine rescue operation capabilities"
    ]
  },
  {
    title: "Video Regression-Based Age and Emotion Prediction",
    description: "Developed a video regression-based age and emotion prediction model using deep learning for real-time human behavior analysis.",
    fullDescription: "Developed a video regression-based age and emotion prediction model using deep learning. Analyzed facial features to estimate age and classify emotions, enhancing real-time human behavior analysis and recognition.",
    image: "/lovable-uploads/e9dbbb92-4b18-44a5-9952-e77ac0511042.png",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision", "Neural Networks"],
    category: "AI/ML",
    features: [
      "Real-time age estimation from video",
      "Emotion classification and recognition",
      "Facial feature analysis using deep learning",
      "Video regression-based prediction models",
      "Human behavior analysis capabilities",
      "Real-time processing and recognition"
    ],
    challenges: [
      "Accurate age estimation from facial features",
      "Real-time emotion classification",
      "Handling varying lighting and video conditions",
      "Deep learning model optimization",
      "Balancing accuracy with processing speed"
    ],
    outcomes: [
      "Achieved accurate age and emotion prediction",
      "Enhanced real-time human behavior analysis",
      "Successful deep learning model implementation",
      "Improved facial recognition capabilities"
    ]
  },
  {
    title: "Diabetes Prediction Model",
    description: "Accessible ML-based risk screening tool for early diabetes detection — built to help everyone, not just healthcare professionals.",
    fullDescription: "Developed a diabetes prediction model using AI, leveraging machine learning algorithms for early diagnosis. Improved prediction accuracy through data preprocessing and feature engineering, enhancing healthcare decision-making and preventive care.",
    image: "/lovable-uploads/23468081-6d1b-44a7-85a8-c896a01ace74.png",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Machine Learning", "Healthcare Analytics"],
    category: "Healthcare AI",
    features: [
      "AI-powered diabetes prediction system",
      "Early diagnosis through machine learning",
      "Advanced data preprocessing techniques",
      "Feature engineering for improved accuracy",
      "Healthcare decision-making support",
      "Preventive care enhancement"
    ],
    challenges: [
      "Handling medical data preprocessing",
      "Feature selection for optimal prediction",
      "Ensuring model accuracy and reliability",
      "Dealing with imbalanced healthcare datasets",
      "Implementing robust validation techniques"
    ],
    outcomes: [
      "Achieved high accuracy in diabetes prediction",
      "Enhanced early diagnosis capabilities",
      "Improved healthcare decision-making process",
      "Successful deployment of preventive care tools"
    ]
  },
  {
    title: "Bug Detection and Fixing Model using LLM",
    description: "LLM-powered engine that detects syntax errors and logical flaws in Python code and suggests intelligent fixes automatically.",
    fullDescription: "An AI-powered tool that analyzes Python code to detect and fix bugs in real-time using a lightweight LLM. It operates locally with a user-friendly interface, enhancing development efficiency and accessibility for developers at all levels.",
    image: "/lovable-uploads/2702d2da-e83c-4818-837e-1cd6e9c2f240.png",
    technologies: ["Python", "LLM", "Natural Language Processing", "Code Analysis", "AI", "Software Development"],
    category: "AI/ML",
    features: [
      "Real-time Python code analysis",
      "Automated bug detection and fixing",
      "Lightweight LLM implementation",
      "User-friendly development interface",
      "Local operation for enhanced privacy",
      "Development efficiency enhancement"
    ],
    challenges: [
      "Implementing lightweight LLM for code analysis",
      "Real-time bug detection accuracy",
      "Creating intuitive user interface",
      "Optimizing local processing performance",
      "Ensuring compatibility across development environments"
    ],
    outcomes: [
      "Enhanced development efficiency for all skill levels",
      "Successful real-time bug detection implementation",
      "Improved code quality and reliability",
      "Increased accessibility for developers"
    ]
  },
  {
    title: "Soil Classification and Prediction",
    description: "AI system that identifies soil type from a single photo and recommends the best crops, fertilizers, and fertility improvements.",
    fullDescription: "An intelligent soil classification and prediction system that uses deep learning to analyze soil photo samples and detect soil types through comprehensive analysis. After analyzing the soil, the AI model provides valuable insights including precautionary measures, best plants that grow in that specific soil type, and detailed recommendations on how to make the soil more fertile and suitable for agriculture.",
    image: "/lovable-uploads/a19b742e-497b-4b0c-85b9-3429f8840705.png",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "Image Processing", "Agricultural AI"],
    category: "AI/ML",
    features: [
      "Soil type detection from photo samples",
      "Deep learning-based soil analysis",
      "Plant recommendation system based on soil type",
      "Soil fertility enhancement suggestions",
      "Precautionary measures and care instructions",
      "Agricultural optimization through AI insights",
      "Real-time image processing and classification",
      "Comprehensive soil health assessment"
    ],
    challenges: [
      "Accurate soil classification from visual data",
      "Training models on diverse soil samples",
      "Handling varying lighting and image conditions",
      "Creating comprehensive agricultural databases",
      "Ensuring accuracy across different geographical regions",
      "Integrating agricultural expertise with AI predictions"
    ],
    outcomes: [
      "Achieved high accuracy in soil type classification",
      "Enhanced agricultural decision-making process",
      "Improved crop yield through optimal soil management",
      "Successful integration of AI with agricultural practices",
      "Increased farming efficiency and productivity",
      "Better soil health monitoring and management"
    ]
  },
  {
    title: "Ground Penetrating Radar Rover",
    description: "Autonomous Subsurface Detection and Mapping System capable of detecting underground elements such as water, buried objects, metals, and soil layers.",
    fullDescription: "This project focuses on developing an autonomous rover equipped with Ground Penetrating Radar (GPR) capable of detecting underground elements such as water, buried objects, metals, and soil layers. The system is designed to be cost efficient, portable, and user friendly, featuring a smart dashboard interface for real time visualization of subsurface data. Unlike conventional manual GPR devices, this rover operates autonomously, scanning large areas with precision and delivering accurate readings for applications in agriculture, geology, and underground utility detection.",
    image: "/lovable-uploads/gpr-rover.jpg",
    technologies: ["Arduino", "Raspberry Pi", "GPR Technology", "Autonomous Navigation", "Data Visualization", "IoT"],
    category: "Robotics",
    features: [
      "Autonomous subsurface scanning and mapping",
      "Ground Penetrating Radar (GPR) integration",
      "Real-time data visualization dashboard",
      "Detection of water, metals, and buried objects",
      "Soil layer analysis capabilities",
      "Cost-efficient and portable design",
      "Large-area autonomous scanning",
      "Applications in agriculture and geology"
    ],
    challenges: [
      "Integrating GPR technology with autonomous navigation",
      "Developing accurate subsurface detection algorithms",
      "Creating intuitive real-time visualization interface",
      "Ensuring precision in large-area scanning",
      "Optimizing cost while maintaining performance",
      "Processing and interpreting GPR data in real-time"
    ],
    outcomes: [
      "Enhanced subsurface detection capabilities",
      "Improved efficiency in underground utility detection",
      "Successful autonomous operation implementation",
      "Cost-effective alternative to manual GPR devices"
    ]
  }
];
