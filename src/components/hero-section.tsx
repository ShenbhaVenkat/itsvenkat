"use client";

import { ProfileImage } from "./profile-image";
import { GridAndDotBackground } from "./ui/aceternity/grid-and-dot-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { AnimatedGradientName, AnimatedGradientDesignation } from "./animated-gradient-name";
import { motion } from "framer-motion";

export function HeroSection() {
    // 4. Define the words for the effect
    const words =
        "Passionate about building scalable web applications and engaging user experiences.";

    return (
        <GridAndDotBackground className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16 md:py-24 lg:py-32">
            {/* This grid is now the child of the background component.
        It will be automatically placed on top with a z-index of 20.
      */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
                {/* === PROFILE IMAGE (LEFT/TOP) === */}
                <div className="order-1 md:order-1">
                    <ProfileImage />
                </div>

                {/* === TEXT CONTENT (RIGHT/BOTTOM) === */}
                <div className="order-2 md:order-2 flex flex-col items-center md:items-end">
                    {/* Text is centered on mobile, right-aligned on desktop */}
                    <div className="text-center md:text-right">
                        {/* <h1 className="text-4xl font-extrabold tracking-tight text-[#6bfffb] md:text-5xl lg:text-7xl">
              Venkateshwaran
            </h1> */}
                        <AnimatedGradientName text="Venkateshwaran" />
                        <AnimatedGradientDesignation text="Full Stack Developer" />
                        <TextGenerateEffect
                            words={words}
                            className="mt-6 text-lg leading-relaxed text-neutral-300 md:text-xl"
                        />
                    </div>

                    {/* Button is centered on mobile, right-aligned on desktop */}
                    <div className="mt-10 flex w-full justify-center md:justify-end">
                        <a href="#contact">
                            <motion.h1
                                initial={{ y: "200%" }}
                                animate={{ y: "0%" }}
                                transition={{ duration: 3.0, ease: "easeOut" }}
                            >
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 font-monospace">
                                    Let's Talk
                                </HoverBorderGradient>
                            </motion.h1>
                        </a>
                    </div>
                </div>
            </div>
        </GridAndDotBackground>
    );
}


