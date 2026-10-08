import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 sm:px-12 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-serif italic tracking-tight text-brand-dark"
      >
        Yahya Siddiqui
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-brand-dark/70"
      >
        <span className="w-4 h-4 rounded-full border border-brand-dark/20 flex items-center justify-center">🏆</span>
        Top Rated Backend Developer
      </motion.div>

      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-gray-50 transition-colors shadow-sm"
        aria-label="Menu"
      >
        <Menu size={20} />
      </motion.button>
    </nav>
  );
}
