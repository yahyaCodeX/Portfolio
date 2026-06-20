import { motion } from "motion/react";
import { Terminal, ArrowUpRight, Download, Github, Linkedin, Mail, Clock, Send } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useState } from "react";

export default function Footer() {
  const [formState, setFormState] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(formState.message);
    window.location.href = `mailto:yahyasid45@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative gradient-border rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
          {/* Subtle inner glow */}
          <div
            className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] opacity-30"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(34,211,238,0.03), rgba(139,92,246,0.04))',
            }}
          />

          <div className="relative p-8 sm:p-12 md:p-16 lg:p-20">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,211,238,0.1))' }}>
                  <Terminal size={28} className="text-emerald-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6">
                  Let's build the{" "}
                  <br className="hidden sm:block" />
                  next{" "}
                  <span className="text-gradient-shimmer">innovation.</span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
                  I'm open to backend engineering roles, freelance projects, and collaboration opportunities.
                </p>
              </motion.div>
            </div>

            {/* Two columns: CTA + Quick Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 mb-14 sm:mb-16"
            >
              {/* LEFT: CTA buttons + social cards */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4">
                  <MagneticButton
                    onClick={() => (window.location.href = "mailto:yahyasid45@gmail.com")}
                    className="btn-primary w-full sm:w-auto text-base group"
                  >
                    Get in Touch
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </MagneticButton>
                  <a
                    href="/resume.pdf"
                    download="Muhammad_Yahya_Siddiqui_Resume.pdf"
                    className="download-btn w-full sm:w-auto text-base"
                    id="download-resume-footer"
                  >
                    <Download size={16} className="shrink-0" />
                    Resume
                  </a>
                </div>

                {/* Response time badge */}
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full glass w-fit">
                  <Clock size={13} className="text-emerald-400" />
                  <span className="text-xs font-mono text-gray-400">Avg. response time: <span className="text-emerald-400 font-bold">24 hours</span></span>
                </div>

                {/* Social cards */}
                <div className="flex flex-col gap-3 mt-1">
                  <a
                    href="https://github.com/YahyaCodeX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-4 py-3 rounded-2xl glass transition-all duration-200 hover:bg-white/[0.04] hover:border-white/15"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Github size={18} className="text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-200">@YahyaCodeX</p>
                      <p className="text-[10px] text-gray-600 font-mono">github.com</p>
                    </div>
                    <ArrowUpRight size={14} className="text-gray-600 group-hover:text-emerald-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-4 py-3 rounded-2xl glass transition-all duration-200 hover:bg-cyan-500/[0.04] hover:border-cyan-500/20"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-cyan-500/10 group-hover:bg-cyan-500/15 transition-colors">
                      <Linkedin size={18} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-200">Muhammad Yahya Siddiqui</p>
                      <p className="text-[10px] text-gray-600 font-mono">linkedin.com</p>
                    </div>
                    <ArrowUpRight size={14} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href="mailto:yahyasid45@gmail.com"
                    className="group flex items-center gap-4 px-4 py-3 rounded-2xl glass transition-all duration-200 hover:bg-violet-500/[0.04] hover:border-violet-500/20"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-violet-500/10 group-hover:bg-violet-500/15 transition-colors">
                      <Mail size={18} className="text-violet-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-200">yahyasid45@gmail.com</p>
                      <p className="text-[10px] text-gray-600 font-mono">Direct email</p>
                    </div>
                    <ArrowUpRight size={14} className="text-gray-600 group-hover:text-violet-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* RIGHT: Quick message form */}
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Send a Quick Message</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-gray-600 block mb-1.5">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Jane Smith"
                      value={formState.name}
                      onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontFamily: 'inherit',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.08)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-gray-600 block mb-1.5">Message</label>
                    <textarea
                      placeholder="Hi Yahya, I'd love to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontFamily: 'inherit',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.08)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2.5 w-full"
                  >
                    {sent ? "✓ Opening Email Client" : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Footer bottom row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-12 border-t border-white/8">
              <div className="text-left">
                <span className="text-[10px] font-mono text-gradient block mb-3">SOCIAL</span>
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/YahyaCodeX" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/muhammad-yahya-siddiqui-97967327a" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">LinkedIn</a>
                </div>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-gradient block mb-3">CONTACT</span>
                <div className="flex flex-col gap-2">
                  <a href="mailto:yahyasid45@gmail.com" className="text-xs text-gray-500 hover:text-emerald-400 transition-colors break-all">yahyasid45@gmail.com</a>
                  <span className="text-xs text-gray-600">Jamshoro, Pakistan</span>
                </div>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-gradient block mb-3">EDUCATION</span>
                <span className="text-xs text-gray-500">MUET, Jamshoro</span>
                <span className="text-[10px] text-gray-600 block mt-1">Computer Systems Engineering</span>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-gradient block mb-3">EST.</span>
                <span className="text-xs text-gray-500">© 2026</span>
                <span className="text-[10px] text-gray-600 block mt-1">Muhammad Yahya Siddiqui</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] -z-10 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </footer>
  );
}
