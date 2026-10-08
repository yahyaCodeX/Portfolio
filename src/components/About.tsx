import { motion } from "motion/react";
import { GraduationCap, Code, CheckCircle2, Lightbulb, Layers, Server } from "lucide-react";

const strengths = [
  { icon: <CheckCircle2 size={16} />, label: "Clean, Maintainable Code" },
  { icon: <Layers size={16} />, label: "Scalable Architecture Design" },
  { icon: <Lightbulb size={16} />, label: "AI-Driven Automation" },
  { icon: <Code size={16} />, label: "Backend API Engineering" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative z-10 border-t border-b border-gray-100">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-serif italic text-brand-dark/60 mb-4 block">/ About Me</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-brand-dark mb-8 leading-tight">
              Engineering Scalable<br />Backend Solutions
            </h2>

            <p className="text-brand-dark/70 leading-relaxed mb-6">
              I'm a final-year Computer Systems Engineering student at <strong className="text-brand-dark font-semibold">Mehran University of Engineering & Technology</strong>.
              My focus lies in backend development — specifically Java and Spring Boot — to craft robust, scalable microservices.
            </p>
            <p className="text-brand-dark/70 leading-relaxed mb-10">
              Beyond backend engineering, I'm deeply interested in <strong className="text-brand-dark font-semibold">AI-based automation</strong> and smart assistant development — bridging the gap between complex system design and intelligent user-centric features.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-brand-green">{s.icon}</span>
                  <span className="text-sm font-medium text-brand-dark/80">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual/info boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card rounded-[32px] p-8 bg-gray-50/50 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-medium text-brand-dark mb-2">Academic Background</h3>
              <p className="text-sm text-brand-dark/60 mb-2">B.E. Computer Systems Engineering</p>
              <p className="text-xs text-brand-dark/40 font-mono">MUET, Jamshoro (2022 – Present)</p>
            </div>

            <div className="glass-card rounded-[32px] p-8 bg-gray-50/50 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-medium text-brand-dark mb-2">Core Expertise</h3>
              <p className="text-sm text-brand-dark/60">Java, Spring Boot, Microservices, REST APIs, System Architecture & Database Design.</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
