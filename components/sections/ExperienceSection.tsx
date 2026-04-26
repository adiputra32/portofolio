"use client";

import { Dictionary } from "@/lib/get-dictionary";
import { MdSquare } from "react-icons/md";

interface ExperienceSectionProps {
  dict: Dictionary;
}

const ExperienceSection = ({ dict }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="min-h-screen flex flex-col pt-[15vh]">
      <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-12">
        {dict.experience.title}
      </h1>

      <div className="grid grid-cols-2 justify-between gap-4">
        {/* 1. Dua Digital */}
        <div className="col-span-2 flex flex-col justify-end border-8 border-foreground dark:border-foreground p-8 gap-1">
          <span className="text-4xl font-orbitron font-bold tracking-normal mb-4">
            0000001
          </span>
          <span className="text-9xl font-inter font-black tracking-wide uppercase">
            DUA DIGITAL
          </span>
          <span className="text-3xl font-orbitron font-black tracking-wide mb-4">
            Front-End Developer
          </span>
          <span className="text-xl font-orbitron font-bold tracking-wide">
            2024 - 2026
          </span>
          <div>
            <span className="inline text-xl text-background font-orbitron font-bold px-2 py-1 leading-8 items-center bg-foreground">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP / REACT</span>
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-4 mr-1" />
              <span>MOBILE APP / REACT NATIVE</span>
            </span>
          </div>
        </div>

        {/* 2. Jobseeker Company */}
        <div className="flex flex-col justify-end border-8 border-foreground dark:border-foreground p-8 gap-1">
          <span className="text-xl font-orbitron font-bold tracking-normal mb-2">
            0000010
          </span>
          <span className="text-4xl font-inter font-black tracking-wide uppercase">
            JOBSEEKER COMPANY
          </span>
          <span className="text-xl font-orbitron font-black tracking-wide mb-2">
            Front-End Developer
          </span>
          <span className="text-md font-orbitron font-bold tracking-wide">
            2022 - 2024
          </span>
          <div>
            <span className="inline text-md text-background font-orbitron font-bold px-2 py-1 leading-8 items-center bg-foreground">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
            </span>
          </div>
        </div>

        {/* 3. Diskominfo Tabanan */}
        <div className="flex flex-col justify-end border-8 border-foreground dark:border-foreground p-8 gap-1">
          <span className="text-xl font-orbitron font-bold tracking-normal mb-2">
            0000011
          </span>
          <span className="text-4xl font-inter font-black tracking-wide uppercase">
            Diskominfo Tabanan
          </span>
          <span className="text-xl font-orbitron font-black tracking-wide mb-2">
            Full-Stack Developer Internship
          </span>
          <span className="text-md font-orbitron font-bold tracking-wide">
            2020
          </span>
          <div>
            <span className="inline text-md text-background font-orbitron font-bold px-2 py-1 leading-8 items-center bg-foreground">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
            </span>
          </div>
        </div>

        {/* 4. Freelance */}
        <div className="flex flex-col justify-end border-8 border-foreground dark:border-foreground p-8 gap-1">
          <span className="text-xl font-orbitron font-bold tracking-normal mb-2">
            0000100
          </span>
          <span className="text-4xl font-inter font-black tracking-wide uppercase">
            FREELANCE
          </span>
          <span className="text-xl font-orbitron font-black tracking-wide mb-2">
            Full-Stack Developer
          </span>
          <span className="text-md font-orbitron font-bold tracking-wide">
            2020 - 2022
          </span>
          <div>
            <span className="inline text-md text-background font-orbitron font-bold px-2 py-1 leading-8 items-center bg-foreground">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-4 mr-1" />
              <span>MOBILE APP</span>
            </span>
          </div>
        </div>

        {/* 5. Research Assistant */}
        <div className="flex flex-col justify-end border-8 border-foreground dark:border-foreground p-8 gap-1">
          <span className="text-xl font-orbitron font-bold tracking-normal mb-2">
            0000101
          </span>
          <span className="text-4xl font-inter font-black tracking-wide uppercase">
            Research Assistant
          </span>
          <span className="text-xl font-orbitron font-black tracking-wide mb-2">
            Full-Stack Developer
          </span>
          <span className="text-md font-orbitron font-bold tracking-wide">
            2019
          </span>
          <div>
            <span className="inline text-md text-background font-orbitron font-bold px-2 py-1 leading-8 items-center bg-foreground">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-4 mr-1" />
              <span>CHATBOT</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
