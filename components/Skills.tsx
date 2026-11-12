"use client";

import { useState, type ReactNode } from "react";

type CategoryId = "all" | "frontend" | "backend" | "tools" | "additional";

interface SkillItem {
  name: string;
  category: Exclude<CategoryId, "all">;
  note?: string;
  icon: ReactNode;
}

const SKILLS: SkillItem[] = [
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <path
          fill="#38BDF8"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.305.74 1.908 1.35C13.394 10.847 14.534 12 17 12c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.305-.74-1.908-1.35C15.606 7.153 14.466 6 12 6Zm-5 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.305.74 1.908 1.35C8.394 16.847 9.534 18 12 18c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.305-.74-1.908-1.35C10.606 13.153 9.466 12 7 12Z"
        />
      </svg>
    ),
  },
  {
    name: "React.js",
    category: "frontend",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.35" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-9 w-9 text-heading"
      >
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          fill="var(--surface)"
          d="M8.2 8h1.5v8H8.2V8Zm6.1 0h1.5v5.6l-1.5-1.9V8Zm-4.95 0L17.5 18.8l-1.25.9L8.2 9.15V8h1.15Z"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
        <text
          x="19.5"
          y="19"
          textAnchor="end"
          fill="#FFFFFF"
          fontSize="9.5"
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "backend",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <path
          fill="#5FA04E"
          fillOpacity="0.16"
          stroke="#5FA04E"
          strokeWidth="1.7"
          strokeLinejoin="round"
          d="M12 2.4 20.3 7.2v9.6L12 21.6l-8.3-4.8V7.2L12 2.4Z"
        />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          fill="#5FA04E"
          fontSize="7.8"
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "Express",
    category: "backend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-9 w-9 text-heading"
      >
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="15"
          rx="3.5"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.4"
        />
        <text
          x="12"
          y="15.2"
          textAnchor="middle"
          fill="currentColor"
          fontSize="9.5"
          fontWeight="500"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
        >
          ex
        </text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <path
          fill="#10AA50"
          d="M12 2.2C9.1 5.6 7.5 8.7 7.5 12.1c0 3.2 1.7 5.6 4.1 6.8l.4 2.9V2.2Z"
        />
        <path
          fill="#13C95F"
          d="M12 2.2c2.9 3.4 4.5 6.5 4.5 9.9 0 3.2-1.7 5.6-4.1 6.8l-.4 2.9V2.2Z"
        />
        <path
          stroke="#A7F3D0"
          strokeOpacity="0.7"
          strokeWidth="1.1"
          strokeLinecap="round"
          d="M12 19v2.8"
        />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "tools",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <path
          fill="#F05032"
          d="M21.42 11.1 12.9 2.58a1.26 1.26 0 0 0-1.8 0L9.33 4.35l2.24 2.24a1.5 1.5 0 0 1 1.9 1.91l2.16 2.16a1.5 1.5 0 1 1-.9.9l-2.01-2.01v5.28a1.5 1.5 0 1 1-1.24-.04V9.43a1.5 1.5 0 0 1-.82-1.97L8.45 5.23l-5.87 5.87a1.26 1.26 0 0 0 0 1.8l8.52 8.52a1.26 1.26 0 0 0 1.8 0l8.52-8.52a1.26 1.26 0 0 0 0-1.8Z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "tools",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-9 w-9 text-heading"
      >
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "tools",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <path fill="#F24E1E" d="M9 3h3v6H9a3 3 0 0 1 0-6Z" />
        <path fill="#FF7262" d="M12 3h3a3 3 0 0 1 0 6h-3V3Z" />
        <path fill="#A259FF" d="M9 9h3v6H9a3 3 0 0 1 0-6Z" />
        <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
        <path fill="#0ACF83" d="M9 15h3v3a3 3 0 1 1-3-3Z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    category: "tools",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-9 w-9 text-heading"
      >
        <path fill="currentColor" d="M12 4 21.5 20h-19L12 4Z" />
      </svg>
    ),
  },
  {
    name: "PHP",
    category: "additional",
    note: "Basic CRUD",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <ellipse
          cx="12"
          cy="12"
          rx="10.5"
          ry="6"
          fill="#777BB4"
          stroke="#AEB2D5"
          strokeWidth="0.9"
        />
        <text
          x="12"
          y="14.6"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7.6"
          fontWeight="700"
          fontStyle="italic"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          php
        </text>
      </svg>
    ),
  },
  {
    name: "Laravel",
    category: "additional",
    note: "Basic CRUD",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF2D20"
        strokeWidth={1.45}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-9 w-9"
      >
        <path d="M3.5 5.5 6.5 3.8 9.5 5.5 6.5 7.2Z" />
        <path d="M3.5 5.5v10.3l8 4.6 9-5.2v-3.2" />
        <path d="M6.5 7.2v7l5 2.9v3.3" />
        <path d="M9.5 5.5v7l-3 1.7" />
        <path d="m9.5 12.5 5 2.9" />
        <path d="M14.5 8.8 17.5 7.1l3 1.7-3 1.7Z" />
        <path d="M14.5 8.8v6.6l3-1.7 3-1.7" />
        <path d="M17.5 10.5v3.2" />
        <path d="m11.5 17.1 3-1.7" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    category: "additional",
    note: "Basic",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
        <ellipse
          cx="12"
          cy="6.5"
          rx="7.5"
          ry="3"
          fill="#00758F"
          fillOpacity="0.22"
          stroke="#38BDF8"
          strokeWidth="1.5"
        />
        <path
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          d="M4.5 6.5v11c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-11"
        />
        <path
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3"
        />
        <circle cx="16.5" cy="17.2" r="2.2" fill="#F29111" />
      </svg>
    ),
  },
];

