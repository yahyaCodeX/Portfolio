import { motion } from "motion/react";
import { Terminal, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[3rem] flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Terminal size={48} className="text-emerald-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
              Let's build the <br />
              next <span className="text-gradient">innovation.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton 
              onClick={() => window.location.href = 'mailto:yahyasid45@gmail.com'}
              className="px-12 py-6 bg-emerald-500 text-bg-dark font-bold rounded-full hover:bg-emerald-400 transition-all text-xl group"
            >
              Get in Touch
              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
            </MagneticButton>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full pt-20 border-t border-white/10">
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-4">SOCIAL</span>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-4">CONTACT</span>
              <div className="flex flex-col gap-2">
                <a href="mailto:yahyasid45@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">yahyasid45@gmail.com</a>
                <span className="text-sm text-gray-400">Jamshoro, Pakistan</span>
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-4">EDUCATION</span>
              <span className="text-sm text-gray-400">MUET, Jamshoro</span>
              <span className="text-xs text-gray-500 block mt-1">Computer Systems Engineering</span>
            </div>
            <div className="text-left">
              <span className="text-xs font-mono text-emerald-500 block mb-4">EST.</span>
              <span className="text-sm text-gray-400">© 2026 MUHAMMAD YAHYA</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[120px] -z-10 rounded-full" />
    </footer>
  );
}
