import { type ReactNode } from "react";
import styles from "./landing.module.css";

// LandingBackground
// Wrapper component for the landing page sections. Provides the visual
// background for the Hero / Features / Testimonials sections and exposes
// `data-active` (via `activeSection`) so styles can react to the current
// visible section.
interface Props {
  children: ReactNode;
  activeSection?: string;
}

export default function LandingBackground({ children, activeSection }: Props) {
  return (
    <div className={styles.landingBg} data-active={activeSection ?? "hero"}>
      {children}
    </div>
  );
}
