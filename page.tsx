import Nav from "@/components/Nav";
import SignalThread from "@/components/SignalThread";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <SignalThread />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
