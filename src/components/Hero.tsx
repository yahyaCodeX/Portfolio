import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 sm:px-12 text-center z-10">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex flex-col items-center relative z-20"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-brand-dark mb-2">
          Hi I'm Yahya
        </h1>
        <h2 className="text-6xl sm:text-8xl md:text-[110px] font-serif italic text-brand-dark leading-[0.9] tracking-tight">
          Backend Engineer
        </h2>
      </motion.div>

      {/* Profile & Floating Elements */}
      <div className="relative w-full max-w-5xl mx-auto mt-8 sm:mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between h-auto md:h-[400px]">
        
        {/* Left Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute left-0 top-1/4 hidden md:flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 z-30"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
          </span>
          <span className="text-sm font-medium text-brand-dark">Available for new opportunities</span>
        </motion.div>

        {/* Center Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative z-10 w-[280px] h-[360px] md:w-[340px] md:h-[440px] mx-auto rounded-[40px] overflow-hidden"
        >
          {/* Using a placeholder mimicking the clean portrait style if real one isn't available, but we use the existing profile picture */}
          <img 
            src="/profile-photo.jpeg" 
            alt="Yahya Siddiqui" 
            className="w-full h-full object-cover object-top filter contrast-105 saturate-0 mix-blend-multiply opacity-90"
            style={{ objectPosition: 'center 20%' }}
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"; e.currentTarget.style.mixBlendMode = "normal"; e.currentTarget.style.filter = "none"; }}
          />
        </motion.div>

        {/* Right Text */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute right-0 top-1/3 hidden md:block max-w-[220px] text-left z-30"
        >
          <p className="text-sm text-brand-dark/80 leading-relaxed font-medium">
            Passionate about creating robust, scalable backend architectures that drive enterprise applications.
          </p>
        </motion.div>
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 z-30"
      >
        <a href="mailto:yahyasid45@gmail.com" className="pill-btn pill-btn-dark inline-flex items-center gap-2 px-8 py-4 text-base">
          Get in Touch <ArrowRight size={18} />
        </a>
      </motion.div>

    </section>
  );
}
