import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="none" className="h-screen flex items-center justify-center">
      <motion.div className="w-5xl">
        <Image
          src="/hero2.png"
          alt="hero"
          width={200}
          height={200}
          priority={true}
          className="mr-auto ml-12"
        />
        <div className="border-8 border-foreground dark:border-foreground p-6">
          <p className="font-press-start text-lg leading-loose uppercase">
            Hi! Welcome to my virtual summary. I put this space together so you
            can get to know me better. I hope you enjoy the experience. Please
            scroll down to unlock the next level of my journey_
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
