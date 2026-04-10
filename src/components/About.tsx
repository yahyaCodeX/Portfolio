import { motion } from "motion/react";
import { GraduationCap, Code, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 sm:mb-8">
            Engineering Scalable <br />
            <span className="text-gradient">Backend Solutions</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            I am a final-year Computer Systems Engineering student at Mehran University of Engineering & Technology, Jamshoro. 
            My focus lies in backend development, specifically using Java and Spring Boot to create robust, 
            scalable microservices.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Beyond traditional backend engineering, I am deeply interested in AI-based automation and smart assistant development. 
            I strive to bridge the gap between complex system design and intelligent user-centric features.
          </p>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                <GraduationCap size={20} />
              </div>
              <span className="text-xs sm:text-sm font-medium">MUET, Jamshoro</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                <Code size={20} />
              </div>
              <span className="text-xs sm:text-sm font-medium">Java & Spring Boot</span>
            </div>
          </div>

          {/* Download Resume — also visible in About section */}
          <a 
            href="/resume.pdf" 
            download="Muhammad_Yahya_Siddiqui_Resume.pdf"
            className="download-btn inline-flex text-sm sm:text-base"
            id="download-resume-about"
          >
            <Download size={18} className="shrink-0" />
            Download My Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="aspect-square glass rounded-3xl overflow-hidden relative group max-w-md mx-auto lg:max-w-none">
            {/* Profile Photo — full opacity, no fading */}
            <img 
              src="/profile-photo.jpeg"
              alt="Muhammad Yahya Siddiqui"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/profile-placeholder.svg";
              }}
            />
            {/* Subtle bottom gradient — only at the very bottom for text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg-dark/80 via-bg-dark/20 to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="glass p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md">
                <div className="text-emerald-400 font-bold text-lg sm:text-2xl">Final Year</div>
                <div className="text-gray-500 text-[10px] sm:text-xs uppercase font-mono">Engineering</div>
              </div>
              <div className="glass p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md">
                <div className="text-emerald-400 font-bold text-lg sm:text-2xl">Backend</div>
                <div className="text-gray-500 text-[10px] sm:text-xs uppercase font-mono">Specialization</div>
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
