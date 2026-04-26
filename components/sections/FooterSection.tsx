import { FaCaretDown, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import PixelIcon from "@/components/ui/pixel-icon";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";

const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://github.com/adiputra32",
    icon: FaLinkedin,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://github.com/adiputra32",
    icon: FaInstagram,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/adiputra32",
    icon: FaGithub,
  },
];

const FooterSection = () => {
  const [buttonHovered, setButtonHovered] = useState<string | null>();

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
            {SOCIAL_LINKS.map(({ id, label, href, icon }) => {
              const isHovered = buttonHovered === id;

              return (
                <div
                  key={id}
                  className="flex items-center gap-2 w-fit text-lg font-press-start uppercase leading-loose"
                  onMouseEnter={() => setButtonHovered(id)}
                  onMouseLeave={() => setButtonHovered(null)}
                >
                  {isHovered && <span>[</span>}
                  <PixelIcon icon={icon} size={24} pixelSize={2} />
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-press-start uppercase leading-loose"
                  >
                    {label}
                  </a>
                  {isHovered && <span>]</span>}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FooterSection;
