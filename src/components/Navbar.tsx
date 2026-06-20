import { motion, AnimatePresence } from "motion/react";
import { Terminal, Github, Linkedin, Mail, Menu, X, Download, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-5 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-bg-dark/60" : ""
        }`}
      >
        <div className={`glass-glow px-4 md:px-6 py-2.5 rounded-full flex items-center gap-4 md:gap-6 w-full max-w-5xl mx-4 transition-all duration-500 ${
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono font-bold group cursor-pointer shrink-0">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,211,238,0.1))' }}>
              <Terminal size={15} className="text-emerald-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="relative text-sm md:text-[15px]">
              <span className="text-gradient group-hover:animate-[glitch_0.3s_ease-in-out_infinite] inline-block">YS.DEV</span>
            </span>
          </div>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-200 relative group px-3 py-1.5 rounded-lg ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Social icons with glow */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-3">
              <a
                href="https://github.com/YahyaCodeX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/8 transition-all duration-200 group"
                title="GitHub"
              >
                <Github size={16} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 group"
                title="LinkedIn"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:yahyasid45@gmail.com"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200 group"
                title="Email"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Hire Me CTA */}
            <a
              href="mailto:yahyasid45@gmail.com"
              id="hire-me-navbar"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-bg-dark transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
            >
              <Zap size={12} />
              Hire Me
            </a>
          </div>

          {/* Mobile: CV + Hamburger */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
            <a
              href="/resume.pdf"
              download="Muhammad_Yahya_Siddiqui_Resume.pdf"
              className="flex items-center gap-1 px-3 py-1.5 text-bg-dark text-xs font-bold rounded-full"
              style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
            >
              <Download size={12} />
              CV
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="fixed inset-0 z-40 bg-bg-dark/97 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-extrabold text-gray-300 hover:text-emerald-400 transition-colors tracking-tight"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-5 mt-12 pt-8 border-t border-white/10"
            >
              <a href="https://github.com/YahyaCodeX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:yahyasid45@gmail.com" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Mail size={22} />
              </a>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              href="mailto:yahyasid45@gmail.com"
              className="mt-8 flex items-center gap-2 px-8 py-3 rounded-full text-bg-dark font-bold"
              style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
            >
              <Zap size={16} />
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
