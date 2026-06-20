import { motion } from "motion/react";
import { Server, Brain, Database, GitBranch, Code2, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Server size={26} />,
    title: "Backend Development",
    desc: "Java, Spring Boot, REST APIs, Microservices Architecture",
    tools: ["Java 17", "Spring Boot", "Spring Security", "Maven"],
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.14), rgba(20,184,166,0.07))",
    iconGradient: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(34,211,238,0.12))",
    iconColor: "text-emerald-400",
    accentColor: "#10b981",
    proficiency: 5,
  },
  {
    icon: <Brain size={26} />,
    title: "Artificial Intelligence",
    desc: "AI-based automation systems, Smart assistant development",
    tools: ["NLP Concepts", "Automation", "API Integration", "Prompt Engineering"],
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.14), rgba(16,185,129,0.07))",
    iconGradient: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(16,185,129,0.12))",
    iconColor: "text-violet-400",
    accentColor: "#8b5cf6",
    proficiency: 3,
  },
  {
    icon: <Database size={26} />,
    title: "Databases",
    desc: "MySQL, MongoDB, Database Design, Query Optimization",
    tools: ["MySQL", "MongoDB", "JDBC", "Hibernate"],
    gradient: "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(6,182,212,0.07))",
    iconGradient: "linear-gradient(135deg, rgba(34,211,238,0.25), rgba(16,185,129,0.12))",
    iconColor: "text-cyan-400",
    accentColor: "#06b6d4",
    proficiency: 4,
  },
  {
    icon: <GitBranch size={26} />,
    title: "Version Control",
    desc: "Git, GitHub, Collaborative Workflow, Branching Strategies",
    tools: ["Git", "GitHub", "Pull Requests", "CI/CD Basics"],
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.14), rgba(139,92,246,0.07))",
    iconGradient: "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(139,92,246,0.12))",
    iconColor: "text-cyan-400",
    accentColor: "#22d3ee",
    proficiency: 4,
  },
  {
    icon: <Terminal size={26} />,
    title: "API Integration",
    desc: "Third-party API consumption, Webhooks, JSON/XML processing",
    tools: ["REST", "Postman", "JSON", "OAuth2"],
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.14), rgba(139,92,246,0.07))",
    iconGradient: "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(139,92,246,0.12))",
    iconColor: "text-emerald-400",
    accentColor: "#34d399",
    proficiency: 4,
  },
  {
    icon: <Code2 size={26} />,
    title: "System Design",
    desc: "Scalable architecture basics, CRUD operations, Clean Code",
    tools: ["SOLID", "Design Patterns", "Clean Architecture", "UML"],
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.14), rgba(34,211,238,0.07))",
    iconGradient: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(34,211,238,0.12))",
    iconColor: "text-violet-400",
    accentColor: "#a78bfa",
    proficiency: 4,
  },
];

const techMarquee = [
  "Java", "Spring Boot", "MySQL", "MongoDB", "REST API", "Microservices",
  "Git", "GitHub", "Solidity", "Web3", "JDBC", "Hibernate", "Maven", "Postman",
  "Docker Basics", "JSON", "OAuth2", "SOLID Principles", "Clean Code",
  "Java", "Spring Boot", "MySQL", "MongoDB", "REST API", "Microservices",
  "Git", "GitHub", "Solidity", "Web3", "JDBC", "Hibernate", "Maven", "Postman",
];

function ProficiencyDots({ count, accent }: { count: number; accent: string }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full transition-all duration-300"
          style={{
            background: i <= count ? accent : 'rgba(255,255,255,0.1)',
            boxShadow: i <= count ? `0 0 4px ${accent}60` : 'none',
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col items-center mb-12 sm:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gradient font-mono text-xs tracking-widest uppercase mb-3"
          >
            Technical Stack
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight max-w-2xl">
            Expertise &{" "}
            <span className="text-gradient-shimmer">Skills</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md">
            Tools and technologies I use to build production-grade backend systems
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Hover glow behind card */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: skill.gradient,
                  filter: 'blur(32px)',
                  transform: 'scale(1.1)',
                }}
              />
              <div
                className="gradient-border rounded-2xl p-5 sm:p-6 h-full transition-all duration-300 group-hover:translate-y-[-5px] overflow-hidden"
                style={{ background: `${skill.accentColor}06` }}
              >
                {/* Icon + proficiency row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    style={{ background: skill.iconGradient }}
                  >
                    {skill.icon}
                  </div>
                  <ProficiencyDots count={skill.proficiency} accent={skill.accentColor} />
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-white transition-colors">{skill.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">{skill.desc}</p>

                {/* Tool chips */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md transition-all duration-200 group-hover:opacity-100 opacity-70"
                      style={{
                        background: `${skill.accentColor}14`,
                        border: `1px solid ${skill.accentColor}28`,
                        color: skill.accentColor,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech marquee strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-center text-xs font-mono text-gray-600 uppercase tracking-widest mb-5">Technologies & Tools</p>
          <div className="marquee-container py-3">
            <div className="marquee-track gap-3">
              {techMarquee.map((tech, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-mono font-medium text-gray-400 border border-white/8 bg-white/[0.02] hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
