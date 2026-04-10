import { motion, AnimatePresence } from "motion/react";
import { Terminal, Github, Linkedin, Mail, Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navItems = ["About", "Projects", "Skills", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-bg-dark/60" : ""
        }`}
      >
        <div className="glass px-4 md:px-8 py-3 rounded-full flex items-center gap-4 md:gap-8 w-full max-w-4xl mx-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold group cursor-pointer shrink-0">
            <Terminal size={18} className="group-hover:animate-pulse" />
            <span className="relative text-sm md:text-base">
              <span className="group-hover:animate-[glitch_0.3s_ease-in-out_infinite] inline-block">DEV_PORTFOLIO</span>
              <span className="absolute top-0 left-0 -z-10 text-red-500 opacity-0 group-hover:opacity-50 group-hover:animate-[glitch_0.3s_ease-in-out_infinite_reverse] inline-block">DEV_PORTFOLIO</span>
              <span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-0 group-hover:opacity-50 group-hover:animate-[glitch_0.3s_ease-in-out_infinite_0.1s] inline-block">DEV_PORTFOLIO</span>
            </span>
          </div>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6 shrink-0">
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

          {/* Mobile: Resume + Hamburger */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <a
              href="/resume.pdf"
              download="Muhammad_Yahya_Siddiqui_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-bg-dark text-xs font-bold rounded-full"
            >
              <Download size={14} />
              CV
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-emerald-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-gray-200 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yahyasid45@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
