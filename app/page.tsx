import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import TorchParticles from "@/components/animations/torch-particles";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import FooterSection from "@/components/sections/FooterSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ReferrerSection from "@/components/sections/ReferrerSection";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home() {
  const { dict, locale } = await getDictionary();

  return (
    <main className="relative w-7xl max-w-[100vw] mx-auto">
      <TorchParticles
        particleCount={15}
        speeds={[15, 35, 50]}
        sizes={[4, 6, 8]}
      />
      <Header locale={locale} />

      <div className="relative space-y-4 px-4">
        <HeroSection dict={dict} />
        <AboutSection dict={dict} />
        <ExperienceSection dict={dict} />
        <ProjectSection dict={dict} />
        <ReferrerSection dict={dict} />
        <FooterSection dict={dict} />
      </div>

      <Footer dict={dict} />
    </main>
  );
}
