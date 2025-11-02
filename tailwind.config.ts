import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Corrected this line
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- UPDATED THIS SECTION ---
      fontFamily: {
        // This creates a new utility class: `font-neue-machina`
        "neue-machina": ["'Neue Machina'", "sans-serif"],
        // This is the new utility class: `font-bebas-neue`
        "bebas-neue": ["'Bebas Neue'", "sans-serif"],
      },
      // --- END OF UPDATED SECTION ---

      // You might have other extensions here, like keyframes or animations
      keyframes: {
        "gradient-border-animation": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        "gradient-border-animation":
          "gradient-border-animation 4s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;

