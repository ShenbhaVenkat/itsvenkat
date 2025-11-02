// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ExperienceSection/>
      {/* Your other sections will go here */}
      {/* <div id="projects">...</div> */}
      {/* <div id="about">...</div> */}
      {/* <div id="contact">...</div> */}
    </main>
  );
}