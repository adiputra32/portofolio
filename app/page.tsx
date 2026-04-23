"use client";

import Navigation from "@/components/layout/navigation";
import { useEffect } from "react";
import { MdSquare } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import PixelIcon from "@/components/ui/pixel-icon";
import TorchParticles from "@/components/animations/torch-particles";

export default function Home() {
  return (
    <main className="relative">
      <TorchParticles
        particleCount={10}
        speeds={[10, 15, 25]}
        sizes={[8, 10, 12]}
      />
      <Navigation />

      <div className="flex flex-col gap-4">
        {/* hero section */}
        <section
          id="none"
          className="min-h-screen flex flex-col max-w-6xl mx-auto items-center pt-[10vh]"
        >
          <h2 className="text-6xl font-press-start tracking-wide mb-18">
            HI! I'M ADI
          </h2>
          <h3 className="text-6xl font-inter font-black text-center uppercase leading-12 mb-6">
            FRONT-END DEVELOPER
          </h3>
          <p className="text-4xl font-inter font-semibold text-gray-500 text-center uppercase leading-12 mb-4">
            I BUILD ENJOYABLE DIGITAL EXPERIENCES WITH A STRONG FOCUS ON
            PERFORMANCE, ACCESSIBILITY, AND SIMPLICITY.
          </p>
          <p className="text-4xl font-inter font-black text-center uppercase leading-12">
            MY GOAL IS TO DELIVER CLEAN, EFFICIENT, AND INTUITIVE CODE THAT
            BRINGS IDEAS TO LIFE. I CONTINUOUSLY LEARN NEW TECHNOLOGIES TO STAY
            CURRENT IN THIS FAST-MOVING FIELD.
          </p>
        </section>

        {/* about */}
        <section
          id="about"
          className="min-h-screen max-w-6xl mx-auto flex items-stretch justify-center pt-[15vh]"
        >
          <div className="flex-1 flex gap-4">
            <div className="flex-1 flex flex-col h-full gap-4">
              <h1 className="text-2xl font-press-start font-normal tracking-wide mb-4">
                WHO AM I?_
              </h1>
              <p className="text-xl font-inter font-bold tracking-wide">
                I'm Adi, with 5+ years of experience as Front-End Developer
                building web and mobile applications.
              </p>
              <p className="text-xl font-inter font-bold tracking-wide">
                I'm skilled in React, React Native, TypeScript, and Laravel,
                with experience developing scalable, multi-language systems and
                cross-platform mobile apps.
              </p>
              <p className="text-xl font-inter font-bold tracking-wide">
                Passionate about building intuitive, high-performance user
                interfaces and improving user experience through modern frontend
                technologies.
              </p>
            </div>
            <div className="flex-1 bg-gray-500/50"></div>
          </div>
        </section>

        {/* work experiences */}
        <section
          id="experience"
          className="min-h-screen w-6xl max-w-6xl mx-auto flex flex-col pt-[15vh]"
        >
          <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-12">
            WORK EXPERIENCES_
          </h1>

          <div className="grid grid-cols-2 justify-between gap-4">
            {/* 1. Dua Digital */}
            <div className="col-span-2 flex flex-col justify-end border-8 border-black dark:border-white p-8 gap-2 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10 group">
              <span className="text-4xl font-orbitron font-bold tracking-normal">
                0000001
              </span>
              <span className="text-9xl font-inter font-black tracking-wide mb-4 uppercase">
                DUA DIGITAL
              </span>
              <span className="text-xl font-orbitron font-bold tracking-wide">
                2024 - 2026
              </span>
              <div>
                <span className="inline text-xl text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:text-black">
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
                  <span>WEB APP / REACT</span>
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-2 mr-1" />
                  <span>MOBILE APP / REACT NATIVE</span>
                </span>
              </div>
            </div>

            {/* 2. Jobseeker Company */}
            <div className="flex flex-col justify-end border-8 border-black dark:border-white p-8 gap-2">
              <span className="text-xl font-orbitron font-bold tracking-normal">
                0000010
              </span>
              <span className="text-4xl font-inter font-black tracking-wide uppercase">
                JOBSEEKER COMPANY
              </span>
              <span className="text-md font-orbitron font-bold tracking-wide">
                2022 - 2024
              </span>
              <div>
                <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:text-black">
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
                  <span>WEB APP / LARAVEL</span>
                </span>
              </div>
            </div>

            {/* 3. Diskominfo Tabanan */}
            <div className="flex flex-col justify-end border-8 border-black dark:border-white p-8 gap-2">
              <span className="text-xl font-orbitron font-bold tracking-normal">
                0000011
              </span>
              <span className="text-4xl font-inter font-black tracking-wide uppercase">
                Diskominfo Tabanan
              </span>
              <span className="text-md font-orbitron font-bold tracking-wide">
                2020
              </span>
              <div>
                <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:text-black">
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
                  <span>WEB APP / LARAVEL</span>
                </span>
              </div>
            </div>

            {/* 4. Freelance */}
            <div className="flex flex-col justify-end border-8 border-black dark:border-white p-8 gap-2">
              <span className="text-xl font-orbitron font-bold tracking-normal">
                0000100
              </span>
              <span className="text-4xl font-inter font-black tracking-wide uppercase">
                FREELANCE
              </span>
              <span className="text-md font-orbitron font-bold tracking-wide">
                2020 - 2022
              </span>
              <div>
                <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:text-black">
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
                  <span>WEB APP / LARAVEL</span>
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-2 mr-1" />
                  <span>MOBILE APP / ANDROID STUDIO</span>
                </span>
              </div>
            </div>

            {/* 5. Research Assistant */}
            <div className="flex flex-col justify-end border-8 border-black dark:border-white p-8 gap-2">
              <span className="text-xl font-orbitron font-bold tracking-normal">
                0000101
              </span>
              <span className="text-4xl font-inter font-black tracking-wide uppercase">
                Research Assistant
              </span>
              <span className="text-md font-orbitron font-bold tracking-wide">
                2019
              </span>
              <div>
                <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:text-black">
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
                  <span>WEB APP / LARAVEL</span>
                  <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-2 mr-1" />
                  <span>CHATBOT / PYTHON / MYSQL</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section
          id="projects"
          className="min-h-screen max-w-6xl mx-auto pt-[15vh]"
        >
          <div className="flex flex-col h-full gap-12">
            <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-4">
              PROJECTS_
            </h1>

            <div className="grid grid-cols-2 gap-24 min-h-[50vh]">
              <div className="flex flex-col justify-center gap-4 text-right ml-auto max-w-4/5">
                <h2 className="text-2xl font-inter font-black uppercase tracking-wider">
                  1. Presension Web App
                </h2>
                <p className="text-xl font-inter font-medium">
                  A robust web application developed during the COVID-19
                  pandemic to digitalize and streamline school attendance.
                  Designed to provide a seamless digital solution for
                  administrators, teachers, and students to manage schedules and
                  track real-time online presence, significantly improving
                  operational efficiency.
                </p>
                <div>
                  <span className="inline text-sm font-orbitron font-bold bg-dark text-white tracking-wide px-2 py-1">
                    Laravel + PHP + Bootstrap
                  </span>
                </div>
              </div>
              <div className="bg-gray-500/50"></div>
            </div>

            <div className="grid grid-cols-2 gap-24 min-h-[50vh]">
              <div className="bg-gray-500/50"></div>
              <div className="flex flex-col justify-center gap-4 mr-auto max-w-4/5">
                <h2 className="text-2xl font-inter font-black uppercase tracking-wider">
                  2. Payroll System
                </h2>
                <p className="text-xl font-inter font-medium">
                  A centralized payroll management system built with Laravel for
                  an outsourcing agency. The application streamlines monthly
                  salary processing and financial tracking for outsourced
                  employees deployed across multiple client companies, ensuring
                  accurate and efficient payroll operations.
                </p>
                <div>
                  <span className="inline text-sm font-orbitron font-bold bg-black text-white tracking-wide px-2 py-1">
                    Laravel + PHP + Bootstrap
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-24 min-h-[50vh]">
              <div className="flex flex-col justify-center gap-4 text-right ml-auto max-w-4/5">
                <h2 className="text-2xl font-inter font-black uppercase tracking-wider">
                  3. B2B Contract Management System
                </h2>
                <p className="text-xl font-inter font-medium">
                  A web-based contract management system built to handle
                  corporate agreements and amendments with external partners.
                  Developed as an extension to the existing payroll application,
                  this platform digitalizes traditional paper-based workflows,
                  significantly reducing manual administrative tasks and
                  accelerating the contract management lifecycle.
                </p>
                <div>
                  <span className="inline text-sm font-orbitron font-bold bg-black text-white tracking-wide px-2 py-1">
                    Laravel + PHP + Bootstrap
                  </span>
                </div>
              </div>
              <div className="bg-gray-500/50"></div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section
          id="contact"
          className="min-h-screen max-w-6xl mx-auto pt-[15vh]"
        >
          <div className="flex flex-col justify-center align-center h-screen gap-12">
            <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-4">
              CONTACT_
            </h1>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {/* GitHub */}
              <a
                href="https://github.com/adiputra32"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center border-8 border-black dark:border-white p-12 w-64 md:w-72 aspect-square group hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10"
              >
                <PixelIcon
                  icon={FaGithub}
                  size={96}
                  pixelSize={6}
                  className="mb-8"
                />
                <span className="text-sm font-press-start uppercase tracking-widest">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adiputra32"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center border-8 border-black dark:border-white p-12 w-64 md:w-72 aspect-square group hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10"
              >
                <PixelIcon
                  icon={FaLinkedin}
                  size={96}
                  pixelSize={6}
                  className="mb-8"
                />
                <span className="text-sm font-press-start uppercase tracking-widest">
                  LinkedIn
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/adiputra32"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center border-8 border-black dark:border-white p-12 w-64 md:w-72 aspect-square group hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10"
              >
                <PixelIcon
                  icon={FaInstagram}
                  size={96}
                  pixelSize={6}
                  className="mb-8"
                />
                <span className="text-sm font-press-start uppercase tracking-widest">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
