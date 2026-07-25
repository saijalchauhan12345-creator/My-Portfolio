import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import StatsCounter from "./sections/StatsCounter";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FloatingLinkedIn from "./sections/FloatingLinkedIn";
import ScrollToTop from "./sections/ScrollToTop";
import Loader from "./sections/Loader";
import CustomCursor from "./sections/CustomCursor";

export default function Home() {
  return (
    <main>
      <Loader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatsCounter />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      <FloatingLinkedIn />
      <ScrollToTop />
    </main>
  );
}