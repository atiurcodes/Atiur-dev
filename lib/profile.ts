export const PROFILE = {
  name: "Atiur Rahman",
  email: "atiurcodes@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/atiurcodes",
  linkedin: "https://www.linkedin.com/in/atiur-rahman5",
  // TODO: Replace with your real WhatsApp link, e.g. "https://wa.me/8801XXXXXXXXX"
  whatsapp: "https://wa.me/",
  resumePath: "/resume.pdf",
  resumeFileName: "Atiur-Rahman-Resume.pdf",
} as const;

export function getGmailComposeUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: PROFILE.email,
  });

  if (subject) params.set("su", subject);
  if (body) params.set("body", body);

  return `https://mail.google.com/mail/?${params.toString()}`;
}
