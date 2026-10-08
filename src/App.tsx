import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Background from "./components/Background";
import BackToTop from "./components/BackToTop";
import AIChatWidget from "./components/AIChatWidget";

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-emerald-500/30">
      <Background />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
      
      <BackToTop />
      <AIChatWidget />
    </main>
  );
}
