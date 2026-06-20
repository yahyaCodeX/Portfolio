import { motion, useInView } from "motion/react";
import { GraduationCap, Code, Briefcase, Calendar, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const timeline = [
  {
    year: "2026 – Present",
    title: "Decentralized Degree Verification System",
    org: "Blockchain Project",
    description: "Built a secure, tamper-proof degree verification system leveraging blockchain technology and smart contracts.",
    icon: <Briefcase size={18} />,
    color: "#a78bfa",
    bgGradient: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(16,185,129,0.04))",
    type: "Project",
    tags: ["Blockchain", "Solidity", "Web3"],
  },
  {
    year: "2026",
    title: "Library Management System",
    org: "Backend Project",
    description: "Complete backend solution for managing book issuing, returns, and inventory with optimized database queries.",
    icon: <Code size={18} />,
    color: "#06b6d4",
    bgGradient: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.04))",
    type: "Project",
    tags: ["Java", "MySQL", "JDBC"],
  },
  {
    year: "2025",
    title: "Fitness Tracker — Microservices",
    org: "Personal Project",
    description: "Designed and built a scalable fitness tracking system using Spring Boot microservices with REST APIs.",
    icon: <Code size={18} />,
    color: "#22d3ee",
    bgGradient: "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(16,185,129,0.04))",
    type: "Project",
    tags: ["Spring Boot", "Microservices", "MySQL"],
  },
  {
    year: "2022 – Present",
    title: "B.E. Computer Systems Engineering",
    org: "Mehran University of Engineering & Technology",
    description: "Specializing in backend development, system architecture, and AI-based automation. Final year student.",
    icon: <GraduationCap size={18} />,
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(34,211,238,0.04))",
    type: "Education",
    tags: ["CSE", "MUET", "Final Year"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12 sm:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gradient font-mono text-xs tracking-widest uppercase mb-3"
          >
            Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            Experience &{" "}
            <span className="text-gradient-shimmer">Timeline</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md">
            A chronological view of my projects and academic journey
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px overflow-hidden">
            {/* Static dim line */}
            <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.05)' }} />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 right-0"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{
                background: 'linear-gradient(180deg, rgba(16,185,129,0.8), rgba(34,211,238,0.6), rgba(139,92,246,0.4))',
              }}
            />
          </div>

          <div className="flex flex-col gap-6 sm:gap-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-16 sm:pl-20 group"
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-3 sm:left-4.5 top-4 w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-125"
                  style={{
                    background: `radial-gradient(circle, ${item.color}50, ${item.color}18)`,
                    border: `2px solid ${item.color}70`,
                    boxShadow: `0 0 16px ${item.color}30`,
                  }}
                  whileHover={{ boxShadow: `0 0 24px ${item.color}60` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="gradient-border rounded-2xl p-5 sm:p-6 transition-all duration-300 group-hover:translate-y-[-3px] cursor-default"
                  style={{ background: item.bgGradient }}
                  whileHover={{ boxShadow: `0 12px 40px ${item.color}15` }}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div
                        className="p-2 rounded-xl shrink-0"
                        style={{ background: `${item.color}20`, color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-gray-100 group-hover:text-white transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p style={{ color: item.color }} className="text-xs font-mono opacity-80 mt-0.5 truncate">
                          {item.org}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      {/* Type badge */}
                      <span
                        className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{
                          background: `${item.color}18`,
                          color: item.color,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-[10px] font-mono">
                        <Calendar size={10} />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#94a3b8',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
