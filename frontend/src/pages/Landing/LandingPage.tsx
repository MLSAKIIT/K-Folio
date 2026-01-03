import { useEffect, useState } from "react";
import Footer from "../../components/Landing Page/Footer";
import Hero from "../../components/Landing Page/Hero";
import LandingBackground from "../../components/Landing Page/LandingBackground";
import WhyKfolio from "../../components/Landing Page/whyKfolio";

// LandingPage
// Orchestrates the landing page layout. Uses an IntersectionObserver to
// detect which `section[data-section]` is most visible and writes the
// active key into state. That `active` value is passed to the background
// (and optionally footer) so styles can react to scrolling.
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
      { threshold: [0.45, 0.6, 0.8] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LandingBackground activeSection={active}>
        <Hero />
        <WhyKfolio />
      </LandingBackground>

      <Footer activeSection={active} />
    </>
  );
}
