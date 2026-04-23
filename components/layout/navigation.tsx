"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  PixelMoonIcon,
  PixelSpeakerOffIcon,
  PixelSpeakerOnIcon,
  PixelSunIcon,
} from "../icons/pixel-icons";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { href: "#about", label: "ABOUT", id: "about" },
  { href: "#experience", label: "EXPERIENCE", id: "experience" },
  { href: "#projects", label: "PROJECTS", id: "projects" },
];

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isSoundOn, setSoundOn] = useState(true);
  const [language, setLanguage] = useState("EN");
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredMenu, setHoveredMenu] = useState<string | undefined>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the overlapping entry that is intersecting
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            return;
          }

          setActiveSection("");
        });
      },
      {
        // Triggers when the section's top crosses the 20% mark from the top of the viewport
        rootMargin: "-20% 0px -80% 0px",
      },
    );

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      NAV_LINKS.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Add smooth scrolling to links manually to ensure perfect UX
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="flex justify-between items-center gap-4 sticky top-0 z-50 p-14">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-press-start space-x-4">
          <span>ADI</span>
          <span className="bg-black text-white pl-2 pr-1 pt-2 pb-1 dark:bg-white dark:text-black">
            PORTFOLIO
          </span>
        </h1>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(e) => handleScroll(e, link.id)}
              className={`text-base font-press-start relative flex items-center gap-2 hover:text-black hover:dark:text-white ${activeSection === link.id ? "text-black dark:text-white" : "text-gray-500"}`}
              onMouseEnter={() => setHoveredMenu(link.id)}
              onMouseLeave={() => setHoveredMenu(undefined)}
            >
              {activeSection === link.id || hoveredMenu === link.id
                ? `[${link.label}]`
                : link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="border-4 border-gray-500 text-gray-500 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white rounded-none size-10"
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
            className="border-4 border-gray-500 text-gray-500 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white rounded-none size-10"
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
            className="border-4 border-gray-500 text-gray-500 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white rounded-none font-press-start font-bold size-10 text-xs tracking-wider"
            onClick={() => {
              if (language !== "ID") {
                setLanguage("ID");
                return;
              }

              setLanguage("EN");
            }}
          >
            {language}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
