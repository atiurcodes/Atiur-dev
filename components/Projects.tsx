import Image from "next/image";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "better-together-1",
    title: "BetterTogether – Community Events Platform",
    description:
      "BetterTogether is a community-driven event management platform that connects people through social development activities. Users can discover upcoming events, create and manage their own events, and participate in meaningful community initiatives.",
    features: [
      "User authentication with Email/Password and Google Sign-In.",
      "Create, update, delete and manage community events.",
      "Join and leave events with personalized joined-event management.",
      "Search and filter events by category.",
      "Responsive user interface with protected routes.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
    ],
    liveUrl: "https://better-together-coral.vercel.app/",
    githubUrl: "https://github.com/atiurcodes/better-together",
  },
  {
    id: "better-together-2",
    title: "BetterTogether – Community Events Platform",
    description:
      "BetterTogether is a community-driven event management platform that connects people through social development activities. Users can discover upcoming events, create and manage their own events, and participate in meaningful community initiatives.",
    features: [
      "User authentication with Email/Password and Google Sign-In.",
      "Create, update, delete and manage community events.",
      "Join and leave events with personalized joined-event management.",
      "Search and filter events by category.",
      "Responsive user interface with protected routes.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
    ],
    liveUrl: "https://better-together-coral.vercel.app/",
    githubUrl: "https://github.com/atiurcodes/better-together",
  },
  {
    id: "better-together-3",
    title: "BetterTogether – Community Events Platform",
    description:
      "BetterTogether is a community-driven event management platform that connects people through social development activities. Users can discover upcoming events, create and manage their own events, and participate in meaningful community initiatives.",
    features: [
      "User authentication with Email/Password and Google Sign-In.",
      "Create, update, delete and manage community events.",
      "Join and leave events with personalized joined-event management.",
      "Search and filter events by category.",
      "Responsive user interface with protected routes.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
    ],
    liveUrl: "https://better-together-coral.vercel.app/",
    githubUrl: "https://github.com/atiurcodes/better-together",
  },
];

function ProjectPreview({ project }: { project: ProjectItem }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    );
  }

  const displayHost = project.liveUrl
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  const displayName = project.title.split(/[–-]/)[0]?.trim() || project.title;

  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#0F172A] via-[#162238] to-[#0D2B2A] p-4 text-left transition-transform duration-300 group-hover:scale-[1.02]">
      {/* Mini Browser Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
        <span className="max-w-[75%] truncate rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-300">
          {displayHost}
        </span>
      </div>

      {/* Mini UI Mockup Body */}
      <div className="my-auto pt-3">
        <span className="inline-block rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-400">
          Featured Web App
        </span>
        <p className="mt-1.5 truncate text-base font-bold tracking-tight text-slate-50">
          {displayName}
        </p>
        <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-400">
          {project.description}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="h-1.5 w-10 rounded-full bg-emerald-400/70" />
            <div className="mt-1.5 h-2 w-20 rounded bg-slate-200/80" />
            <div className="mt-1 h-1.5 w-14 rounded bg-slate-400/50" />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="h-1.5 w-8 rounded-full bg-teal-400/70" />
            <div className="mt-1.5 h-2 w-16 rounded bg-slate-200/80" />
            <div className="mt-1 h-1.5 w-12 rounded bg-slate-400/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered Header */}
        <div className="text-center animate-fade-up">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Project Showcase
          </p>
          <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Innovative Projects
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-accent"
          />
        </div>

        {/* Project Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8 animate-fade-up-delay">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-slate-950/5 dark:hover:shadow-black/35"
            >
              {/* Top Thumbnail / Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-[#0F172A]">
                <ProjectPreview project={project} />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug tracking-tight text-heading transition-colors duration-200 group-hover:text-accent sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-description">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mt-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-heading/90">
                    Key Features
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs leading-relaxed text-description sm:text-[13px]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tech Tags + Action Links */}
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-accent-foreground transition-all duration-200 hover:bg-accent-hover"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                      <span>Live Link</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background/50 px-3.5 py-2 text-xs font-semibold text-heading transition-colors duration-200 hover:border-accent/60 hover:text-accent"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
