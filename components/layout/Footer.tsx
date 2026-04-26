"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { PixelArrowUpIcon } from "../icons/pixel-icons";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { Dictionary } from "@/lib/get-dictionary";

const MotionButton = motion.create(Button);

interface FooterProps {
  dict: Dictionary;
}

const Footer = ({ dict }: FooterProps) => {
  const { scrollY } = useScroll();
  const [showMoveToTop, setShowMoveToTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setShowMoveToTop(true);
    } else {
      setShowMoveToTop(false);
    }
  });

  const handleMoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex justify-between items-center w-7xl max-w-[100vw] fixed bottom-0 h-[8vh] z-50 px-4">
      <span className="text-[10px] font-press-start font-normal uppercase">
        {dict.miscellaneous.footer}
        <Link
          href="https://noeinoi.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold"
        >
          Harry Design
        </Link>
        .
      </span>

      <div className="flex items-center gap-2 h-10">
        <AnimatePresence>
          {showMoveToTop && (
            <MotionButton
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.5 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
              variant="outline"
              className="border-4 border-foreground dark:border-foreground rounded-none size-10 cursor-pointer hover:scale-110"
              onClick={handleMoveToTop}
            >
              <PixelArrowUpIcon className="size-7" />
            </MotionButton>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;
