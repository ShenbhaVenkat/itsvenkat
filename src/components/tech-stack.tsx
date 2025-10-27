// components/tech-stack.tsx
import Image from "next/image";

export function TechStack() {
  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <p className="text-center text-sm uppercase tracking-widest text-neutral-500">
          My Tech Stack
        </p>
        <div className="mt-8 grid grid-cols-2 place-items-center gap-8 sm:grid-cols-4 lg:grid-cols-7">
          {/* Your 7 logos */}
          <Image
            src="/logos/java.svg"
            alt="Java"
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
          <Image
            src="/logos/html-5.svg"
            alt="HTML5"
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
          <Image
            src="/logos/css-3.svg"
            alt="CSS"
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
          <Image
            src="/logos/javascript.svg"
            alt="JavaScript"
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
          <Image
            src="/logos/nextjs-icon.svg"
            alt="Next JS"
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
          <Image
            src="/logos/typescript-icon.svg"
            alt="TypeScript"
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
          <Image
            src="/logos/tailwindcss-icon.svg"
            alt="Tailwind CSS"
            width={120}
            height={40}
            className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
}