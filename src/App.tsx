import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Background from "./components/Background";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-emerald-500/30">
      <Background />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <div className="section-divider max-w-4xl mx-auto" />
        <About />
        <div className="section-divider max-w-4xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-4xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-4xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-4xl mx-auto" />
        <Footer />
      </div>
      
      <BackToTop />

      {/* Scroll Progress Bar — aurora gradient */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-[60]">
        <div
          className="h-full w-0 animate-[scroll-progress_linear_both]"
          style={{ background: 'linear-gradient(90deg, #10b981, #22d3ee, #a78bfa)' }}
        />
      </div>
    </main>
  );
}
