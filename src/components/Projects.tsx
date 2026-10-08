import { motion } from "motion/react";
import { ExternalLink, Github, Server, Mail, BookOpen, Library, Briefcase, Play, Cpu, Bot } from "lucide-react";

const projects = [
  {
    title: "AI Chess Reviewer",
    description: "An event-driven, real-time chess analysis platform that processes PGN games move-by-move using Stockfish 16. Features instant evaluations, win-probability graphs, and Lichess opening theory detection streamed via WebSockets.",
    tags: ["Java", "Spring Boot", "Kafka", "Python", "React", "Stockfish"],
    icon: <Cpu size={24} />,
    image: "/chess-project.png",
    github: "https://github.com/yahyaCodeX/chess-reviewer",
    demo: null,
    category: "Full Stack AI",
  },
  {
    title: "Jarvis Personal AI",
    description: "An advanced, personalized AI assistant powered by Gemini Live API with Windows automation, voice biometrics, and more. Capable of browser automation and academic document generation.",
    tags: ["Python", "Gemini API", "Speech Recognition", "Selenium", "Automation"],
    icon: <Bot size={24} />,
    image: "/jarvis-project.png",
    github: "https://github.com/yahyaCodeX/Jarvis-Personlized-AI",
    demo: "https://lnkd.in/p/ds2xPCRG",
    category: "Voice Assistant",
  },
  {
    title: "Decentralized Degree Verification",
    description: "A secure, tamper-proof degree verification system leveraging blockchain technology and smart contracts. Enables institutions to issue verifiable credentials on-chain, eliminating fraud and simplifying validation.",
    tags: ["Blockchain", "Web3", "Smart Contracts", "Solidity"],
    icon: <Briefcase size={24} />,
    image: "https://cdn.prod.website-files.com/6146143fd598aae11fb65972/623c9967960ed2de5ca24ebc_jr_huZUK0Dv8gbga-R3KSvDovrIiS-ztAHn6WYZBtL0Dn1WPfVfwnojQIe0Nr1fK8mUdh-EIjPti_4iYvNrdfhdgMJffrDG2B5b-SbACHrli8g0mA27DKTs1YApUuvoYJrA_0mcq.jpeg",
    github: "https://github.com/YahyaCodeX",
    demo: null,
    category: "Web3",
  },
  {
    title: "Fitness Tracker",
    description: "Scalable fitness tracking system built using Spring Boot microservices. Features REST APIs for analytics, progress monitoring, and user management with decoupled service communication.",
    tags: ["Java", "Spring Boot", "Microservices", "MySQL"],
    icon: <Server size={24} />,
    image: "https://cdn.dribbble.com/userupload/41983938/file/still-b0415875a678e33ff3ed2c914a796ed8.gif",
    github: "https://github.com/YahyaCodeX",
    demo: null,
    category: "Microservices",
  },
  {
    title: "Smart Email Assistant",
    description: "AI-powered assistant that processes emails and suggests intelligent responses. Focused on automation and productivity enhancement using NLP concepts.",
    tags: ["Java", "AI", "Automation", "REST API"],
    icon: <Mail size={24} />,
    image: "https://cyberpanel.net/wp-content/uploads/2024/09/AI-Email-Assistant-2.png",
    github: "https://github.com/YahyaCodeX",
    demo: null,
    category: "NLP",
  },
  {
    title: "Secure Journal App",
    description: "Backend-focused journaling application with secure CRUD operations and clean RESTful architecture. Implements authentication and personal data management.",
    tags: ["Spring Boot", "MongoDB", "Security", "Java"],
    icon: <BookOpen size={24} />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvvXjxuNs3-mczr86-g3saDKAdWfWd6K1dA&s",
    github: "https://github.com/YahyaCodeX",
    demo: null,
    category: "Backend",
  },
  {
    title: "Library Management System",
    description: "Complete backend solution for managing book issuing, returns, and inventory. Database-driven system with optimized query handling and clean service layer.",
    tags: ["Java", "MySQL", "JDBC", "System Design"],
    icon: <Library size={24} />,
    image: "https://cdn.prod.website-files.com/65fabbf8f7f7323a634a308c/6697a8662e63dfe68b424df5_Group%201171275865.png",
    github: "https://github.com/YahyaCodeX",
    demo: null,
    category: "Architecture",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10 bg-[#FAFAF9]">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-serif italic text-brand-dark/60 mb-2"
          >
            / Best Projects
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-brand-dark">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group glass-card rounded-[32px] overflow-hidden flex flex-col bg-white transition-all hover:shadow-[0_20px_60px_-15px_rgba(163,230,53,0.3)] hover:border-[#A3E635]/40 hover:-translate-y-1 border border-transparent"
            >
              {/* Top Image Container */}
              <div className="relative h-48 sm:h-64 w-full p-4 pb-0">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-50 border border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"; }}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg sm:text-xl font-medium text-brand-dark">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-dark/40 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 shrink-0">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-brand-dark/60 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-100 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn pill-btn-dark !py-2 !px-4 !text-xs flex items-center gap-2"
                  >
                    <Github size={14} /> Source
                  </a>
                  
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-btn pill-btn-light !py-2 !px-4 !text-xs flex items-center gap-2"
                    >
                      <Play size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="pill-btn pill-btn-light !py-2 !px-4 !text-xs opacity-50 flex items-center gap-2 cursor-not-allowed">
                      <ExternalLink size={14} /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
