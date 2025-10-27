// app/page.tsx
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Your other sections will go here */}
      {/* <div id="projects">...</div> */}
      {/* <div id="about">...</div> */}
      {/* <div id="contact">...</div> */}
    </main>
  );
}