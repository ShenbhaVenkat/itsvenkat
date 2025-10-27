"use client";

import { motion } from "framer-motion";

export function AnimatedGradientName({ text }: { text: string }) {
    return (
        <div className="relative overflow-hidden">
            <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl"
                style={{
                    background: "linear-gradient(to right, #6bfffb, #a78bfa)", // Your desired gradient
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {text}
            </motion.h1>
        </div>
    );
}

export function AnimatedGradientDesignation({ text }: { text: string }) {
    return (
        <div className="relative mt-5 overflow-hidden">
            <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-3xl"
                // Apply gradient directly to text
                style={{
                    // New gradient: Purple to Pink
                    background: "linear-gradient(to right, #fb923c, #ef4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {text}
            </motion.h1>
        </div>
    );
}
