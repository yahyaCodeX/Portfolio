import { motion, useInView } from "motion/react";
import { GraduationCap, Code, Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";

const timeline = [
  {
    year: "2026 – Present",
    title: "Decentralized Degree Verification",
    org: "Blockchain Project",
    description: "Built a secure, tamper-proof degree verification system leveraging blockchain technology and smart contracts.",
    icon: <Briefcase size={18} />,
    color: "#0f172a", // Dark brand color
    accent: "#A3E635", // Lime green
    type: "Project",
    tags: ["Blockchain", "Solidity", "Web3"],
  },
  {
    year: "2026",
    title: "Library Management System",
    org: "Backend Project",
    description: "Complete backend solution for managing book issuing, returns, and inventory with optimized database queries.",
    icon: <Code size={18} />,
    color: "#0f172a",
    accent: "#A3E635",
    type: "Project",
    tags: ["Java", "MySQL", "JDBC"],
  },
  {
    year: "2025",
    title: "Fitness Tracker (Microservices)",
    org: "Personal Project",
    description: "Designed and built a scalable fitness tracking system using Spring Boot microservices with REST APIs.",
    icon: <Code size={18} />,
    color: "#0f172a",
    accent: "#A3E635",
    type: "Project",
    tags: ["Spring Boot", "Microservices", "MySQL"],
  },
  {
    year: "2022 – Present",
    title: "B.E. Computer Systems Eng.",
    org: "Mehran University of Engineering & Tech",
    description: "Specializing in backend development, system architecture, and AI-based automation.",
    icon: <GraduationCap size={18} />,
    color: "#0f172a",
    accent: "#A3E635",
    type: "Education",
    tags: ["CSE", "MUET", "Final Year"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={sectionRef} className="py-24 sm:py-32 relative z-10 bg-[#FAFAF9]">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-serif italic text-brand-dark/60 mb-2"
          >
            / Journey & Timeline
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-brand-dark">
            Here's how I evolved
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated vertical line */}
          <div className="absolute left-[38px] sm:left-[42px] top-0 bottom-0 w-[2px] overflow-hidden rounded-full bg-gray-200">
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 w-full"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{
                background: 'linear-gradient(180deg, #A3E635, #22c55e)',
              }}
            />
          </div>

          <div className="flex flex-col gap-8 sm:gap-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-24 sm:pl-32 group"
              >
                {/* Timeline node - Glowing pulsing dot */}
                <div className="absolute left-[29px] sm:left-[33px] top-6 w-5 h-5 flex items-center justify-center z-10">
                  <motion.div 
                    className="absolute w-full h-full rounded-full bg-[#A3E635]/40"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-white border-[2px] border-[#A3E635] shadow-[0_0_10px_rgba(163,230,53,0.5)] z-20 group-hover:scale-150 transition-transform duration-300" />
                </div>

                {/* Card */}
                <div
                  className="glass-card rounded-[24px] p-6 sm:p-8 transition-all duration-300 group-hover:-translate-y-1 bg-white border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
                >
                  {/* Subtle top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A3E635] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-brand-dark group-hover:bg-[#A3E635]/10 group-hover:text-[#65a30d] group-hover:border-[#A3E635]/20 transition-colors shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-brand-dark leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm font-serif italic text-brand-dark/60 mt-0.5">
                          {item.org}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0">
                      <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest bg-gray-50 text-brand-dark/50 border border-gray-100">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-brand-dark/40 text-xs font-mono ml-auto sm:ml-0">
                        <Calendar size={12} />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-brand-dark/70 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-3 py-1 rounded-lg bg-gray-50 text-brand-dark/60 border border-gray-100 transition-colors group-hover:border-gray-200 group-hover:bg-gray-100/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
