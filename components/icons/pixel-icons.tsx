/**
 * Pixel art icons drawn using SVG rects on a grid.
 * Matches the pixel aesthetic of font-pixel.
 *
 * All icons share a single PixelIcon renderer for DRY implementation.
 */

// ─── Shared renderer ────────────────────────────────────────────────

interface PixelIconProps {
  className?: string;
  color?: string;
}

function PixelIcon({
  grid,
  className,
  color = "currentColor",
}: PixelIconProps & { grid: string[] }) {
  const rows = grid.length;
  const cols = grid[0].length;

  return (
    <svg
      width={24}
      height={24}
      viewBox={`0 0 ${cols} ${rows}`}
      className={className}
      shapeRendering="crispEdges"
      suppressHydrationWarning
    >
      {grid.map((row, y) => (
        <g key={y}>
          {row
            .split("")
            .map((cell, x) =>
              cell === "#" ? (
                <rect
                  key={`${x}-${y}`}
                  x={x}
                  y={y}
                  width={1}
                  height={1}
                  fill={color}
                />
              ) : null,
            )}
        </g>
      ))}
    </svg>
  );
}

// ─── Grids ──────────────────────────────────────────────────────────

const SPEAKER_ON = [
  "................",
  "................",
  "......#...#.....",
  ".....##....#....",
  "...####..#..#...",
  "...####...#.#...",
  "...####...#.#...",
  "...####..#..#...",
  ".....##....#....",
  "......#...#.....",
  "................",
  "................",
];

const SPEAKER_OFF = [
  "................",
  "................",
  "......#.........",
  ".....##.........",
  "...####..#..#...",
  "...####...##....",
  "...####...##....",
  "...####..#..#...",
  ".....##.........",
  "......#.........",
  "................",
  "................",
];

const SUN = [
  ".......#........",
  ".......#........",
  "...#.......#....",
  "....#.###.#.....",
  ".....#####......",
  ".##.#######.##..",
  "....#######.....",
  ".....#####......",
  "....#.###.#.....",
  "...#.......#....",
  ".......#........",
  ".......#........",
];

const MOON = [
  "................",
  "........###.....",
  ".........###....",
  "..........###...",
  "..........###...",
  "..........###...",
  "...#.....####...",
  "...##...####....",
  "...#########....",
  "....#######.....",
  ".....####.......",
  "................",
];

const ARROW_UP = [
  "................",
  "................",
  ".......##.......",
  "......####......",
  ".....######.....",
  "....########....",
  ".......##.......",
  ".......##.......",
  ".......##.......",
  ".......##.......",
  "................",
  "................",
];

// ─── Exported icons ─────────────────────────────────────────────────

export function PixelSpeakerOnIcon(props: PixelIconProps) {
  return <PixelIcon grid={SPEAKER_ON} {...props} />;
}

export function PixelSpeakerOffIcon(props: PixelIconProps) {
  return <PixelIcon grid={SPEAKER_OFF} {...props} />;
}

export function PixelSunIcon(props: PixelIconProps) {
  return <PixelIcon grid={SUN} {...props} />;
}

export function PixelMoonIcon(props: PixelIconProps) {
  return <PixelIcon grid={MOON} {...props} />;
}

export function PixelArrowUpIcon(props: PixelIconProps) {
  return <PixelIcon grid={ARROW_UP} {...props} />;
}
