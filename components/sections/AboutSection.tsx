"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import useSectionProgress from "../animations/scroll-progress";
import { useMotionValueEvent, useTransform, motion } from "framer-motion";

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

const AboutSection = () => {
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
      <div className="flex h-full items-center">
        <div className="flex-1 flex flex-col gap-4 text-center mx-auto">
          <h1 className="text-4xl font-press-start font-normal tracking-wide mb-4">
            WHO AM I?_
          </h1>
          <p className="text-2xl font-bold font-inter tracking-wide leading-relaxed">
            I'm Adi, with 5+ years of experience as Front-End Developer building
            web and mobile applications.
          </p>
          <p className="text-2xl font-bold font-inter tracking-wide leading-relaxed">
            I'm skilled in React, React Native, TypeScript, and Laravel, with
            experience developing scalable, multi-language systems and
            cross-platform mobile apps.
          </p>
          <p className="text-2xl font-bold font-inter tracking-wide leading-relaxed">
            Passionate about building intuitive, high-performance user
            interfaces and improving user experience through modern frontend
            technologies.
          </p>
        </div>

        <div className="flex-1 relative h-[80vh]">
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
