import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import HeroSection from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Services from "../components/Sections/Services";
import Testimonials from "../components/Sections/Testimonials";
import Contact from "../components/Sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <HeroSection />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
