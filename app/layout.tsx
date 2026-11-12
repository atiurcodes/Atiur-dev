
import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono-family",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Atiur Rahman | Full-Stack Developer",
  description:
    "Personal portfolio of Atiur Rahman — Full-Stack Developer crafting fast, responsive web applications with Next.js, React, TypeScript, and Node.js.",

  openGraph: {
    title: "Atiur Rahman | Full-Stack Developer",
    description:
      "Explore my portfolio, technical skills, and full-stack web development projects.",
    url: "https://nextjs-portfolio-pi-silk.vercel.app/",
    siteName: "Atiur Rahman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atiur Rahman - Full Stack Web Developer Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Atiur Rahman | Full-Stack Developer",
    description:
      "Explore my portfolio and web development projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${outfit.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
