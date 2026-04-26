import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import PixelIcon from "@/components/ui/pixel-icon";
import { motion } from "framer-motion";
import Image from "next/image";

const FooterSection = () => {
  return (
    <section id="footer" className="h-screen flex items-center justify-center">
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
            Hi again! How was the tour? Thank you for taking the time to scroll
            all the way down and explore my journey as a frontend developer. I
            truly appreciate it. If you&apos;re interested in working together
            or just want to connect, feel free to reach out through the links
            below. I&apos;d love to hear from you_
          </p>

          <div className="flex flex-col gap-2 my-4">
            <div className="flex items-center gap-2 w-fit border-b-2 border-background hover:border-foreground">
              <PixelIcon icon={FaLinkedin} size={24} pixelSize={2} />
              <a
                href="https://github.com/adiputra32"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-press-start uppercase leading-loose"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 w-fit border-b-2 border-background hover:border-foreground">
              <PixelIcon icon={FaInstagram} size={24} pixelSize={2} />
              <a
                href="https://github.com/adiputra32"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-press-start uppercase leading-loose"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-2 w-fit border-b-2 border-background hover:border-foreground">
              <PixelIcon icon={FaGithub} size={24} pixelSize={2} />
              <a
                href="https://github.com/adiputra32"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-press-start uppercase leading-loose"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FooterSection;
