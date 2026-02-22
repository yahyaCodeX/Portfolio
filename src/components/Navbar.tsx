import { motion } from "motion/react";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass px-8 py-3 rounded-full flex items-center gap-8">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold group cursor-pointer">
          <Terminal size={20} className="group-hover:animate-pulse" />
          <span className="relative">
            <span className="group-hover:animate-[glitch_0.3s_ease-in-out_infinite] inline-block">DEV_PORTFOLIO</span>
            <span className="absolute top-0 left-0 -z-10 text-red-500 opacity-0 group-hover:opacity-50 group-hover:animate-[glitch_0.3s_ease-in-out_infinite_reverse] inline-block">DEV_PORTFOLIO</span>
            <span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-0 group-hover:opacity-50 group-hover:animate-[glitch_0.3s_ease-in-out_infinite_0.1s] inline-block">DEV_PORTFOLIO</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
          <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:yahyasid45@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
