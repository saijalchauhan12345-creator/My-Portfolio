import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FloatingLinkedIn from "./sections/FloatingLinkedIn";
import ScrollToTop from "./sections/ScrollToTop";
import Loader from "./sections/Loader";

export default function Home() {
  return (
    <main>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <FloatingLinkedIn />
      <ScrollToTop />
    </main>
  );
}