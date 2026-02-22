import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fitness Tracker (Microservices)",
    description: "A scalable fitness tracking system built using Spring Boot microservices architecture. Features REST APIs for analytics and user progress monitoring.",
    tags: ["Java", "Spring Boot", "Microservices", "MySQL"],
    image: "https://cdn.dribbble.com/userupload/41983938/file/still-b0415875a678e33ff3ed2c914a796ed8.gif",
    github: "https://github.com/dashboard",
    link: "#"
  },
  {
    title: "Smart Email Assistant",
    description: "AI-powered assistant designed to process emails and suggest intelligent responses. Focused on automation and productivity enhancement.",
    tags: ["Java", "AI", "Automation", "REST API"],
    image: "https://cyberpanel.net/wp-content/uploads/2024/09/AI-Email-Assistant-2.png",
    github: "https://github.com/dashboard",
    link: "#"
  },
  {
    title: "Secure Journal App",
    description: "A backend-focused journaling application with secure CRUD operations and clean RESTful architecture for personal data management.",
    tags: ["Spring Boot", "MongoDB", "Security", "Java"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvvXjxuNs3-mczr86-g3saDKAdWfWd6K1dA&s",
    github: "https://github.com/dashboard",
    link: "#"
  },
  {
    title: "Library Management System",
    description: "Complete backend solution for managing book issuing, returns, and inventory. Database-driven system with optimized query handling.",
    tags: ["Java", "MySQL", "JDBC", "System Design"],
    image: "https://picsum.photos/seed/library/800/600",
    github: "https://github.com/dashboard",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 container mx-auto px-6">
      <div className="flex flex-col items-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4"
        >
          Portfolio
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/30">
              <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-bg-dark font-bold rounded-full hover:bg-emerald-400 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded-full border border-emerald-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <a 
                  href={project.github} 
                  className="text-emerald-400 text-xs font-mono flex items-center gap-2 hover:underline"
                >
                  SOURCE_CODE <ExternalLink size={12} />
                </a>
                <span className="text-gray-600 text-[10px] font-mono">0{index + 1} // PROJECT</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
