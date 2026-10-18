import photo from "../assets/HclMyPhoto.png"
import weatherImg from "../assets/weatherApp.png"

export const portfolioData = {
  personalInfo: {
    name: "Aman Tyagi",
    role: "Software Engineer II",
    company: "HCL Software",
    statusBadge: "Available for High-Impact Roles & Collaborations",
    tagline: "Software Engineer II @ HCL Software | M.Tech (Computer Engg) @ NIT Kurukshetra | Published AI Researcher",
    shortBio: "Hi, I'm Aman Tyagi. I build resilient, high-performance web applications and cutting-edge deep learning systems. Currently driving software engineering excellence at HCL Software, with an M.Tech in Computer Engineering from NIT Kurukshetra and 2 published research papers in medical AI.",
    email: "tyagiaman8923@gmail.com",
    phone: "+91 8923358230",
    profileImage: photo,
    location: "Noida, Uttar Pradesh",
    socialLinks: {
      github: "https://github.com/tyagiaman8923",
      linkedin: "https://linkedin.com/in/aman-tyagi-033322262",
      instagram: "https://instagram.com/tyagi_a_man",
      leetcode: "https://leetcode.com/u/tyagiaman8923/",
      gfg: "https://geeksforgeeks.org/profile/tyagiaman8923",
      hackerrank: "https://.hackerrank.com/profile/tyagiaman8923",
    },
    quickMetrics: [
      { label: "DSA Problems Solved", value: "600+", subtext: "LeetCode & GeeksforGeeks" },
      { label: "Research Papers", value: "2", subtext: "Diabetic Retinopathy (AI/CV)" },
      { label: "GATE CS/IT 2024", value: "96.3%", subtext: "Score: 525 (All India)" },
      { label: "Contest Rating", value: "1705", subtext: "3★ GfG & 5★ HackerRank" },
    ]
  },

  about: {
    headline: "Transforming Complex Logic into Elegant, Scalable Systems",
    paragraphs: [
      "I am a Software Engineer II at HCL Software with a strong foundation in computer science and applied artificial intelligence. I completed my M.Tech in Computer Engineering from the prestigious National Institute of Technology Kurukshetra (NIT Kurukshetra) with a CGPA of 8.36, and my B.Tech in Computer Science and Engineering from J.K. Institute of Applied Physics and Technology, University of Allahabad (CGPA 8.3).",
      "During my M.Tech tenure at NIT Kurukshetra, I had the privilege of serving as a Graduate Teaching Assistant, where I mentored undergraduate engineers in Data Structures, Algorithms, and Core Computer Science fundamentals. This sharpened my ability to dissect complex architectural problems and articulate clear technical concepts.",
      "In parallel with full-stack software development, my research work is centered around computer vision and medical image classification. I have authored and published 2 peer-reviewed research papers focusing on automated Diabetic Retinopathy detection and stage grading using Convolutional Neural Networks and transfer learning with EfficientNet-B3, achieving 94% validation accuracy on medical fundus benchmarks.",
    ],
    pillars: [
      {
        icon: "Code2",
        title: "Full-Stack Web Systems",
        description: "Designing end-to-end web architectures using React.js, Next.js, Node.js, Express, and MongoDB with clean RESTful APIs and real-time sockets."
      },
      {
        icon: "BrainCircuit",
        title: "Deep Learning & AI Research",
        description: "Developing CNNs, transfer learning pipelines (EfficientNet-B3), and LLM chains (LangChain, Groq LLaMA3) for vision and NLP applications."
      },
      {
        icon: "Terminal",
        title: "Algorithmic Problem Solving",
        description: "600+ solved problems across LeetCode & GfG, GATE CS/IT 96.3 percentile, and 1705 contest rating reflecting deep DSA proficiency."
      },
      {
        icon: "GraduationCap",
        title: "Academic Mentorship",
        description: "Former Teaching Assistant at NIT Kurukshetra, guiding students in core CS labs, code reviews, and competitive programming."
      }
    ]
  },

  experience: [
    {
      id: "hcl-software",
      role: "Software Engineer II",
      company: "HCL Software",
      location: "India",
      period: "Present",
      type: "Full-Time",
      description: "Contributing to enterprise software engineering, building robust frontend modules, scalable microservices, and high-throughput application components.",
      highlights: [
        "Architecting responsive, high-performance UI components using modern React.js and TypeScript ecosystems.",
        "Collaborating with distributed engineering teams to engineer maintainable, modular software adhering to clean code and test-driven standards.",
        "Optimizing frontend asset delivery, state management, and backend RESTful API integration for low latency and high reliability.",
        "Participating in technical design reviews, code quality audits, and agile sprint delivery cycles."
      ],
      technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "REST APIs", "Git", "Docker", "Kubernetes"]
    },
    {
      id: "nit-kkr-ta",
      role: "Teaching Assistant (TA)",
      company: "National Institute of Technology Kurukshetra (NIT KKR)",
      location: "Kurukshetra, Haryana, India",
      period: "2024 - 2026",
      type: "Academic Appointment",
      description: "Appointed as Graduate Teaching Assistant during M.Tech program in Computer Engineering at NIT Kurukshetra.",
      highlights: [
        "Mentored 100+ undergraduate engineering students in Data Structures and Algorithms (DSA), C++, and Object-Oriented Programming labs.",
        "Conducted hands-on programming labs, problem-solving clinics, and evaluated technical assignments and semester projects.",
        "Assisted senior professors in curriculum delivery, lab examination invigilation, and grading assessments.",
        "Fostered deep conceptual clarity among students regarding time/space complexity analysis and system fundamentals."
      ],
      technologies: ["Data Structures & Algorithms", "C++", "OOP", "Operating Systems", "DBMS", "Mentorship"]
    }
  ],

  publications: [
    {
      id: "paper-1",
      title: "Diabetic Retinopathy Classification and Multi-Stage Grading Using EfficientNet-B3 and Deep Transfer Learning",
      venue: "IEEE Punecon 2025",
      year: "2024 - 2025",
      type: "Research Paper",
      status: "Published",
      abstract: "Automated screening of Diabetic Retinopathy (DR) is critical for early intervention to prevent irreversible visual impairment. In this research, we designed and implemented a high-performance deep convolutional pipeline utilizing EfficientNet-B3 with transfer learning on the Messidor clinical fundus dataset. Through domain-specific data augmentation, CLAHE color enhancement, and fine-tuning, the proposed architecture attained 94% validation accuracy and high ROC-AUC scores across multi-class DR severity classifications (No DR, Mild, Moderate, Severe, and Proliferative DR).",
      keyMetrics: [
        { label: "Validation Accuracy", value: "94.0%" },
        { label: "Architecture", value: "EfficientNet-B3" },
        { label: "Dataset", value: "Messidor, Aptos, eOphtha" },
        { label: "Classes", value: "5-Stage Grading" }
      ],
      tags: ["PyTorch", "Deep Learning", "CNN", "EfficientNet-B3", "Computer Vision", "Medical Imaging", "Messidor Dataset"],
      link: "https://ieeexplore.ieee.org/document/11379020"
    },
    {
      id: "paper-2",
      title: "Automated Lesion Feature Extraction and Disease Detection in Ophthalmic Fundus Photography",
      venue: "Peer-Reviewed International Research Publication",
      year: "2025 - 2026",
      type: "Research Paper",
      status: "Published",
      abstract: "Early pathological indicators of Diabetic Retinopathy include microaneurysms, hemorrhages, and hard exudates in the retinal microvasculature. This paper introduces an automated computer vision preprocessing and feature-extraction methodology engineered to isolate subtle morphological anomalies from noisy fundus photographs. By coupling targeted contrast enhancements with deep convolutional representations, our framework significantly improves true-positive sensitivity for early-stage asymptomatic DR detection.",
      keyMetrics: [
        { label: "Focus", value: "Early Detection & Classification" },
        { label: "Modality", value: "Digital Fundus" },
        { label: "Approach", value: "Hybrid CNN-Transformer Pipeline" },
        { label: "Clinical Relevance", value: "High Sensitivity" }
      ],
      tags: ["Computer Vision", "Feature Extraction", "Diabetic Retinopathy", "Biomedical AI", "Image Processing", "Convolutional Networks"],
      link: "https://ieeexplore.ieee.org/document/11379020"
    }
  ],

  projects: [
    {
      id: "uber-clone",
      title: "Uber Clone Full-Stack Application",
      category: "Full Stack",
      featured: true,
      tagline: "End-to-end ride-hailing platform with real-time geolocation and booking lifecycle",
      description: "Developed a comprehensive fullstack ride-hailing clone modeled after Uber. Integrates real-time geolocation tracking for drivers and riders, ride booking, fare computation, and secure user/driver authentication using JWT and bcrypt. Engineered with a responsive React.js frontend connected to an Express.js and MongoDB backend API cluster.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack", "Geolocation API", "Tailwind CSS", "JWT Auth"],
      highlights: [
        "Real-time driver location tracking and interactive map route generation.",
        "Complete ride lifecycle: ride request, driver dispatch, acceptance, and completion simulation.",
        "Robust REST APIs with role-based access control (Riders vs Drivers).",
        "Clean, responsive mobile-friendly UI crafted with modern Tailwind CSS."
      ],
      github: "https://github.com/aman-tyagi/uber-clone",
      liveDemo: "https://uber-clone-aman.vercel.app",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "diabetic-retinopathy",
      title: "Diabetic Retinopathy Classification with EfficientNet",
      category: "AI & Machine Learning",
      featured: true,
      tagline: "Deep learning pipeline achieving 90% validation accuracy on medical fundus imagery",
      description: "Built and fine-tuned a deep learning computer vision pipeline to classify diabetic retinopathy stages from digital fundus photography using the Messidor dataset. Implemented transfer learning with EfficientNet-B3, advanced medical data augmentations (rotation, affine transformation, CLAHE), and confusion matrix analysis to ensure clinical reliability.",
      technologies: ["PyTorch", "Python", "EfficientNet-B3", "CNN", "Messidor Dataset", "Torchvision", "Scikit-Learn", "Matplotlib"],
      highlights: [
        "Achieved 90% validation accuracy on benchmark Messidor fundus images.",
        "Graded fundus images into 5 distinct clinical stages of retinopathy.",
        "Built training and evaluation scripts with automated checkpointing and ROC-AUC metrics.",
        "Published 2 peer-reviewed research papers based on this pipeline and methodology."
      ],
      github: "https://github.com/aman-tyagi/diabetic-retinopathy-classification",
      liveDemo: "#research",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "multi-source-llm-summarizer",
      title: "Multi-Source Text Summarization using LLMs",
      category: "AI & Machine Learning",
      featured: true,
      tagline: "AI content summarizer for YouTube videos, web pages, and PDFs using Groq LLaMA3",
      description: "Developed a web application that extracts and synthesizes content from diverse sources—including YouTube video transcripts, live web URLs, and multi-page PDF documents—using large language models. Integrated LangChain with Groq LLaMA3 inference engines and designed custom prompt chains delivering concise, structured ~300-word summaries.",
      technologies: ["Streamlit", "LangChain", "Groq LLaMA3", "Python", "PyPDF2", "YouTube Transcript API"],
      highlights: [
        "Multi-modal input ingestion: URLs, YouTube transcripts, and raw multi-page PDF documents.",
        "Integrated ultra-fast Groq LLaMA3 inference via LangChain prompt templates.",
        "Implemented Map-Reduce token reduction strategies for long-document processing.",
        "Delivered an intuitive interactive Streamlit web dashboard for real-time synthesis."
      ],
      github: "https://github.com/aman-tyagi/multi-source-text-summarizer",
      liveDemo: "https://summarizer-llama3.streamlit.app",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "food-recipe-app",
      title: "Food Recipe Web Application",
      category: "Full Stack",
      featured: true,
      tagline: "Interactive culinary platform with recipe discovery, filtering, and custom creation",
      description: "Built a fullstack food recipe web application featuring a custom Express.js backend and a responsive React.js frontend. Features include recipe creation with step-by-step instructions, keyword and ingredient search, dietary filters, and detailed nutritional breakdowns consuming REST APIs exposed by the backend.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
      highlights: [
        "Custom REST API endpoints for full CRUD operations on recipes and categories.",
        "Instant search and dynamic filtering by ingredients, cooking time, and dietary tags.",
        "Responsive, modern card-based UI with interactive cooking step checklists.",
        "Persistent user favorites and ratings stored in MongoDB."
      ],
      github: "https://github.com/aman-tyagi/food-recipe-app",
      liveDemo: "https://recipe-hub-aman.vercel.app",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "weather-intelligence-app",
      title: "Real-Time Weather Intelligence & Forecast App",
      category: "Web Apps",
      featured: false,
      tagline: "Hyper-local weather forecasts with interactive climate analytics and animations",
      description: "Created a modern weather forecast application utilizing OpenWeatherMap APIs and browser Geolocation. Displays current temperature, air quality, humidity, wind patterns, UV index, and an interactive 7-day future weather outlook with dynamic condition-based background themes.",
      technologies: ["React.js", "Tailwind CSS", "OpenWeatherMap API", "HTML5 Geolocation", "Lucide Icons", "JavaScript"],
      highlights: [
        "Instant geolocation detection with fallback search for 200,000+ global cities.",
        "Dynamic UI adapting visual themes based on day/night and atmospheric conditions.",
        "Comprehensive weather metrics: Feels-like temp, humidity, pressure, visibility, and wind speeds.",
        "Clean, lightweight client-side state caching to minimize redundant API calls."
      ],
      github: "https://github.com/tyagiaman8923/weather-app",
      liveDemo: "https://weather-app-13.vercel.app/",
      image: weatherImg
    }
  ],

  skills: {
    languages: [
      { name: "C++", level: "Expert", experience: "5+ years", icon: "Code" },
      { name: "C", level: "Proficient", experience: "4+ years", icon: "Cpu" },
      { name: "Python", level: "Advanced", experience: "4+ years", icon: "Terminal" },
      { name: "JavaScript (ES6+)", level: "Advanced", experience: "3+ years", icon: "FileCode" },
      { name: "TypeScript", level: "Proficient", experience: "2+ years", icon: "FileCode2" },
      { name: "SQL", level: "Proficient", experience: "3+ years", icon: "Database" },
    ],
    webTechnologies: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
    ],
    aiAndDataScience: [
      { name: "PyTorch", level: "Proficient" },
      { name: "Convolutional Neural Networks (CNN)", level: "Advanced" },
      { name: "EfficientNet Architectures", level: "Advanced" },
      { name: "LangChain", level: "Proficient" },
      { name: "Groq LLaMA3 & LLM Prompting", level: "Proficient" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "Computer Vision (OpenCV)", level: "Proficient" },
      { name: "Medical Image Classification", level: "Specialized" },
    ],
    coreFundamentals: [
      { name: "Data Structures & Algorithms (DSA)", level: "Expert", desc: "600+ problems solved, 1705 contest rating" },
      { name: "Operating Systems", level: "Advanced", desc: "Processes, Threads, Concurrency, Memory Management" },
      { name: "Computer Networks", level: "Advanced", desc: "TCP/IP, OSI Layers, HTTP/S, Routing & DNS" },
      { name: "Object-Oriented Programming (OOPS)", level: "Expert", desc: "Design Patterns, SOLID Principles, Polymorphism" },
      { name: "Database Management Systems (DBMS)", level: "Advanced", desc: "Normalization, ACID properties, Indexing, Transactions" },
      { name: "System Design Fundamentals", level: "Proficient", desc: "Scalability, Caching, Load Balancing, Microservices" },
    ],
    toolsAndWorkflow: [
      { name: "Git & GitHub" },
      { name: "Postman API Platform" },
      { name: "VS Code" },
      { name: "Linux / Bash Shell" },
      { name: "Vercel & Netlify" },
      { name: "Streamlit" },
    ],
    softSkills: [
      "Technical Communication & Presentation",
      "Cross-Functional Team Collaboration",
      "Active Listening & Empathy",
      "Mentorship & Knowledge Sharing",
      "Agile & Scrum Delivery",
      "Analytical Problem Decomposition"
    ]
  },

  education: [
    {
      institution: "National Institute of Technology Kurukshetra (NIT KKR)",
      degree: "Master of Technology (M.Tech) in Computer Engineering",
      period: "2024 - 2026",
      location: "Kurukshetra, Haryana, India",
      grade: "CGPA: 8.3594",
      highlights: [
        "Specialized in Advanced Algorithms, Machine Learning, and Computer Vision.",
        "Appointed as Graduate Teaching Assistant (TA) for undergraduate labs.",
        "Conducted research in Medical Image Classification (Diabetic Retinopathy)."
      ],
      current: true
    },
    {
      institution: "J.K. Institute of Applied Physics and Technology, University of Allahabad",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      period: "2020 - 2024",
      location: "Prayagraj, Uttar Pradesh, India",
      grade: "CGPA: 8.3",
      highlights: [
        "Graduated with First Class with Distinction in Computer Science & Engineering.",
        "Strong foundation in Operating Systems, DBMS, Computer Networks, and Full-Stack Engineering.",
        "Led multiple technical projects and coding club problem-solving sessions."
      ],
      current: false
    },
    {
      institution: "Lala Jagdish Prasad Saraswati Vidya Mandir Inter College",
      degree: "Senior Secondary (Intermediate - Class XII)",
      period: "2018 - 2019",
      location: "Muzaffarnagar, Uttar Pradesh, India",
      grade: "78.80%",
      highlights: ["Science Stream (Physics, Chemistry, Mathematics)."],
      current: false
    },
    {
      institution: "Lala Jagdish Prasad Saraswati Vidya Mandir Inter College",
      degree: "Secondary Education (Highschool - Class X)",
      period: "2016 - 2017",
      location: "Muzaffarnagar, Uttar Pradesh, India",
      grade: "86.80%",
      highlights: ["Graduated with distinction in Mathematics and Science."],
      current: false
    }
  ]
};
