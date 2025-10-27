"use client";

import { motion } from "framer-motion";
export function ProfileImage() {
    return (
        <div className="flex justify-center">
            <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-3xl"
                style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                <img
                    src="/profile/venkiProfile.jpg"
                    alt="Venkateshwaran, Software Developer"
                    width={400}
                    height={400}
                    className="h-52 w-52 rounded-full object-cover shadow-2xl border-4 border-amber-300 md:h-[400px] md:w-[400px]"
                />
            </motion.h1>
        </div>
    );
}

