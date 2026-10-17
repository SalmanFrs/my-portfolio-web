import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    initials: "SF",
    fullName: "Salman Faris Alhaitami",
    degree: "S.Kom.",
    headline:
      "Informatics Engineering Graduate | Data Science & Web Development",
    titleTag: "Informatics Engineering • Fresh Graduate • 2026", 
    university: "Universitas Komputer Indonesia",
    graduationYear: "2026",
    location: "Karawang, Indonesia",
    openToRoles: true,
    bio: "Fresh graduate in Informatics Engineering (Teknik Informatika) from Universitas Komputer Indonesia, focused on Data Science, Machine Learning pipelines, and modern full-stack web applications. Passionate about translating data insights and computational algorithms into robust digital solutions.",
    ipk: "3.80 / 4.00",
    workPreference: "Open to Work",
    avatarUrl: "/profile.jpg",
    email: "salmanfarisalhaitami@gmail.com",
    githubUrl: "https://github.com/SalmanFrs",
    linkedinUrl: "https://www.linkedin.com/in/salman-faris-alhaitami",
    cvUrl: "/CV Salman Faris Alhaitami.pdf",
  },

  skills: [
    {
      id: "languages",
      title: "Programming Languages",
      icon: "code",
      description:
        "Foundational programming syntax and algorithms for system development and analytics.",
      skills: [
        { name: "Python", highlight: true, colorVariant: "secondary" },
        { name: "JavaScript", highlight: true, colorVariant: "secondary" },
        { name: "TypeScript", highlight: true, colorVariant: "secondary" },
        { name: "Java", colorVariant: "neutral" },
        { name: "PHP", colorVariant: "neutral" },
        { name: "SQL", colorVariant: "neutral" },
      ],
    },
    {
      id: "datascience",
      title: "Data Science, Visualization & NLP",
      icon: "query_stats",
      description:
        "Numerical analysis, statistical modeling, data visualization, and natural language processing.",
      skills: [
        { name: "Pandas", highlight: true, colorVariant: "primary" },
        { name: "NumPy", highlight: true, colorVariant: "primary" },
        { name: "Scikit-learn", colorVariant: "primary" },
        { name: "Matplotlib", colorVariant: "neutral" },
        { name: "Seaborn", colorVariant: "neutral" },
        { name: "Jupyter Notebook", colorVariant: "neutral" },
        { name: "Google Colab", colorVariant: "neutral" },
        { name: "Tableau", highlight: true, colorVariant: "secondary" },
        { name: "Sastrawi", colorVariant: "neutral" },
        { name: "TF-IDF", colorVariant: "neutral" },
        { name: "Multinomial Naive Bayes", colorVariant: "neutral" },
      ],
    },
    {
      id: "webdev",
      title: "Web Development",
      icon: "web",
      description:
        "Component architecture, responsive styling, and scalable server-side API services.",
      skills: [
        { name: "HTML", colorVariant: "neutral" },
        { name: "CSS", colorVariant: "neutral" },
        { name: "W3.CSS", colorVariant: "neutral" },
        { name: "React", highlight: true, colorVariant: "secondary" },
        { name: "Vite", colorVariant: "neutral" },
        { name: "Next.js", highlight: true, colorVariant: "secondary" },
        { name: "Tailwind CSS", colorVariant: "neutral" },
        { name: "FastAPI", highlight: true, colorVariant: "primary" },
      ],
    },
    {
      id: "ml_cv",
      title: "Machine Learning & Computer Vision",
      icon: "graphic_eq",
      description:
        "Deep learning models, object detection, image processing, and unsupervised learning algorithms.",
      skills: [
        { name: "PyTorch", highlight: true, colorVariant: "primary" },
        { name: "YOLOv11", highlight: true, colorVariant: "secondary" },
        { name: "OpenCV", colorVariant: "neutral" },
        { name: "scikit-image", colorVariant: "neutral" },
        { name: "FFT", colorVariant: "neutral" },
        { name: "Isolation Forest", colorVariant: "neutral" },
        { name: "K-Means", colorVariant: "neutral" },
      ],
    },
    {
      id: "db_tools",
      title: "Databases & Development Tools",
      icon: "database",
      description:
        "Relational databases, version control, development environments, and deployment platforms.",
      colSpan: "md:col-span-2 lg:col-span-2",
      skills: [
        { name: "MySQL", highlight: true, colorVariant: "secondary" },
        { name: "Node.js", colorVariant: "neutral" },
        { name: "Git", colorVariant: "neutral" },
        { name: "GitHub", colorVariant: "neutral" },
        { name: "VS Code", colorVariant: "neutral" },
        { name: "Hugging Face Spaces", highlight: true, colorVariant: "primary" },
        { name: "Replicate API", colorVariant: "neutral" },
      ],
    },
  ],

  projects: [
    {
      id: "fate-series-website",
      title: "Fate Series Information Website",
      subtitle: "Informational website about the Fate series",
      category: "Static Website",
      tagLabel: "Personal Project",
      pipelineFile: "index.html",
      pipelineTag: "HTML / CSS",
      visualType: "terminal",
      image: "/images/fate-series.png",
      images: ["/images/fate-series.png"],
      description:
        "My first website, developed an informational website about the Fate series using HTML and W3.CSS, with a small amount of embedded JavaScript.",
      techStack: [
        { name: "HTML", colorVariant: "primary" },
        { name: "CSS", colorVariant: "secondary" },
        { name: "JavaScript", colorVariant: "neutral" },
      ],
      liveDemoUrl: "https://salmanfrs.github.io/",
      githubUrl: "https://github.com/SalmanFrs/SalmanFrs.github.io",
    },
    {
      id: "hoyoverse-website",
      title: "HoYoverse Games Website",
      subtitle: "An informational website about HoYoverse games",
      category: "Static Website",
      tagLabel: "Application Project",
      pipelineFile: "index.html",
      pipelineTag: "HTML / CSS / JS",
      visualType: "terminal",
      image: "/images/hoyoverse.png",
      images: ["/images/hoyoverse.png"],
      description:
        "Developed an informational website about HoYoverse and several of its games using HTML, CSS, and JavaScript as part of the Code Lab UNIKOM application process.",
      techStack: [
        { name: "HTML", colorVariant: "primary" },
        { name: "CSS", colorVariant: "secondary" },
        { name: "JavaScript", colorVariant: "neutral" },
      ],
      liveDemoUrl:
        "https://salmanfrs.github.io/WEB_10122145_SalmanFaris_PABCL2024/",
      githubUrl:
        "https://github.com/SalmanFrs/WEB_10122145_SalmanFaris_PABCL2024",
    },
    {
      id: "brin-signal-dashboard",
      title: "BRIN Signal Analysis Dashboard",
      subtitle: "Signal processing & anomaly detection pipeline",
      category: "Streamlit App",
      tagLabel: "Private Project",
      isPrivate: true,
      pipelineFile: "signal_pipeline.py",
      pipelineTag: "FFT / ANOMALY",
      visualType: "wave",
      images: [
        "/images/brin-dashboard.png",
        "/images/brin-anomaly.png",
      ],
      description:
        "Interactive signal anomaly detection and exploratory intelligence system developed during research collaboration with BRIN. Implements Fast Fourier Transform (FFT) for frequency domain feature extraction, Isolation Forest for unsupervised outlier detection, and K-Means for cluster segmentation.",
      techStack: [
        { name: "Python", colorVariant: "primary" },
        { name: "Streamlit", colorVariant: "primary" },
        { name: "Scikit-Learn", colorVariant: "neutral" },
        { name: "FFT", colorVariant: "neutral" },
        { name: "Isolation Forest", colorVariant: "neutral" },
        { name: "K-Means", colorVariant: "neutral" },
      ],
    },
    {
      id: "mini-blog-ibm",
      title: "Mini Blog IBM",
      subtitle: "Automated blog generator with IBM Granite LLM",
      category: "LLM Web Application",
      tagLabel: "Capstone Project",
      pipelineFile: "app/page.tsx",
      pipelineTag: "Next.js / TypeScript / LLM",
      visualType: "terminal",
      image: "/images/mini-blog-ibm.png",
      description:
        "Developed a web application that generates concise blog posts from user-provided topics using the IBM Granite foundation model via Replicate API. Features include Markdown-formatted results, a browsing history stored in LocalStorage, and responsive interfaces for desktop and mobile devices.",
      techStack: [
        { name: "Next.js", colorVariant: "primary" },
        { name: "TypeScript", colorVariant: "secondary" },
        { name: "Tailwind CSS", colorVariant: "neutral" },
        { name: "IBM Granite", colorVariant: "primary" },
        { name: "Replicate API", colorVariant: "secondary" },
        { name: "Vercel", colorVariant: "neutral" },
      ],
      liveDemoUrl:
        "https://mini-blog-ibm.vercel.app/",
      githubUrl:
        "https://github.com/SalmanFrs/Mini-Blog-IBM",
    },
    {
      id: "pothole-severity-classification",
      title: "Pothole Severity Classification",
      subtitle: "YOLOv11-based road damage detection & classification",
      category: "Computer Vision",
      tagLabel: "Thesis Project",
      isPrivate: true,
      pipelineFile: "app.py",
      pipelineTag: "YOLOv11 / DETECTION",
      visualType: "terminal",
      images: [
        "/images/pothole-interface.png",
        "/images/pothole-classification.png",
      ],
      description:
        "Developed a computer vision system for pothole detection and severity classification using YOLOv11. The project focuses on analyzing road damage images to identify potholes and classify their severity levels, supporting a more systematic approach to road damage assessment.",
      techStack: [
        { name: "Python", colorVariant: "primary" },
        { name: "YOLOv11", colorVariant: "primary" },
        { name: "Computer Vision", colorVariant: "neutral" },
        { name: "OpenCV", colorVariant: "neutral" },
        { name: "Streamlit", colorVariant: "neutral" },
      ],
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      subtitle: "A responsive portfolio for showcasing technical projects and experience",
      category: "Web Application",
      tagLabel: "Personal Project",
      pipelineFile: "src/data/portfolioData.ts",
      pipelineTag: "REACT / TYPESCRIPT",
      visualType: "terminal",
      images: ["/images/my-portfolio-web.png"],
      description:
        "Designed and developed a responsive personal portfolio website using React, TypeScript, Vite, and Tailwind CSS. The website showcases technical projects, professional experience, education, certifications, and technical competencies through a structured interface with interactive project cards and image carousels.",
      techStack: [
        { name: "React", colorVariant: "primary" },
        { name: "TypeScript", colorVariant: "secondary" },
        { name: "Vite", colorVariant: "neutral" },
        { name: "Tailwind CSS", colorVariant: "primary" },
        { name: "Vercel", colorVariant: "neutral" },
      ],
      liveDemoUrl: "https://salman-portfolio-web.vercel.app/",
      githubUrl: "https://github.com/SalmanFrs/my-portfolio-Web",
    },
  ],

  experiences: [
    {
      id: "exp-brin",
      role: "Data Science Intern",
      organization:
        "Pusat Riset Antariksa / BRIN - Badan Riset dan Inovasi Nasional",
      period: "October 2025 - December 2025",
      location: "Bandung, West Java, Indonesia",
      accentColor: "primary",
      bullets: [
        "Developed a Streamlit-based web analytics dashboard to automate the classification of earthquake infrasound signals and accelerometer data from three BRIN monitoring stations.",
        "Applied Isolation Forest to distinguish anomalous signals from background noise.",
        "Integrated Fast Fourier Transform (FFT) for spectral feature extraction and K-Means Clustering with automatic optimal cluster selection using the Elbow Method.",
        "Developed a New Data Analysis module using the Model-View-Controller (MVC) architecture to process external CSV files in a structured workflow.",
        "Deployed the application to a private Hugging Face Spaces repository to protect internal data and validate system functionality.",
      ],
    },
    {
      id: "edu-degree",
      role: "Sarjana Komputer (S.Kom.) / Bachelor of Computer Science",
      organization:
        "Universitas Komputer Indonesia • Teknik Informatika (Informatics Engineering)",
      period: "2022 - 2026",
      location: "Indonesia",
      accentColor: "neutral",
      bullets: [
        "Fresh Graduate focus on Data Science, Machine Learning, and Web Architecture. Relevant coursework: Data Structures & Algorithms, Machine Learning, Web Engineering, Database Systems, Distributed Systems, Software Engineering Principles.",
      ],
    },
  ],

  certifications: [
    {
      id: "cert-1",
      issuer: "Cisco", 
      name: "CCNA: Introduction to Networks", 
      issuedYear: "Issued February 2024", 
      accentColor: "secondary",
    },
    {
      id: "cert-2",
      issuer: "IBM", 
      name: "Code Generation and Optimization Using IBM Granite",
      issuedYear: "Issued September 2025",
      accentColor: "primary",
    },
    {
      id: "cert-3",
      issuer: "Universitas Komputer Indonesia (UNIKOM)",
      name: "TOEFL: Language Center UNIKOM", 
      issuedYear: "Issued November 2025 - Expires November 2027", 
      accentColor: "secondary",
    },
    {
      id: "cert-4",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      name: "Certified Associate Data Scientist (CADS)", 
      issuedYear: "Issued March 2026 - Expires March 2029", 
      accentColor: "primary",
    },
    {
      id: "cert-5",
      issuer: "Google for Education",
      name: "Gemini Certified Student - University", 
      issuedYear: "Issued August 2026 - Expires August 2029", 
      accentColor: "secondary",
    },
    {
      id: "cert-6",
      issuer: "Coding Studio",
      name: "Fundamental Algoritma",
      issuedYear: "Issued October 2026",
      accentColor: "primary",
    },
  ],

  about: {
    heading: "Turning data into insights and ideas into applications.",
    paragraphs: [
      "I am an Informatics Engineering graduate from Universitas Komputer Indonesia with a strong interest in Data Science and Web Development. Through academic projects, personal projects, and my Data Science internship at BRIN, I have gained hands-on experience in data analysis, machine learning, signal processing, and web application development.",
      "I enjoy solving practical problems through data-driven approaches and building applications that are functional, maintainable, and user-friendly. I continuously expand my technical skills, explore new technologies, and seek opportunities to apply what I learn to real-world challenges.",
    ],
    specs: [
      { label: "DEGREE", value: "S.Kom. (Informatics Engineering)" },
      { label: "SPECIALIZATION", value: "Data Science & Web Development" },
      { label: "LANGUAGES", value: "Indonesian, English" },
      { label: "LOCATION", value: "Karawang, Indonesia" },
    ],
    strengths: [
      {
        title: "Data Science & Analytics",
        desc: "Experience with data analysis, visualization, machine learning, and signal processing through projects and research-oriented work.",
        icon: "insights",
        accentColor: "primary",
      },
      {
        title: "Web Application Development",
        desc: "Building responsive web interfaces and applications using JavaScript, TypeScript, React, Next.js, and related technologies.",
        icon: "code",
        accentColor: "secondary",
      },
      {
        title: "Analytical Problem Solving",
        desc: "Applying systematic analysis, algorithmic thinking, and model evaluation to address technical problems.",
        icon: "calculate",
        accentColor: "secondary",
      },
      {
        title: "Continuous Learning",
        desc: "Adapting to new tools and technologies while developing practical solutions through independent and collaborative projects.",
        icon: "school",
        accentColor: "primary",
      },
    ],
  },
};
