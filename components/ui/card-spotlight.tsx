"use client";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn("group/spotlight p-10 relative bg-black", className)}
      style={{
        borderRadius: "24px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          borderRadius: "24px",
          background:
            "radial-gradient(78.83% 22.72% at 50% 50.16%, rgba(30, 0, 102, 0.70) 0%, #1E0066 100%)",
          opacity: isHovering ? 1 : 0.7,
        }}
      />

      {isHovering && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        </div>
      )}

      {children}
    </div>
  );
};
