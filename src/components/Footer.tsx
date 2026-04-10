import { motion } from "motion/react";
import { Terminal, ArrowUpRight, Download } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <Terminal size={40} className="text-emerald-500 mx-auto mb-4 sm:mb-6 sm:w-12 sm:h-12" />
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter mb-6 sm:mb-8">
              Let's build the <br />
              next <span className="text-gradient">innovation.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <MagneticButton 
              onClick={() => window.location.href = 'mailto:yahyasid45@gmail.com'}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-emerald-500 text-bg-dark font-bold rounded-full hover:bg-emerald-400 transition-all text-lg sm:text-xl group"
            >
              Get in Touch
              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={22} />
            </MagneticButton>

            {/* Download Resume — footer CTA */}
            <a 
              href="/resume.pdf" 
              download="Muhammad_Yahya_Siddiqui_Resume.pdf"
              className="download-btn w-full sm:w-auto text-base sm:text-lg"
              id="download-resume-footer"
            >
              <Download size={20} className="shrink-0" />
              Download Resume
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-20 w-full pt-12 sm:pt-20 border-t border-white/10">
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-3 sm:mb-4">SOCIAL</span>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-3 sm:mb-4">CONTACT</span>
              <div className="flex flex-col gap-2">
                <a href="mailto:yahyasid45@gmail.com" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors break-all">yahyasid45@gmail.com</a>
                <span className="text-xs sm:text-sm text-gray-400">Jamshoro, Pakistan</span>
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-3 sm:mb-4">EDUCATION</span>
              <span className="text-xs sm:text-sm text-gray-400">MUET, Jamshoro</span>
              <span className="text-[10px] sm:text-xs text-gray-500 block mt-1">Computer Systems Engineering</span>
            </div>
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-3 sm:mb-4">EST.</span>
              <span className="text-xs sm:text-sm text-gray-400">© 2026 MUHAMMAD YAHYA</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[120px] -z-10 rounded-full" />
    </footer>
  );
}
