import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-emerald-500/30">
      <CustomCursor />
      <Background />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500/10 z-[60]">
        <div className="h-full bg-emerald-500 w-0 animate-[scroll-progress_linear_both]" />
      </div>
    </main>
  );
}
