import { motion } from "motion/react";
import { ExternalLink, Github, Server, Mail, BookOpen, Library, Briefcase, Star, Play } from "lucide-react";

const projects = [
  {
    title: "Decentralized Degree Verification",
    description: "A secure, tamper-proof degree verification system leveraging blockchain technology and smart contracts. Enables institutions to issue verifiable credentials on-chain, eliminating fraud and simplifying validation.",
    tags: ["Blockchain", "Web3", "Smart Contracts", "Solidity"],
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)",
    accentColor: "#a78bfa",
    icon: <Briefcase size={40} />,
    image: "https://cdn.prod.website-files.com/6146143fd598aae11fb65972/623c9967960ed2de5ca24ebc_jr_huZUK0Dv8gbga-R3KSvDovrIiS-ztAHn6WYZBtL0Dn1WPfVfwnojQIe0Nr1fK8mUdh-EIjPti_4iYvNrdfhdgMJffrDG2B5b-SbACHrli8g0mA27DKTs1YApUuvoYJrA_0mcq.jpeg",
    github: "https://github.com/YahyaCodeX",
    // demo: "https://your-demo-link.com"  ← Paste your live URL here when ready
    demo: null,
    featured: true,
    num: "01",
  },
  {
    title: "Fitness Tracker (Microservices)",
    description: "Scalable fitness tracking system built using Spring Boot microservices. Features REST APIs for analytics, progress monitoring, and user management with decoupled service communication.",
    tags: ["Java", "Spring Boot", "Microservices", "MySQL"],
    gradient: "linear-gradient(135deg, #064e3b 0%, #0d9488 60%, #06b6d4 100%)",
    accentColor: "#34d399",
    icon: <Server size={40} />,
    image: "https://cdn.dribbble.com/userupload/41983938/file/still-b0415875a678e33ff3ed2c914a796ed8.gif",
    github: "https://github.com/YahyaCodeX",
    // demo: "https://your-demo-link.com"
    demo: null,
    featured: false,
    num: "02",
  },
  {
    title: "Smart Email Assistant",
    description: "AI-powered assistant that processes emails and suggests intelligent responses. Focused on automation and productivity enhancement using NLP concepts.",
    tags: ["Java", "AI", "Automation", "REST API"],
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #6d28d9 60%, #a78bfa 100%)",
    accentColor: "#a78bfa",
    icon: <Mail size={40} />,
    image: "https://cyberpanel.net/wp-content/uploads/2024/09/AI-Email-Assistant-2.png",
    github: "https://github.com/YahyaCodeX",
    // demo: "https://your-demo-link.com"
    demo: null,
    featured: false,
    num: "03",
  },
  {
    title: "Secure Journal App",
    description: "Backend-focused journaling application with secure CRUD operations and clean RESTful architecture. Implements authentication and personal data management.",
    tags: ["Spring Boot", "MongoDB", "Security", "Java"],
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 60%, #22d3ee 100%)",
    accentColor: "#22d3ee",
    icon: <BookOpen size={40} />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvvXjxuNs3-mczr86-g3saDKAdWfWd6K1dA&s",
    github: "https://github.com/YahyaCodeX",
    // demo: "https://your-demo-link.com"
    demo: null,
    featured: false,
    num: "04",
  },
  {
    title: "Library Management System",
    description: "Complete backend solution for managing book issuing, returns, and inventory. Database-driven system with optimized query handling and clean service layer.",
    tags: ["Java", "MySQL", "JDBC", "System Design"],
    gradient: "linear-gradient(135deg, #1c1917 0%, #78716c 60%, #10b981 100%)",
    accentColor: "#10b981",
    icon: <Library size={40} />,
    image: "https://cdn.prod.website-files.com/65fabbf8f7f7323a634a308c/6697a8662e63dfe68b424df5_Group%201171275865.png",
    github: "https://github.com/YahyaCodeX",
    // demo: "https://your-demo-link.com"
    demo: null,
    featured: false,
    num: "05",
  },
];

