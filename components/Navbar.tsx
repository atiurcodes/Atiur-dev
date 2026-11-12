"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/profile";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#top", active: true },
  { label: "/About", href: "#about" },
  { label: "/Skills", href: "#skills" },
  { label: "/Projects", href: "#projects" },
  { label: "/Education", href: "#education" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="#top"
          className="whitespace-nowrap text-xl font-bold tracking-tight text-heading transition-opacity duration-200 hover:opacity-85 sm:text-2xl"
        >
          {PROFILE.name}
          <span className="text-accent">.</span>
        </a>

        {/* Right Side: Links + Divider + Theme Toggle + Let's Talk */}
        <div className="flex items-center gap-6">
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  link.active
                    ? "text-accent after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-border md:block"
          />

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden rounded-md border border-accent/80 px-4 py-1.5 text-sm font-medium text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground sm:inline-flex"
            >
              Let&apos;s Talk
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  link.active
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-surface-subtle hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
