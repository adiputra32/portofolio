import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import PixelIcon from "@/components/ui/pixel-icon";

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-[15vh]">
      <div className="flex flex-col justify-center align-center gap-12">
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
  );
};

export default ContactSection;
