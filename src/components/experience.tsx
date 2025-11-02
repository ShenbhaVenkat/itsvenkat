"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 1. Define your experience data here (NOW WITH LOGOS)
const experienceData = [
  {
    title: "Software Developer",
    company: "Revol Software",
    dates: "Dec 2024 - Present",
    logoUrl: "/experience/revolLogo.png",
    responsibilities: [
      "Working as a full-stack developer, building and maintaining web applications.",
      "Developing features using HTML, CSS, JavaScript, and Java APIs.",
      "Managing and querying data using SQL databases.",
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "Digisailor",
    dates: "Jul 2024 - Aug 2024",
    logoUrl: "/experience/digisailorLogo.png",
    responsibilities: [
      "Contributed to building modern web applications using Next.js.",
      "Utilized Google Firebase for backend services, database, and authentication.",
      "Translated project requirements into functional and responsive UI components.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl font-neue-machina">
          My Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experienceData.map((exp, index) => (
            <Card
              key={index}
              className="border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
            >
              {/* --- UPDATED CARD HEADER --- */}
              <CardHeader>
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <img
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-md object-contain"
                  />

                  {/* Text Content */}
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-col">
                        <CardTitle className="text-2xl font-semibold text-white">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-[#6bfffb]">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <span className="mt-1 whitespace-nowrap rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-400 sm:mt-0">
                        {exp.dates}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-neutral-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

