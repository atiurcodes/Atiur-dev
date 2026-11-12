const highlights = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect width="18" height="14" x="3" y="4" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 18v2" />
      </svg>
    ),
  },
  {
    title: "Backend, APIs & Auth",
    description:
      "Developing REST APIs, authentication systems, and MongoDB databases with Node.js and Express.js.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Problem-Solving & Clean Code",
    description:
      "Writing maintainable code and continuously learning to build reliable, real-world solutions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered Header */}
        <div className="text-center animate-fade-up">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get To Know Me
          </p>
          <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            About Me
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-accent"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 animate-fade-up-delay">
          {/* Left Column: About Story */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold tracking-tight text-heading sm:text-2xl">
              Turning ideas into clean, scalable web products.
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-description sm:text-base">
              <p>
                I&apos;m a{" "}
                <span className="font-medium text-accent">
                  Full Stack Web Developer
                </span>{" "}
                from Bangladesh passionate about building modern, user-friendly
                web applications that solve real-world problems.
              </p>
              <p>
                My journey began with a Diploma in Computer Science &amp;
                Technology, giving me a strong foundation in computing and
                logical problem-solving. Today, I build end-to-end applications
                using{" "}
                <span className="font-medium text-accent">
                  React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js,
                  and MongoDB
                </span>{" "}
                — focusing on responsive interfaces, REST APIs, authentication
                systems, and database management.
              </p>
              <p>
                Beyond writing code, I value maintainable architecture and
                continuous learning to deliver reliable digital products with
                real value.
              </p>
            </div>
          </div>

          {/* Right Column: Focus Cards */}
          <div className="space-y-4 lg:col-span-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md hover:shadow-slate-950/5 dark:hover:shadow-black/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/25 transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-foreground">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
