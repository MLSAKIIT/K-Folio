import "../../components/Landing Page/landing.css";
import { useEffect, useState } from "react";
import Footer from "../../components/Landing Page/Footer";
import Hero from "../../components/Landing Page/Hero";
import LandingBackground from "../../components/Landing Page/LandingBackground";
import WhyKfolio from "../../components/Landing Page/whyKfolio";
import Navbar from "../../components/Landing Page/navbar";
import Features from "../../components/Landing Page/Features";
import Frames from "../../components/Landing Page/Frames";
import Testimonials from "../../components/Landing Page/Testimonials";



// LandingPage
// Orchestrates the landing page layout and tracks
// which section is currently visible for background effects.
export default function LandingPage() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[data-section]")
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target) {
          const name = visible.target.getAttribute("data-section");
          if (name) setActive(name);
        }
      },
      {
        threshold: [0.45, 0.6, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LandingBackground activeSection={active}>
        {/* Sticky navbar */}
        <Navbar />

        {/* Offset content for fixed navbar */}
        <div style={{ paddingTop: "7rem" }}>
          <Hero />
          <section data-section="frames">
  <Frames />
</section>
          <div style={{ all: "initial", display: "block", fontFamily: "inherit" }}>
    <Features />
  </div>
  <Testimonials />
  <WhyKfolio />
 </div>
      </LandingBackground>

      <Footer activeSection={active} />
    </>
  );
}



