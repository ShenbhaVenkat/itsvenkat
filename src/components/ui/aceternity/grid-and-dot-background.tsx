"use client";

import React from "react";
// We'll need the cn utility from ShadCN, so make sure this path is correct
import { cn } from "@/lib/utils";

export function GridAndDotBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        // Base styles for the container
        "h-full w-full dark:bg-black bg-white relative flex items-center justify-center",
        className
      )}
    >
      {/* UPDATED: Replaced the dot background with the linear grid background.
        This code is from the "GridBackgroundDemo" you provided.
      */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          // Light mode grid lines
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          // Dark mode grid lines
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* This div adds the fade-out (vignette) effect, same as before */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* The content goes on top and needs to be relative, same as before */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}

