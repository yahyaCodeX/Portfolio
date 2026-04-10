import { motion, useInView } from "motion/react";
import { ChevronRight, Code2, Cpu, Globe, Download, ArrowDown } from "lucide-react";
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

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
}

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-mono mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            COMPUTER SYSTEMS ENGINEER
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 sm:mb-8 leading-[1.1]"
          >
            {isInView ? (
              <>
                Hi, I'm <span className="text-gradient">Yahya Siddiqui</span>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-4 text-gray-400 font-mono font-normal">
                  <Typewriter text="Backend Java & Spring Boot Developer" />
                </div>
              </>
            ) : (
              "Muhammad Yahya Siddiqui"
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Final-year Computer Systems Engineering student at Mehran University. 
            Passionate about building scalable backend architectures and 
            intelligent automation systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <MagneticButton 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-bg-dark font-bold rounded-full hover:bg-emerald-400 transition-colors group text-sm sm:text-base"
            >
              View Projects
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </MagneticButton>
            
            {/* Download Resume — HIGH VISIBILITY */}
            <a 
              href="/resume.pdf" 
              download="Muhammad_Yahya_Siddiqui_Resume.pdf"
              className="download-btn w-full sm:w-auto text-sm sm:text-base"
              id="download-resume-hero"
            >
              <Download size={20} className="shrink-0" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* 3D Floating Elements — hidden on mobile for performance */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] opacity-20 hidden lg:block"
      >
        <div className="p-8 glass rounded-2xl rotate-12 glow-emerald">
          <Code2 size={48} className="text-emerald-400" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] opacity-20 hidden lg:block"
      >
        <div className="p-8 glass rounded-2xl -rotate-12 glow-emerald">
          <Cpu size={48} className="text-emerald-400" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        className="absolute top-[60%] right-[15%] opacity-10 hidden lg:block"
      >
        <div className="p-6 glass rounded-full glow-emerald">
          <Globe size={32} className="text-emerald-400" />
        </div>
      </motion.div>
    </section>
  );
}
