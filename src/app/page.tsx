import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProjectsShowcase />
      <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
