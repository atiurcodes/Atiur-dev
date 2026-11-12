"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { PROFILE } from "@/lib/profile";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "/About", href: "#about" },
  { label: "/Skills", href: "#skills" },
  { label: "/Projects", href: "#projects" },
  { label: "/Education", href: "#education" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const spySections = ["about", "skills", "projects", "education", "contact"];

    const updateScrollState = () => {
      const y = window.scrollY;
      setIsScrolled((prev) => (prev ? y > 10 : y > 32));

      if (y < 100) {
        setActiveHref("/");
      } else {
        const triggerY = Math.min(220, window.innerHeight * 0.35);
        let currentHref = "/";

        for (const id of spySections) {
          const element = document.getElementById(id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerY) {
            currentHref = `#${id}`;
          }
        }

        setActiveHref(currentHref);
      }

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (y <= 2 || maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      if (y >= maxScroll - 2) {
        setScrollProgress(100);
        return;
      }

      const stops: number[] = [0];
      for (const id of spySections) {
        const element = document.getElementById(id);
        if (!element) continue;

        const targetY = element.getBoundingClientRect().top + y - 96;
        const clamped = Math.min(
          maxScroll,
          Math.max(stops[stops.length - 1], targetY),
        );
        stops.push(clamped);
      }
      stops.push(maxScroll);

      const segmentCount = stops.length - 1;
      let seg = 0;
      for (let i = 0; i < segmentCount; i++) {
        if (y >= stops[i]) {
          seg = i;
        }
      }

      const start = stops[seg];
      const end = stops[seg + 1];
      const localRatio =
        end > start ? Math.min(1, Math.max(0, (y - start) / (end - start))) : 1;
      const progress = ((seg + localRatio) / segmentCount) * 100;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileOpen(false);
    setActiveHref("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  };

  const handleSectionClick = (href: string) => {
    setMobileOpen(false);
    setActiveHref(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out motion-reduce:transition-none ${
        isScrolled
          ? "border-b border-border/80 bg-background/90 shadow-md shadow-slate-950/5 backdrop-blur-lg dark:shadow-black/30"
          : "border-b border-transparent bg-background/75 backdrop-blur-sm"
      }`}
    >
      {/* Top Application Scroll Progress Bar (Section-based Left -> Right) */}
      <div
        role="progressbar"
        aria-label="Page section scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress)}
        className={`h-[3px] w-full overflow-hidden transition-opacity duration-300 ${
          isScrolled || scrollProgress > 0
            ? "bg-border/35 opacity-100"
            : "opacity-0"
        }`}
      >
        <div
          className="h-full w-full origin-left bg-gradient-to-r from-accent via-emerald-400 to-accent-hover transition-transform duration-150 ease-out will-change-transform motion-reduce:transition-none"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-[height] duration-300 ease-out motion-reduce:transition-none sm:px-8 lg:px-12 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={handleHomeClick}
          className={`origin-left whitespace-nowrap text-xl font-bold tracking-tight text-heading transition-all duration-300 hover:opacity-85 sm:text-2xl ${
            isScrolled ? "scale-[0.96]" : "scale-100"
          }`}
        >
          {PROFILE.name}
          <span className="text-accent">.</span>
        </Link>

        {/* Right Side: Links + Divider + Theme Toggle + Let's Talk */}
        <div className="flex items-center gap-6">
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              const className = `relative text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-accent after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-accent"
                  : "text-foreground hover:text-accent"
              }`;

              if (link.href === "/") {
                return (
                  <Link
                    key={link.href}
                    href="/"
                    onClick={handleHomeClick}
                    className={className}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleSectionClick(link.href)}
                  className={className}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-border md:block"
          />

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={() => handleSectionClick("#contact")}
              className="group relative hidden overflow-hidden rounded-md border border-accent/80 px-4 py-1.5 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-foreground focus-visible:text-accent-foreground sm:inline-flex"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
              <span className="relative z-10">Let&apos;s Talk</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-heading transition-colors duration-200 hover:border-accent/60 hover:text-accent md:hidden"
            >
              {mobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <line x1="4" x2="20" y1="7" y2="7" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="17" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-md animate-fade-up md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              const className = `rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-foreground hover:bg-surface-subtle hover:text-accent"
              }`;

              if (link.href === "/") {
                return (
                  <Link
                    key={link.href}
                    href="/"
                    onClick={handleHomeClick}
                    className={className}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleSectionClick(link.href)}
                  className={className}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => handleSectionClick("#contact")}
              className="group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-foreground focus-visible:text-accent-foreground"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
              <span className="relative z-10">Let&apos;s Talk</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
