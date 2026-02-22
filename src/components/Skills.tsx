import { motion } from "motion/react";
import { Server, Brain, Database, GitBranch, Code2, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Server size={24} />,
    title: "Backend Development",
    desc: "Java, Spring Boot, REST APIs, Microservices Architecture",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Brain size={24} />,
    title: "Artificial Intelligence",
    desc: "AI-based automation systems, Smart assistant development concepts",
    color: "from-blue-500/20 to-emerald-500/20"
  },
  {
    icon: <Database size={24} />,
    title: "Databases",
    desc: "MySQL, MongoDB, Database Design, Query Optimization",
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: <GitBranch size={24} />,
    title: "Version Control",
    desc: "Git, GitHub, Collaborative Workflow, Branching Strategies",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: <Terminal size={24} />,
    title: "API Integration",
    desc: "Third-party API consumption, Webhooks, JSON/XML processing",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: <Code2 size={24} />,
    title: "System Design",
    desc: "Scalable architecture basics, CRUD operations, Clean Code principles",
    color: "from-indigo-500/20 to-emerald-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4"
          >
            Technical Stack
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl">Expertise & Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10`} />
              <div className="glass p-8 rounded-2xl h-full transition-all duration-300 group-hover:border-emerald-500/30 group-hover:translate-y-[-4px]">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
