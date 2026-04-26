"use client";

import { useState } from "react";
import {
  PixelMoonIcon,
  PixelSpeakerOffIcon,
  PixelSpeakerOnIcon,
  PixelSunIcon,
} from "../icons/pixel-icons";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isSoundOn, setSoundOn] = useState(true);
  const [language, setLanguage] = useState("EN");

  return (
    <header className="flex justify-between items-center gap-4 fixed w-7xl max-w-[100vw] h-[14vh] z-50 px-4">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-press-start space-x-4">
          <span>ADI</span>
          <span className="bg-foreground text-background pl-2 pr-1 pt-2 pb-1">
            PORTFOLIO
          </span>
        </h1>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="border-4 border-foreground dark:border-foreground rounded-none size-10 cursor-pointer hover:scale-110"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? (
              <PixelMoonIcon className="size-7" />
            ) : (
              <PixelSunIcon className="size-7" />
            )}
          </Button>
          <Button
            variant="outline"
            className="border-4 border-foreground dark:border-foreground rounded-none size-10 cursor-pointer hover:scale-110"
            onClick={() => {
              setSoundOn(!isSoundOn);
            }}
          >
            {isSoundOn ? (
              <PixelSpeakerOnIcon className="size-7" />
            ) : (
              <PixelSpeakerOffIcon className="size-7" />
            )}
          </Button>
          <Button
            variant="outline"
            className="border-4 border-foreground dark:border-foreground rounded-none font-press-start font-bold size-10 cursor-pointer hover:scale-110 text-xs tracking-wider"
            onClick={() => {
              setLanguage(language === "ID" ? "EN" : "ID");
            }}
          >
            {language}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
