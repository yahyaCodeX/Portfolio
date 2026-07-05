import { motion, useInView } from "motion/react";
import { ChevronRight, Download, ArrowDown, MapPin, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useRef, useState, useEffect } from "react";

const roles = [
  "Backend Java Developer",
  "Spring Boot Engineer",
  "Microservices Architect",
  "API Design Specialist",
];

function Typewriter({ roles }: { roles: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 55);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 28);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <span>
      {displayText}
      <span
        className="text-emerald-400"
        style={{ animation: "blink 1s step-end infinite" }}
      >
        |
      </span>
    </span>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col items-center gap-1 px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] cursor-default"
    >
      <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gradient">{value}</span>
      <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-32 sm:pb-40 md:pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* === LAYOUT: text left, avatar right on lg === */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* LEFT: Text content */}
            <div className="flex-1 text-center lg:text-left">

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-glow text-[10px] sm:text-xs font-mono mb-4 sm:mb-6"
              >
                <span
                  className="flex h-2 w-2 rounded-full bg-emerald-400"
                  style={{ animation: "available-pulse 2s ease-in-out infinite" }}
                />
                <span className="text-emerald-400 font-semibold tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-[1.05]"
              >
                Hi, I'm{" "}
                <span className="text-gradient-shimmer block mt-1">Yahya Siddiqui</span>
              </motion.h1>

              {/* Role Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-400 font-mono font-normal mb-5 sm:mb-6 min-h-[2rem]"
              >
                {isInView ? <Typewriter roles={roles} /> : roles[0]}
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-5 lg:justify-start justify-center"
              >
                <MapPin size={13} className="text-emerald-500" />
                <span>Jamshoro, Pakistan · Mehran University (CSE)</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                Final-year Computer Systems Engineer passionate about building scalable backend
                architectures with Java & Spring Boot. I bridge intelligent automation with
                clean, production-grade systems.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10 sm:mb-12"
              >
                <MagneticButton
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary w-full sm:w-auto text-sm sm:text-base group"
                >
                  <Sparkles size={16} className="group-hover:animate-spin" />
                  View My Work
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </MagneticButton>

                <a
                  href="/resume.pdf"
                  download="Muhammad_Yahya_Siddiqui_Resume.pdf"
                  className="download-btn w-full sm:w-auto text-sm sm:text-base"
                  id="download-resume-hero"
                >
                  <Download size={16} className="shrink-0" />
                  Download Resume
                </a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center lg:justify-start justify-center gap-1 pt-6 border-t border-white/5"
              >
                <StatCard value="20+" label="Projects" delay={0.75} />
                <div className="w-px h-8 bg-white/10" />
                <StatCard value="6+" label="Technologies" delay={0.8} />
                <div className="w-px h-8 bg-white/10" />
                <StatCard value="3+" label="Years Coding" delay={0.85} />
                <div className="w-px h-8 bg-white/10" />
                <StatCard value="Final" label="Year Grad" delay={0.9} />
              </motion.div>
            </div>

            {/* RIGHT: Profile photo with animated frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
              className="relative shrink-0"
            >
              {/* Profile card — rounded-square, clean gradient border */}
              <div className="relative w-[260px] sm:w-[300px] xl:w-[340px] mx-auto">

                {/* Gradient border wrapper — static, no spin */}
                <div
                  className="relative rounded-3xl p-[2px]"
                  style={{
                    background: 'linear-gradient(145deg, rgba(16,185,129,0.7) 0%, rgba(34,211,238,0.5) 40%, rgba(139,92,246,0.4) 70%, rgba(16,185,129,0.2) 100%)',
                  }}
                >
                  {/* Inner photo container */}
                  <div
                    className="rounded-[22px] overflow-hidden relative group"
                    style={{ background: '#060608' }}
                  >
                    <img
                      src="/profile-photo.jpeg"
                      alt="Muhammad Yahya Siddiqui"
                      className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105 block"
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/profile-placeholder.svg';
                      }}
                    />
                    {/* Subtle bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-bg-dark/60 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Soft ambient glow behind the card */}
                <div
                  className="absolute inset-0 rounded-3xl -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 60%, rgba(16,185,129,0.18), rgba(34,211,238,0.08), transparent 70%)',
                    filter: 'blur(28px)',
                    transform: 'scale(1.15) translateY(8px)',
                    animation: 'glow-pulse 4s ease-in-out infinite',
                  }}
                />

                {/* Floating "Spring Boot" badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-8 glass-glow rounded-2xl px-4 py-3 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,211,238,0.1))' }}>
                    <span className="text-emerald-400 text-sm font-bold">{"{}"}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Spring Boot</p>
                    <p className="text-[10px] text-gray-500 font-mono">Backend Expert</p>
                  </div>
                </motion.div>

                {/* Floating "Open to Work" badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -right-6 glass-glow rounded-2xl px-3 py-2 flex items-center gap-2"
                >
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" style={{ animation: "available-pulse 2s ease-in-out infinite" }} />
                  <span className="text-[11px] font-semibold text-emerald-400">Open to Work</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
