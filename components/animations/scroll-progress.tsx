"use client";

import { type RefObject } from "react";
import { useScroll, useSpring } from "framer-motion";

type SupportedEdgeUnit = "px" | "vw" | "vh" | "%";
type EdgeUnit = `${number}${SupportedEdgeUnit}`;
type NamedEdges = "start" | "end" | "center";
type EdgeString = NamedEdges | EdgeUnit | `${number}`;
type Edge = EdgeString | number;
type ProgressIntersection = [number, number];
type Intersection = `${Edge} ${Edge}`;
type ScrollOffset = Array<Edge | Intersection | ProgressIntersection>;

/**
 * Returns a spring-smoothed scroll progress (0→1) scoped to a specific section.
 * Each section manages its own progress independently, so adding/removing
 * sections doesn't affect other components' animations.
 */
const useSectionProgress = (
  ref: RefObject<HTMLElement | null>,
  offset?: ScrollOffset,
) => {
  const { scrollYProgress, scrollY } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: offset || ["start 0.75", "start 0.1"],
  });

  return { scrollYProgress, scrollY };
};

export default useSectionProgress;
