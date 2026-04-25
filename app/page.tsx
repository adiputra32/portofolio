"use client";

import Navigation from "@/components/layout/navigation";
import TorchParticles from "@/components/animations/torch-particles";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-4">
      <TorchParticles
        particleCount={10}
        speeds={[10, 15, 25]}
        sizes={[8, 10, 12]}
      />
      <Navigation />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
