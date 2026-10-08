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
      className="fixed bottom-6 left-6 z-[70] p-3 rounded-full transition-all duration-300 hover:translate-y-[-3px] group bg-white border border-gray-200 shadow-md hover:shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp
        size={18}
        className="text-brand-dark/70 group-hover:text-brand-dark transition-colors"
      />
    </button>
  );
}
