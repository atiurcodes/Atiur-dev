import Image from "next/image";
import profileImage from "@/public/atiur-profile.jpg";
import { PROFILE } from "@/lib/profile";
import { SocialLinks } from "./SocialLinks";
import { TypewriterRole } from "./TypewriterRole";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        {/* Left Side: Greeting, Name, Role, Bio, Socials + Resume Button */}
        <div className="relative lg:col-span-7 animate-fade-up">
          {/* Soft Emerald Glow starting from the center of the left section and fading right (Light Mode only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[42%] top-1/2 -z-10 h-64 w-[280px] -translate-y-1/2 rounded-full bg-gradient-to-r from-teal-300/45 via-emerald-300/25 to-transparent blur-[95px] sm:h-72 sm:w-[420px] lg:h-80 lg:w-[500px] lg:blur-[110px] dark:hidden"
          />

          <p className="text-base font-medium text-muted sm:text-lg">
            Hello, I&apos;m
          </p>

          <h1 className="mt-1.5 text-4xl font-bold tracking-tight text-accent sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {PROFILE.name}
          </h1>

          <TypewriterRole />

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-description sm:text-base">
            Driven by a passion to build clean digital products with{" "}
            <span className="font-semibold text-accent">Next.js</span> and{" "}
            <span className="font-semibold text-accent">TypeScript</span>, I
            thrive on crafting fast, responsive web experiences that feel
            effortless and impactful.
          </p>

          {/* Social Links + Resume Button Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SocialLinks />

            {/* Resume Button */}
            <a
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
              className="group ml-1 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-emerald-500/35"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:transition-none"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <g className="transition-transform duration-200 ease-out group-hover:translate-y-1 motion-reduce:transition-none">
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </g>
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side: Clean Rounded-Square Portrait */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end animate-fade-up-delay">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl shadow-2xl shadow-slate-900/20 ring-1 ring-black/5 sm:h-[380px] sm:w-[380px] lg:h-[410px] lg:w-[410px] dark:shadow-black/50 dark:ring-border">
            <Image
              src={profileImage}
              alt={`Portrait of ${PROFILE.name}`}
              width={410}
              height={410}
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 410px"
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
