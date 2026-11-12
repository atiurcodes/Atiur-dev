"use client";

import { useState, type FormEvent } from "react";
import { getGmailComposeUrl, PROFILE } from "@/lib/profile";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submittedState, setSubmittedState] = useState<{
    name: string;
    gmailUrl: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard access is blocked
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) return;

    const subjectText = `Portfolio Inquiry from ${trimmedName}`;
    const bodyText = `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`;
    const gmailUrl = getGmailComposeUrl(subjectText, bodyText);

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSubmittedState({ name: trimmedName, gmailUrl });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="relative border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Centered Header */}
        <div className="text-center animate-fade-up">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reach Out
          </p>
          <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-accent"
          />
        </div>

        {/* Two-Column Content */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 animate-fade-up-delay">
          {/* Left Column: Direct Info + Socials + Resume CTA */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold tracking-tight text-heading sm:text-2xl">
              Get in Touch
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-description">
              I&apos;m always open to discussing new opportunities, creative
              ideas, or projects to be part of your vision. Feel free to reach
              out using the form, or via direct email.
            </p>

            {/* Email Card (Whole info area opens Gmail Compose + Copy button) */}
            <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4 shadow-xs transition-colors duration-200 hover:border-accent/60">
              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title={`Send email to ${PROFILE.email}`}
                className="group flex min-w-0 flex-1 items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent ring-1 ring-accent/25 transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-foreground">
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                    Email
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-heading transition-colors duration-200 group-hover:text-accent">
                    {PROFILE.email}
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="shrink-0 rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] font-medium text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Location Card */}
            <div className="mt-4 flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-xs transition-colors duration-200 hover:border-accent/60">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent ring-1 ring-accent/25">
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
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Location
                </p>
                <p className="mt-0.5 text-sm font-medium text-heading">
                  {PROFILE.location}
                </p>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-heading">
                Social Profiles
              </p>
              <SocialLinks />
            </div>

            {/* Full-width Download Resume Button */}
            <a
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-emerald-500/35"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-110 motion-reduce:transition-none"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs sm:p-8 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-heading sm:text-sm"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-heading placeholder:text-muted/80 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-heading sm:text-sm"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-heading placeholder:text-muted/80 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-heading sm:text-sm"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={`Hello ${PROFILE.name}, I'd like to talk about...`}
                  className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-heading placeholder:text-muted/80 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-md shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
                >
                  <span>Send Message</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                </button>
              </div>

              {submittedState && (
                <div
                  role="status"
                  className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-xs font-medium text-accent sm:text-sm"
                >
                  <span>
                    Thanks, {submittedState.name}! Gmail compose opened to reach{" "}
                    {PROFILE.email}.
                  </span>
                  <a
                    href={submittedState.gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-heading"
                  >
                    Open Gmail again
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
