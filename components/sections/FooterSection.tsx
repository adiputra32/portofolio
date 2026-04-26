"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import PixelIcon from "@/components/ui/pixel-icon";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SOCIAL_LINKS } from "@/data/social-links";
import { Dictionary } from "@/lib/get-dictionary";

interface FooterSectionProps {
  dict: Dictionary;
}

const FooterSection = ({ dict }: FooterSectionProps) => {
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
          <p className="font-press-start text-md font-bold leading-loose uppercase mb-4">
            Adi
          </p>

          <p className="font-press-start text-md leading-loose uppercase mb-4">
            {dict.footer.greetings}
          </p>

          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map(({ id, label, href, icon }) => {
              const isHovered = buttonHovered === id;

              return (
                <div
                  key={id}
                  className="flex items-center gap-2 w-fit text-md font-press-start uppercase leading-loose"
                  onMouseEnter={() => setButtonHovered(id)}
                  onMouseLeave={() => setButtonHovered(null)}
                >
                  {isHovered && <span>[</span>}
                  <PixelIcon icon={icon} size={24} pixelSize={2} />
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-md font-press-start uppercase leading-loose"
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
