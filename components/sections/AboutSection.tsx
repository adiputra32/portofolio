"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import useSectionProgress from "../animations/scroll-progress";
import { useMotionValueEvent, useTransform, motion } from "framer-motion";
import type { Dictionary } from "@/lib/get-dictionary";

const MotionImage = motion.create(Image);

const IMAGE = [
  "/walk-1.png",
  "/walk-2.png",
  "/walk-2a.png",
  "/walk-2b.png",
  "/walk-3.png",
  "/walk-4.png",
  "/walk-5.png",
  "/walk-6.png",
  "/walk-7.png",
  "/walk-8.png",
  "/walk-9.png",
  "/walk-10.png",
];

interface AboutSectionProps {
  dict: Dictionary;
}

const AboutSection = ({ dict }: AboutSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useSectionProgress(ref);
  const [imageIndex, setImageIndex] = useState(0);

  const scene = useTransform(scrollYProgress, [0, 1], [0, 11]);
  const x = useTransform(scene, [0, 9], ["30%", "10%"]);

  useMotionValueEvent(scene, "change", (current) => {
    setImageIndex(Math.round(current));
  });

  return (
    <section
      ref={ref}
      id="about"
      className="relative h-screen mx-auto overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row h-full items-center justify-center pt-20 lg:pt-0">
        <div className="flex-1 flex flex-col gap-4 text-center mx-auto">
          <h1 className="text-2xl md:text-4xl font-press-start font-normal tracking-wide mb-4">
            {dict.about.title}
          </h1>
          <p className="text-base md:text-2xl font-bold font-inter tracking-wide leading-relaxed">
            {dict.about.paragraph1}
          </p>
          <p className="text-base md:text-2xl font-bold font-inter tracking-wide leading-relaxed">
            {dict.about.paragraph2}
          </p>
          <p className="text-base md:text-2xl font-bold font-inter tracking-wide leading-relaxed">
            {dict.about.paragraph3}
          </p>
        </div>

        <div className="flex-1 relative h-[40vh] lg:h-[80vh] w-full">
          <MotionImage
            src={IMAGE[imageIndex]}
            alt="Me"
            fill
            sizes="50%"
            style={{
              objectFit: "contain",
              x,
            }}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