function ProjectImage({
  src,
  alt,
  gradient,
  icon,
}: {
  src: string;
  alt: string;
  gradient: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full">
      {/* Gradient fallback always behind the image */}
      <div className="absolute inset-0" style={{ background: gradient }} />
      {/* Dot grid on top of gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      {/* Icon fallback */}
      <div className="absolute inset-0 flex items-center justify-center text-white/20">
        {icon}
      </div>
      {/* Actual image — hides on error to reveal fallback */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.opacity = "0";
          e.currentTarget.style.visibility = "hidden";
        }}
      />
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="col-span-1 md:col-span-2 group relative"
    >
      <div className="relative overflow-hidden rounded-3xl gradient-border transition-all duration-500 group-hover:shadow-[0_24px_60px_rgba(139,92,246,0.15)]">
        {/* Image banner */}
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <ProjectImage
            src={project.image}
            alt={project.title}
            gradient={project.gradient}
            icon={project.icon}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/20 to-transparent z-20 pointer-events-none" />
          {/* Featured badge */}
          <div
            className="absolute top-5 left-5 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${project.accentColor}50`,
              color: project.accentColor,
            }}
          >
            <Star size={11} />
            Featured Project
          </div>
          {/* Number watermark */}
          <div className="absolute bottom-4 right-6 z-30 text-white/10 font-mono font-extrabold text-7xl leading-none select-none">
            #{project.num}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] font-mono rounded-full"
                style={{
                  background: `${project.accentColor}14`,
                  border: `1px solid ${project.accentColor}30`,
                  color: project.accentColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-5">{project.description}</p>

          {/* Link buttons */}
          <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, #06b6d4)`,
                color: "#060608",
              }}
            >
              <Github size={14} />
              View Source Code
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: `${project.accentColor}18`,
                  border: `1px solid ${project.accentColor}40`,
                  color: project.accentColor,
                }}
              >
                <Play size={14} />
                Live Demo
              </a>
            ) : (
              <span
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[10px] font-mono select-none"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#4b5563",
                }}
                title="Add your demo URL to the demo field in Projects.tsx"
              >
                <ExternalLink size={12} />
                Demo Coming Soon
              </span>
            )}

            <span className="ml-auto text-gray-700 text-[10px] font-mono">{project.num} // FEATURED</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl gradient-border p-5 sm:p-6 transition-all duration-400 group-hover:translate-y-[-6px] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] h-full flex flex-col">
        {/* Image area */}
        <div className="relative h-44 sm:h-48 overflow-hidden rounded-xl mb-5 shrink-0">
          <ProjectImage
            src={project.image}
            alt={project.title}
            gradient={project.gradient}
            icon={project.icon}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg-dark/70 to-transparent z-20 pointer-events-none" />
          {/* Number watermark */}
          <div className="absolute bottom-2 right-3 z-30 text-white/10 font-mono font-extrabold text-4xl leading-none select-none">
            #{project.num}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[10px] font-mono rounded-full"
              style={{
                background: `${project.accentColor}12`,
                border: `1px solid ${project.accentColor}28`,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Always-visible link buttons */}
        <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: `${project.accentColor}14`,
              border: `1px solid ${project.accentColor}35`,
              color: project.accentColor,
            }}
          >
            <Github size={13} />
            GitHub
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, #06b6d4)`,
                color: "#060608",
              }}
            >
              <Play size={13} />
              Live Demo
            </a>
          ) : (
            <span
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono select-none"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#374151",
              }}
              title="Add your demo URL to the demo field in Projects.tsx"
            >
              <ExternalLink size={11} />
              No Demo
            </span>
          )}

          <span className="ml-auto text-gray-700 text-[10px] font-mono">{project.num}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 container mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center mb-12 sm:mb-20 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gradient font-mono text-xs tracking-widest uppercase mb-3"
        >
          Portfolio
        </motion.span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
          Featured{" "}
          <span className="text-gradient-shimmer">Projects</span>
        </h2>
        <p className="text-gray-500 text-sm mt-3 max-w-md">
          A selection of backend projects showcasing my engineering depth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) =>
          project.featured ? (
            <FeaturedProjectCard key={index} project={project} />
          ) : (
            <ProjectCard key={index} project={project} index={index} />
          )
        )}
      </div>
    </section>
  );
}
