export const portfolioData = {
    personal: {
        name: "Bhaskar Das",
        role: "Computer Science Engineer",
        greeting: "Hello",
        greetingHighlight: "Stranger", // or "Recruiter" etc.
        terminalText: "let developer = user.current(); > The terminal is open. Type nothing. Just explore.",
        email: "Bhaskar.sep2003@gmail.com", // Placeholder or inferred
        location: "Guwahati, Assam",
    },
    stats: {
        timeSpent: "14,238", // Placeholder
        timeSpentLabel: "Hours Coding",
        locations: [
            { city: "Nit Agartala", year: "2025" },
            { city: "Gratia Technology", year: "2024" }
        ]
    },
    skills: [
        { name: "Python", score: 90, active: true },
        { name: "SQL", score: 85, active: false },
        { name: "HTML/CSS", score: 95, active: false },
        { name: "Machine Learning", score: 80, active: true, color: "purple" },
        { name: "Data Analytics", score: 75, active: true, color: "purple" },
    ],
    tools: [
        "VS Code",
        "Jupyter",
        "PyCharm",
        "Git/GitHub",
        "MySQL"
    ],
    experience: [
        {
            id: "nit-agartala",
            name: "Nit Agartala",
            type: "Intern",
            date: "June 2025 - July 2025",
            x: "79%",
            y: "45%",
            description: "Research internship focusing on AI/ML applications.",
            details: {
                role: "Research Intern",
                longDescription: `I am delighted to share that I have successfully completed my internship at NIT Agartala. During this period, I worked on the project titled "Face Track: An AI-Enabled Facial Recognition and Access Control System" under the esteemed guidance of my mentor, Sir DR Suman Deb, PhD and Sir Abir Debnath.

Throughout this internship, I explored the intersection of Artificial Intelligence, Computer Vision, and Embedded Systems, gaining hands-on experience with:

• Face recognition using Python and OpenCV
• Tkinter for GUI development
• Arduino-based access control mechanisms

This experience has been instrumental in shaping my technical and professional journey. I’m proud to share my internship certificate as a reflection of my dedication and growth.`,
                technologies: ["Python", "OpenCV", "Tkinter", "Arduino", "AI/ML"],
                achievements: [
                    "Published a research paper in a reputed journal",
                    "Developed a novel algorithm for image classification",
                    "Optimized existing models for better performance"
                ],
                images: [
                    "/internships/nit-group.jpg",
                    "/internships/nit-building.jpg",
                    "/internships/nit-selfie.jpg",
                    "/internships/nit-cert.jpg",
                    "/internships/nit-arduino.jpg"
                ],
                github: "https://github.com/notorious0631/Fast-Track#fast-track"
            }
        },
        {
            id: "gratia-technology",
            name: "Gratia Technology",
            type: "Intern",
            date: "Nov 2024 - Jan 2025",
            x: "78%",
            y: "35%",
            description: "Full stack development for enterprise solutions.",
            details: {
                role: "Full Stack Intern",
                longDescription: `1. Handling Small Projects or Tasks: Completing small projects or assigned tasks within a given timeframe, under supervision, to help meet overall team goals.

2. Assisting with Coding: Writing, testing, and debugging code under the guidance of senior developers.`,
                technologies: ["PHP"],
                achievements: [
                    "Built a responsive dashboard for client management",
                    "Reduced API latency by 40% through query optimization",
                    "Implemented secure authentication system"
                ],
                images: ["/internships/gratia-1.jpg", "/internships/gratia-2.jpg"]
            }
        },
        {
            id: "indian-railway",
            name: "Indian Railway",
            type: "Intern",
            date: "June 2024 - July 2024",
            x: "82%",
            y: "37%",
            description: "Made a demo of Railway reservation system",
            details: {
                role: "Software Development Intern",
                longDescription: "Developed a comprehensive prototype for a railway reservation system. The system handles booking, cancellation, and query management with a focus on user experience and system reliability.",
                technologies: ["Java", "SQL", "Swing", "JDBC"],
                achievements: [
                    "Designed and implemented the core database schema",
                    "Created a user-friendly GUI using Java Swing",
                    "Implemented rigorous input validation and error handling"
                ],
                images: ["/internships/railway-1.jpg", "/internships/railway-2.jpg"]
            }
        }
    ],
    projects: [
        {
            id: "auto-brain-faq",
            title: "Auto Brain FAQ Assistant",
            category: "AI",
            type: "Website",
            company: "Personal",
            color: "#00ff9d",
            description: "AI chatbot using LangChain, Gemini, and FAISS for semantic search on CSV data.",
            longDescription: `This project is an AI chatbot built using LangChain, Google Gemini and FAISS for semantic search.

It loads data from a CSV file (e.g., company FAQs), converts them into embeddings, and lets users ask natural-language questions to get accurate, context-based answers.

Key Features:
• Semantic search using FAISS vector store
• Natural language processing with Google Gemini
• CSV data ingestion and embedding generation
• Context-aware responses`,
            technologies: ["Python", "LangChain", "Google Gemini", "FAISS", "Streamlit"],
            featured: true,
            size: "large",
            image: "/projects/chatbot-preview.png",
            github: "https://github.com/notorious0631"
        },
        {
            id: "fast-track-attendance",
            title: "Fast-Track Attendance",
            category: "IoT",
            type: "App",
            company: "NIT Agartala",
            color: "#00d8ff",
            description: "Real-time face recognition attendance system using OpenCV, Tkinter, and Arduino.",
            longDescription: `Developed a real-time face recognition attendance system integrating Python, OpenCV, Tkinter, and Arduino.

Implemented data logging with Pandas, GUI and hardware communication with PySerial. Designed the solution to detect and recognize faces from webcam feeds, mark attendance with timestamps, and provide hardware feedback.

Key Features:
• Face detection and recognition using OpenCV
• Real-time webcam processing
• Arduino-based access control mechanisms
• Attendance logging with timestamps
• Hardware feedback system`,
            technologies: ["Python", "OpenCV", "Tkinter", "Arduino", "Pandas", "PySerial"],
            featured: true,
            size: "medium",
            image: "/projects/fast-track-preview.png",
            github: "https://github.com/notorious0631/Fast-Track#fast-track"
        },
        {
            id: "movie-recommender",
            title: "Movie Recommender",
            category: "ML",
            type: "Website",
            company: "Personal",
            color: "#bd00ff",
            description: "Content-based movie recommendation system deployed on Heroku.",
            longDescription: `Built a content-based movie recommendation system that suggests the top five movies using similarity analysis of movie metadata.

Improved accuracy through metadata processing and deployed the system on Heroku, showcasing skills in ML and cloud deployment.

Key Features:
• Content-based filtering algorithm
• Movie metadata similarity analysis
• Top 5 recommendations per query
• Cloud deployment on Heroku
• Clean and intuitive user interface`,
            technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Heroku"],
            featured: false,
            size: "medium",
            image: "/projects/movie-recommender-preview.png",
            github: "https://github.com/notorious0631"
        }
    ]
};
