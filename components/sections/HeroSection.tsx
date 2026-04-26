"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/get-dictionary";

interface HeroSectionProps {
  dict: Dictionary;
}

const HeroSection = ({ dict }: HeroSectionProps) => {
  return (
    <section id="none" className="h-screen flex items-center justify-center">
      <motion.div className="w-full max-w-5xl">
        <Image
          src="/hero2.png"
          alt="hero"
          width={200}
          height={200}
          priority={true}
          className="mr-auto ml-12"
        />
        <div className="border-8 border-foreground dark:border-foreground p-6">
          <p className="font-press-start text-[12px] lg:text-lg font-bold leading-loose uppercase mb-4">
            Adi
          </p>
          <p className="font-press-start text-[12px] lg:text-lg leading-loose uppercase">
            {dict.hero.greetings}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
