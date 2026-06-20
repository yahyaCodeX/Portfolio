import { motion } from "motion/react";
import { GraduationCap, Code, Download, CheckCircle2, Lightbulb, Layers, Server, Database, GitBranch, Brain, Terminal, Code2 } from "lucide-react";

const techStack = [
  { label: "Java", color: "#f89820" },
  { label: "Spring Boot", color: "#6db33f" },
  { label: "MySQL", color: "#4479a1" },
  { label: "MongoDB", color: "#47a248" },
  { label: "REST APIs", color: "#22d3ee" },
  { label: "Microservices", color: "#a78bfa" },
  { label: "Git", color: "#f05032" },
  { label: "Blockchain", color: "#f5a623" },
];

const strengths = [
  { icon: <CheckCircle2 size={15} />, label: "Clean, Maintainable Code", color: "text-emerald-400" },
  { icon: <Layers size={15} />, label: "Scalable Architecture Design", color: "text-cyan-400" },
  { icon: <Lightbulb size={15} />, label: "AI-Driven Automation", color: "text-violet-400" },
  { icon: <Code size={15} />, label: "Backend API Engineering", color: "text-emerald-400" },
];

const statCards = [
  { value: "20+", label: "Projects Built", icon: <Code2 size={18} />, color: "#10b981" },
  { value: "3+", label: "Years Coding", icon: <Terminal size={18} />, color: "#22d3ee" },
  { value: "Final", label: "Year Engineer", icon: <GraduationCap size={18} />, color: "#a78bfa" },
  { value: "Java", label: "Primary Language", icon: <Server size={18} />, color: "#f89820" },
  { value: "2", label: "Databases Mastered", icon: <Database size={18} />, color: "#47a248" },
  { value: "Git", label: "Version Control", icon: <GitBranch size={18} />, color: "#f05032" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <span className="text-gradient font-mono text-xs tracking-widest uppercase mb-3 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 sm:mb-6 leading-[1.1]">
            Engineering Scalable{" "}
            <span className="text-gradient-shimmer">Backend Solutions</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
            I'm a final-year Computer Systems Engineering student at <span className="text-gray-200 font-medium">Mehran University of Engineering & Technology</span>, Jamshoro.
            My focus lies in backend development — specifically Java and Spring Boot — to craft robust, scalable microservices.
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Beyond backend engineering, I'm deeply interested in <span className="text-violet-400 font-medium">AI-based automation</span> and smart assistant development —
            bridging the gap between complex system design and intelligent user-centric features.
          </p>

          {/* What I Bring */}
          <div className="mb-7 sm:mb-8">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">What I Bring</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {strengths.map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 group">
                  <span className={`${s.color} shrink-0`}>{s.icon}</span>
                  <span className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-white transition-colors">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick info row */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-7 sm:mb-8">
            <div className="flex items-center gap-3 text-gray-300 group">
              <div
                className="p-2.5 rounded-xl text-emerald-400 shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(34, 211, 238, 0.08))' }}
              >
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-200">MUET, Jamshoro</p>
                <p className="text-[10px] text-gray-500">2022 – Present</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300 group">
              <div
                className="p-2.5 rounded-xl text-cyan-400 shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(139, 92, 246, 0.08))' }}
              >
                <Code size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-200">Java & Spring Boot</p>
                <p className="text-[10px] text-gray-500">Core Stack</p>
              </div>
            </div>
          </div>

          {/* Tech stack chips */}
          <div className="mb-7 sm:mb-8">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.label}
                  className="px-3 py-1.5 rounded-full text-[11px] font-mono font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: `${tech.color}18`,
                    border: `1px solid ${tech.color}40`,
                    color: tech.color,
                  }}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>

          <a
            href="/resume.pdf"
            download="Muhammad_Yahya_Siddiqui_Resume.pdf"
            className="download-btn inline-flex text-sm sm:text-base"
            id="download-resume-about"
          >
            <Download size={16} className="shrink-0" />
            Download My Resume
          </a>
        </motion.div>

        {/* RIGHT: Stats & Info Visual (no duplicate photo) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            {/* Ambient glow */}
            <div
              className="absolute inset-0 -z-10 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.1), rgba(34,211,238,0.06), transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(1.2)',
              }}
            />

            {/* Heading card */}
            <div className="gradient-border rounded-3xl p-6 sm:p-8 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,211,238,0.1))' }}>
                  <Brain size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-100">Muhammad Yahya Siddiqui</p>
                  <p className="text-[11px] text-emerald-400 font-mono">Backend Java Developer</p>
                </div>
              </div>

              {/* Inline code snippet flavour */}
              <div
                className="rounded-xl p-4 font-mono text-xs leading-relaxed"
                style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-400">developer</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-gray-400">{"{"}</span>
                <br />
                <span className="ml-4 text-gray-500">name:</span>{" "}
                <span className="text-emerald-400">"Yahya Siddiqui"</span><span className="text-gray-600">,</span>
                <br />
                <span className="ml-4 text-gray-500">role:</span>{" "}
                <span className="text-emerald-400">"Backend Engineer"</span><span className="text-gray-600">,</span>
                <br />
                <span className="ml-4 text-gray-500">stack:</span>{" "}
                <span className="text-cyan-400">["Java", "Spring Boot", "MySQL"]</span><span className="text-gray-600">,</span>
                <br />
                <span className="ml-4 text-gray-500">available:</span>{" "}
                <span className="text-emerald-400">true</span>
                <br />
                <span className="text-gray-400">{"}"}</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {statCards.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="gradient-border rounded-2xl p-3 sm:p-4 text-center group hover:translate-y-[-3px] transition-transform duration-300 cursor-default"
                  style={{ background: `${stat.color}08` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${stat.color}18`, color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <div className="font-extrabold text-sm sm:text-base leading-tight" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-600 font-mono uppercase tracking-wide mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
