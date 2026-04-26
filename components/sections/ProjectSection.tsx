const ProjectSection = () => {
  return (
    <section id="projects" className="min-h-screen mx-auto pt-[15vh]">
      <div className="flex flex-col h-full gap-12">
        <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-4">
          PROJECTS_
        </h1>

        <div className="grid grid-cols-2 gap-24 min-h-[50vh]">
          <div className="flex flex-col justify-center gap-4 text-right ml-auto max-w-4/5">
            <h2 className="text-2xl font-inter font-black uppercase tracking-wider">
              1. Payroll System
            </h2>
            <p className="text-xl font-inter font-semibold tracking-wide">
              A centralized payroll management system built with Laravel for an
              outsourcing agency. The application streamlines monthly salary
              processing and financial tracking for outsourced employees
              deployed across multiple client companies, ensuring accurate and
              efficient payroll operations.
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
              2. B2B Contract Management System
            </h2>
            <p className="text-xl font-inter font-semibold tracking-wide">
              A web-based contract management system built to handle corporate
              agreements and amendments with external partners. Developed as an
              extension to the existing payroll application, this platform
              digitalizes traditional paper-based workflows, significantly
              reducing manual administrative tasks and accelerating the contract
              management lifecycle.
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
              3. Public Disaster Report
            </h2>
            <p className="text-xl font-inter font-semibold tracking-wide">
              A mobile application that empowers users to report natural and
              social disasters in specific areas. Authorized responders can
              verify these reports and coordinate emergency mitigation efforts,
              while the platform provides all users with a live, real-time
              timeline to track incident updates and ongoing responses.
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
