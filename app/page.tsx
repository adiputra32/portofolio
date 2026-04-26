"use client";

import TorchParticles from "@/components/animations/torch-particles";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import FooterSection from "@/components/sections/FooterSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ReferrerSection from "@/components/sections/ReferrerSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <main className="relative w-7xl max-w-[100vw] mx-auto">
      <TorchParticles
        particleCount={20}
        speeds={[10, 15, 25]}
        sizes={[8, 10, 12]}
      />
      <Header />

      <div className="relative space-y-4 px-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <ReferrerSection />
        <FooterSection />
      </div>

      <Footer />
    </main>
  );
}
