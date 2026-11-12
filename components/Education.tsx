import type { ReactNode } from "react";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlightLabel: string;
  highlights: string[];
  icon: ReactNode;
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "diploma-cst",
    degree: "Diploma in Engineering – Computer Science & Technology",
    institution: "Dinajpur Polytechnic Institute",
    period: "2022",
    description:
      "Completed a 4-year technical diploma focused on computer science fundamentals, programming logic, database systems, and hands-on web software development.",
    highlightLabel: "Relevant Coursework",
    highlights: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Development",
      "Computer Networks",
      "Software Engineering",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "bss-birganj",
    degree: "Bachelor of Social Science (BSS)",
    institution: "Birganj College",
    period: "Graduated",
    description:
      "Completed undergraduate studies in Social Science, strengthening structured analytical thinking, research methodology, and clear written and verbal communication.",
    highlightLabel: "Academic Focus",
    highlights: [
      "Analytical Thinking",
      "Social Research",
      "Written Communication",
      "Critical Reasoning",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered Header */}
        <div className="text-center animate-fade-up">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Academic Journey
          </p>
          <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            My Education
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-accent"
          />
        </div>

        {/* Education Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 animate-fade-up-delay">
          {EDUCATION_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-slate-950/5 dark:hover:shadow-black/35 sm:p-7"
            >
              {/* Card Header: Icon + Degree/Institution + Year/Status Badge */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 flex-1 items-start gap-3.5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent ring-1 ring-accent/25">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-heading transition-colors duration-200 group-hover:text-accent sm:text-xl">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-accent px-3.5 py-1 font-mono text-xs font-semibold text-accent-foreground shadow-xs">
                  {item.period}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-description">
                {item.description}
              </p>

              {/* Coursework / Focus Pills */}
              <div className="mt-auto pt-6">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-heading/90">
                  {item.highlightLabel}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

