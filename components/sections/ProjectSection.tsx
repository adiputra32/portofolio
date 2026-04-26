"use client";

import { Dictionary } from "@/lib/get-dictionary";

interface ProjectSectionProps {
  dict: Dictionary;
}

const ProjectSection = ({ dict }: ProjectSectionProps) => {
  return (
    <section id="projects" className="min-h-screen mx-auto pt-[15vh]">
      <div className="flex flex-col h-full gap-12">
        <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-4">
          {dict.project.title}
        </h1>

        <div className="grid grid-cols-2 gap-24 min-h-[50vh]">
          <div className="flex flex-col justify-center gap-4 text-right ml-auto max-w-4/5">
            <h2 className="text-2xl font-inter font-black uppercase tracking-wider">
              1. {dict.project.projects.payroll.title}
            </h2>
            <p className="text-xl font-inter font-semibold tracking-wide">
              {dict.project.projects.payroll.description}
            </p>
            <div>
              <span className="inline text-sm font-orbitron font-bold bg-foreground text-background tracking-wide px-2 py-1">
                Laravel + PHP + Bootstrap
              </span>
            </div>
          </div>
          <div className="border-8 border-black dark:border-white"></div>
        </div>

        <div className="grid grid-cols-2 gap-24 min-h-[50vh]">
          <div className="border-8 border-black dark:border-white"></div>
          <div className="flex flex-col justify-center gap-4 mr-auto max-w-4/5">
            <h2 className="text-2xl font-inter font-black uppercase tracking-wider">
              2. {dict.project.projects.contract.title}
            </h2>
            <p className="text-xl font-inter font-semibold tracking-wide">
              {dict.project.projects.contract.description}
            </p>
            <div>
              <span className="inline text-sm font-orbitron font-bold bg-foreground text-background tracking-wide px-2 py-1">
                Laravel + PHP + Bootstrap
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24 min-h-[50vh]">
          <div className="flex flex-col justify-center gap-4 text-right ml-auto max-w-4/5">
            <h2 className="text-2xl font-inter font-black uppercase tracking-wider">
              3. {dict.project.projects.disaster.title}
            </h2>
            <p className="text-xl font-inter font-semibold tracking-wide">
              {dict.project.projects.disaster.description}
            </p>
            <div>
              <span className="inline text-sm font-orbitron font-bold bg-foreground text-background tracking-wide px-2 py-1">
                Laravel + Android Studio + Firebase
              </span>
            </div>
          </div>
          <div className="border-8 border-black dark:border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
