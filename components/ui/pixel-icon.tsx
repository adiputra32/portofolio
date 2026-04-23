"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";

interface PixelIconProps {
  icon: IconType;
  size?: number;
  pixelSize?: number;
  className?: string;
}

export default function PixelIcon({
  icon: Icon,
  size = 64,
  pixelSize = 4,
  className = "",
}: PixelIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svgElement = container.querySelector("svg");
    if (!svgElement) return;

    const gridSize = Math.floor(size / pixelSize);

    // Create a deep clone to modify for canvas drawing
    const clone = svgElement.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("width", gridSize.toString());
    clone.setAttribute("height", gridSize.toString());
    
    // Force black color so it can be used effectively as an alpha mask
    clone.style.color = "black";
    clone.setAttribute("fill", "black");

    const svgString = new XMLSerializer().serializeToString(clone);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      // Draw to offscreen canvas to get pixel data at low resolution
      const offscreen = document.createElement("canvas");
      offscreen.width = gridSize;
      offscreen.height = gridSize;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, gridSize, gridSize);
      const imageData = offCtx.getImageData(0, 0, gridSize, gridSize);
      const data = imageData.data;

      // Draw final pixelated image to main canvas
      const mainCanvas = document.createElement("canvas");
      mainCanvas.width = size;
      mainCanvas.height = size;
      const mainCtx = mainCanvas.getContext("2d");
      if (!mainCtx) return;

      mainCtx.fillStyle = "black";
      for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
          const index = (y * gridSize + x) * 4;
          const a = data[index + 3];

          // Threshold for pixelation (only draw if pixel is mostly opaque)
          if (a > 100) {
            mainCtx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
          }
        }
      }

      setDataUrl(mainCanvas.toDataURL());
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, [Icon, size, pixelSize]);

  // If the dataUrl is not ready, we can render a placeholder or nothing.
  // Using mask-image allows it to inherit colors (bg-current) naturally for hover effects.
  return (
    <>
      <div
        className={`bg-current inline-block ${className}`}
        style={{
          width: size,
          height: size,
          maskImage: dataUrl ? `url(${dataUrl})` : "none",
          WebkitMaskImage: dataUrl ? `url(${dataUrl})` : "none",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
      {/* Hidden SVG container just to extract the SVG geometry */}
      <div ref={containerRef} className="hidden">
        <Icon />
      </div>
    </>
  );
}