const CATEGORIES: { id: CategoryId; label: string; count: number }[] = [
  { id: "all", label: "All", count: SKILLS.length },
  {
    id: "frontend",
    label: "Frontend",
    count: SKILLS.filter((skill) => skill.category === "frontend").length,
  },
  {
    id: "backend",
    label: "Backend & DB",
    count: SKILLS.filter((skill) => skill.category === "backend").length,
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    count: SKILLS.filter((skill) => skill.category === "tools").length,
  },
  {
    id: "additional",
    label: "Additional",
    count: SKILLS.filter((skill) => skill.category === "additional").length,
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const visibleSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered Header */}
        <div className="text-center animate-fade-up">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            My Arsenal
          </p>
          <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Technical Skills
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-accent"
          />
        </div>

        {/* Category Filter Pills */}
        <div
          aria-label="Filter skills by category"
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 animate-fade-up"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "border-accent bg-accent font-semibold text-accent-foreground shadow-md shadow-emerald-500/20"
                    : "border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`font-mono text-xs ${
                    isActive ? "text-accent-foreground/80" : "text-muted"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards */}
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-4 sm:gap-5 animate-fade-up-delay">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex h-32 w-[138px] flex-col items-center justify-center gap-2.5 rounded-xl border border-border bg-surface p-4 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-md hover:shadow-slate-950/5 dark:hover:shadow-black/30 sm:h-36 sm:w-[152px]"
            >
              <div className="flex h-10 w-10 items-center justify-center transition-transform duration-200 group-hover:scale-110">
                {skill.icon}
              </div>
              <div className="text-center">
                <span className="block text-xs font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-heading sm:text-sm">
                  {skill.name}
                </span>
                {skill.note && (
                  <span className="mt-0.5 block font-mono text-[10px] text-muted">
                    {skill.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <p className="mt-10 flex items-center justify-center gap-6 font-mono text-xs text-muted sm:text-sm">
          <span>{CATEGORIES.length - 1} Categories</span>
          <span>{SKILLS.length} Technologies</span>
        </p>
      </div>
    </section>
  );
}
