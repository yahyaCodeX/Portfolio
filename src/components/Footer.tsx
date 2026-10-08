import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#FAFAF9] border-t border-gray-200 z-10 relative">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-serif italic text-brand-dark mb-6 text-center">
          Let's build something great.
        </h2>
        
        <div className="flex gap-4 mb-10">
          <a href="https://github.com/YahyaCodeX" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-gray-50 hover:scale-105 transition-all shadow-sm">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/yahyasiddiqui" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-gray-50 hover:scale-105 transition-all shadow-sm">
            <Linkedin size={20} />
          </a>
          <a href="mailto:yahyasid45@gmail.com" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-gray-50 hover:scale-105 transition-all shadow-sm">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-brand-dark/40 text-xs text-center font-medium">
          © {new Date().getFullYear()} Yahya Siddiqui. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
