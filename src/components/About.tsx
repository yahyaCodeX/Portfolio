import { motion } from "motion/react";
import { GraduationCap, Code, Database, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            Engineering Scalable <br />
            <span className="text-gradient">Backend Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a final-year Computer Systems Engineering student at Mehran University of Engineering & Technology, Jamshoro. 
            My focus lies in backend development, specifically using Java and Spring Boot to create robust, 
            scalable microservices.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Beyond traditional backend engineering, I am deeply interested in AI-based automation and smart assistant development. 
            I strive to bridge the gap between complex system design and intelligent user-centric features.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <GraduationCap size={20} />
              </div>
              <span className="text-sm font-medium">MUET, Jamshoro</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Code size={20} />
              </div>
              <span className="text-sm font-medium">Java & Spring Boot</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
            <img 
              src="https://images.ctfassets.net/23aumh6u8s0i/4JFn93iA5DZgomgcIPJOPx/700a59ae9668acf22df959dcf45b409a/spring" 
              alt="Muhammad Yahya Siddiqui"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-2xl">
                <div className="text-emerald-400 font-bold text-2xl">Final Year</div>
                <div className="text-gray-500 text-xs uppercase font-mono">Engineering</div>
              </div>
              <div className="glass p-4 rounded-2xl">
                <div className="text-emerald-400 font-bold text-2xl">Backend</div>
                <div className="text-gray-500 text-xs uppercase font-mono">Specialization</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  );
}
