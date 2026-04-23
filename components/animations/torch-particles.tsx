"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

// Config Defaults
const DEFAULT_COLORS = [
  "bg-black dark:bg-white",
  "bg-neutral-600 dark:bg-neutral-300",
  "bg-neutral-400 dark:bg-neutral-500",
];
const DEFAULT_SIZES = [4, 6, 8]; // pixels (Extra Small, Small, Normal)
const DEFAULT_SPEEDS = [20, 35, 50]; // pixels per second

interface ParticleConfig {
  id: number;
  color: string;
  size: number;
  speed: number;
  startX: number; // percentage 0-100
  startY: number; // percentage 50-100
  distance: number; // distance to travel upwards in vh
  delay: number; // start delay in seconds
}

function generateParticles(
  count: number,
  colors: string[],
  sizes: number[],
  speeds: number[],
): ParticleConfig[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: sizes[Math.floor(Math.random() * sizes.length)],
    speed: speeds[Math.floor(Math.random() * speeds.length)],
    startX: Math.random() * 100,
    startY: 50 + Math.random() * 50, // Between 50vh and 100vh
    distance: 20 + Math.random() * 20, // Travel 20-40vh up
    delay: Math.random() * 5, // 0 to 5s delay
  }));
}

const Particle = ({
  config,
  velocity,
}: {
  config: ParticleConfig;
  velocity: any;
}) => {
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const scaleY = useMotionValue(1);
  const originY = useMotionValue(0.5);

  const [vh, setVh] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Calculate 1vh in pixels safely on client
    setVh(window.innerHeight / 100);
    const handleResize = () => setVh(window.innerHeight / 100);
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setActive(true);
    }, config.delay * 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [config.delay]);

  useAnimationFrame((time, delta) => {
    if (!active || vh === 0) return;

    // velocity is positive when scrolling down, negative when scrolling up
    const vel = velocity.get();
    const threshold = 15; // Speed threshold to trigger stretch/pause

    // 1. Handle Smooth Stretch & Shrink based on scroll velocity
    let targetScale = 1;
    let targetOrigin = 0.5;

    if (vel > threshold) {
      // Scrolling down -> stretch up proportional to speed (max 4x)
      targetScale = Math.min(1 + (vel - threshold) / 100, 4);
      targetOrigin = 1;
    } else if (vel < -threshold) {
      // Scrolling up -> shrink proportional to speed (min 2px)
      const minScale = 2 / config.size;
      const shrinkFactor = Math.min((Math.abs(vel) - threshold) / 100, 1);
      targetScale = 1 - shrinkFactor * (1 - minScale);
      targetOrigin = 0;
    }

    // Lerp (linear interpolation) for smooth elasticity
    scaleY.set(scaleY.get() + (targetScale - scaleY.get()) * 0.15);
    originY.set(originY.get() + (targetOrigin - originY.get()) * 0.2);

    // 2. Handle Movement (pause if scrolling)
    if (Math.abs(vel) <= threshold) {
      const movement = (config.speed * delta) / 1000;
      let currentY = y.get() - movement; // move up
      const maxDistancePx = config.distance * vh;

      // Loop condition
      if (currentY < -maxDistancePx) {
        currentY = 0; // reset to its original startY
      }
      y.set(currentY);

      // 3. Handle Opacity (fade in and out)
      const progress = Math.abs(currentY) / maxDistancePx;
      if (progress < 0.2) {
        opacity.set(progress * 5); // 0 to 1
      } else if (progress > 0.8) {
        opacity.set((1 - progress) * 5); // 1 to 0
      } else {
        opacity.set(1);
      }
    }
  });

  return (
    <motion.div
      className={`absolute ${config.color}`}
      style={{
        width: config.size,
        height: config.size,
        left: `${config.startX}vw`,
        top: `${config.startY}vh`,
        y,
        opacity,
        scaleY,
        originY,
      }}
    />
  );
};

export interface TorchParticlesProps {
  particleCount?: number;
  colors?: string[];
  sizes?: number[];
  speeds?: number[];
  className?: string;
}

export default function TorchParticles({
  particleCount = 15,
  colors = DEFAULT_COLORS,
  sizes = DEFAULT_SIZES,
  speeds = DEFAULT_SPEEDS,
  className = "",
}: TorchParticlesProps) {
  const [particles, setParticles] = useState<ParticleConfig[]>([]);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  useEffect(() => {
    // Generate particles on mount
    setParticles(generateParticles(particleCount, colors, sizes, speeds));
  }, [particleCount, colors, sizes, speeds]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none -z-10 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <Particle key={p.id} config={p} velocity={smoothVelocity} />
      ))}
    </div>
  );
}
