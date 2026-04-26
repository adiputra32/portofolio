import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import {
  Electrolize,
  Inter,
  Orbitron,
  Press_Start_2P,
  Tiny5,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const electrolize = Electrolize({
  weight: "400",
  variable: "--font-electrolize-face",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  weight: "400",
  variable: "--font-tiny5",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron-face",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start-2p",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Classic-Futuristic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${electrolize.variable} ${tiny5.variable} ${orbitron.variable} ${pressStart2P.variable} h-full antialiased no-scrollbar`}
      suppressHydrationWarning
    >
      <body className="min-h-screen w-screen max-w-[100vw] flex flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
