import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ChevronRight, Code2, Cpu, Globe } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useRef, useState, useEffect } from "react";

function Typewriter({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
}

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            COMPUTER SYSTEMS ENGINEER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
          >
            {isInView ? (
              <>
                Hi, I'm <span className="text-gradient">Yahya Siddiqui</span> <br />
                <div className="text-3xl md:text-4xl mt-4 text-gray-400 font-mono font-normal">
                  <Typewriter text="Backend Java & Spring Boot Developer | AI Enthusiast" />
                </div>
              </>
            ) : (
              "Muhammad Yahya Siddiqui"
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Final-year Computer Systems Engineering student at Mehran University. 
            Passionate about building scalable backend architectures and 
            intelligent automation systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-emerald-500 text-bg-dark font-bold rounded-full hover:bg-emerald-400 transition-colors group"
            >
              View Projects
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </MagneticButton>
            
            <a 
              href="/resume.pdf" 
              download="Muhammad_Yahya_Siddiqui_Resume.pdf"
              className="px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/5 transition-colors glow-emerald"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Floating Elements (Subtle Depth) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[20%] left-[10%] opacity-20 hidden lg:block"
      >
        <div className="p-8 glass rounded-2xl rotate-12 glow-emerald">
          <Code2 size={48} className="text-emerald-400" />
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[20%] right-[10%] opacity-20 hidden lg:block"
      >
        <div className="p-8 glass rounded-2xl -rotate-12 glow-emerald">
          <Cpu size={48} className="text-emerald-400" />
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[60%] right-[15%] opacity-10 hidden lg:block"
      >
        <div className="p-6 glass rounded-full glow-emerald">
          <Globe size={32} className="text-emerald-400" />
        </div>
      </motion.div>
    </section>
  );
}
