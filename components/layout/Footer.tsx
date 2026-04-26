"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { PixelArrowUpIcon } from "../icons/pixel-icons";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-7xl max-w-[100vw] fixed bottom-0 h-[8vh] z-50 px-4">
      <span className="text-[10px] font-press-start font-normal uppercase">
        DESIGN INPIRED BY{" "}
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

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="border-4 border-foreground dark:border-foreground rounded-none size-10"
        >
          <PixelArrowUpIcon className="size-7" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
