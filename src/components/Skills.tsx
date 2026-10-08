import { motion } from "motion/react";
import { Server, Brain, Database, GitBranch, Code2, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Server size={24} />,
    title: "Backend Development",
    desc: "Java, Spring Boot, REST APIs, Microservices Architecture",
  },
  {
    icon: <Brain size={24} />,
    title: "Artificial Intelligence",
    desc: "AI-based automation systems, Smart assistant development",
  },
  {
    icon: <Database size={24} />,
    title: "Databases",
    desc: "MySQL, MongoDB, Database Design, Query Optimization",
  },
  {
    icon: <GitBranch size={24} />,
    title: "Version Control",
    desc: "Git, GitHub, Collaborative Workflow, Branching Strategies",
  },
  {
    icon: <Terminal size={24} />,
    title: "API Integration",
    desc: "Third-party API consumption, Webhooks, JSON processing",
  },
  {
    icon: <Code2 size={24} />,
    title: "System Design",
    desc: "Scalable architecture basics, CRUD operations, Clean Code",
  },
];



export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-serif italic text-brand-dark/60 mb-2"
          >
            / Expertise & Capabilities
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-brand-dark">
            What I Do Best
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card rounded-[24px] p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-brand-dark mb-3">{skill.title}</h3>
              <p className="text-sm text-brand-dark/60 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
