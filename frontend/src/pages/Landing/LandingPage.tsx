import { useEffect, useState } from "react";
import "../../components/Landing/landing.css";
import LandingBackground from "../../components/Landing/LandingBackground";
import WhyKfolio from "../../components/Landing/whyKfolio";
import Hero from "../../components/Landing/Hero";
import Frames from "../../components/Landing/Frames";
import Features from "../../components/Landing/Features";
import Testimonials from "../../components/Landing/Testimonials";
import Footer from "../../components/Landing/Footer";
import Navbar from "../../components/Landing/navbar";

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
          <Frames />
          <Features />
          <Testimonials />
          <WhyKfolio />
        </div>
      </LandingBackground>

      <Footer activeSection={active} />
    </>
  );
}



