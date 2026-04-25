import { MdSquare } from "react-icons/md";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-6xl max-w-6xl mx-auto flex flex-col pt-[15vh]"
    >
      <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-12">
        WORK EXPERIENCES_
      </h1>

      <div className="grid grid-cols-2 justify-between gap-4">
        {/* 1. Dua Digital */}
        <div className="col-span-2 flex flex-col justify-end border-8 border-black dark:border-white dark:hover:border-yellow-400 p-8 gap-1 hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10 group">
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
            <span className="inline text-xl text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:group-hover:bg-yellow-400 dark:text-black group-hover:bg-yellow-400 group-hover:text-white">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP / REACT</span>
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-2 mr-1" />
              <span>MOBILE APP / REACT NATIVE</span>
            </span>
          </div>
        </div>

        {/* 2. Jobseeker Company */}
        <div className="flex flex-col justify-end border-8 border-black dark:border-white dark:hover:border-blue-400 p-8 gap-1 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 group">
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
            <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:group-hover:bg-blue-400 dark:text-black group-hover:bg-blue-400 group-hover:text-white">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
            </span>
          </div>
        </div>

        {/* 3. Diskominfo Tabanan */}
        <div className="flex flex-col justify-end border-8 border-black dark:border-white dark:hover:border-green-400 p-8 gap-1 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10 group">
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
            <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:group-hover:bg-green-400 dark:text-black group-hover:bg-green-400 group-hover:text-white">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
            </span>
          </div>
        </div>

        {/* 4. Freelance */}
        <div className="flex flex-col justify-end border-8 border-black dark:border-white dark:hover:border-gray-400 p-8 gap-1 hover:border-gray-400 hover:text-gray-400 hover:bg-gray-400/10 group">
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
            <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:group-hover:bg-gray-400 dark:text-black group-hover:bg-gray-400 group-hover:text-white">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-2 mr-1" />
              <span>MOBILE APP</span>
            </span>
          </div>
        </div>

        {/* 5. Research Assistant */}
        <div className="flex flex-col justify-end border-8 border-black dark:border-white dark:hover:border-purple-400 p-8 gap-1 hover:border-purple-400 hover:text-purple-400 hover:bg-purple-400/10 group">
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
            <span className="inline text-md text-white font-orbitron font-bold px-1 py-1 leading-8 items-center bg-black dark:bg-white dark:group-hover:bg-purple-400 dark:text-black group-hover:bg-purple-400 group-hover:text-white">
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 mr-1" />
              <span>WEB APP</span>
              <MdSquare className="inline align-middle text-base size-4 pb-0.5 ml-2 mr-1" />
              <span>CHATBOT</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
