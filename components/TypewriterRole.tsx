"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "A Full-Stack Developer",
  "A Next.js Engineer",
  "A Frontend Specialist",
];

export function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const currentRole = ROLES[roleIndex];

    let delay = isDeleting ? 42 : 75;
    if (!isDeleting && displayed === currentRole) {
      delay = 1800;
    } else if (isDeleting && displayed === "") {
      delay = 250;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayed === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else if (isDeleting) {
        setDisplayed((prev) => prev.slice(0, -1));
      } else {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <p className="mt-3 font-mono text-xl font-medium tracking-tight text-role sm:text-2xl">
      <span>{displayed}</span>
      <span
        aria-hidden="true"
        className="animate-cursor-blink ml-0.5 inline-block h-[1.15em] w-[2px] translate-y-[2px] bg-accent"
      />
    </p>
  );
}

