import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 sm:bottom-10 sm:right-10 z-[70] p-3 rounded-full transition-all duration-300 hover:translate-y-[-3px] group"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        boxShadow: '0 0 20px rgba(16, 185, 129, 0.08)',
      }}
      aria-label="Back to top"
    >
      <ArrowUp
        size={18}
        className="text-emerald-400 group-hover:text-cyan-400 transition-colors"
      />
    </button>
  );
}
