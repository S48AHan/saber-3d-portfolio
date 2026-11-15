// Set NEXT_PUBLIC_SITE_URL to your custom domain; on Vercel the production URL is used automatically.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_TITLE =
  "Saber Ahmed — Freelance React & Next.js Developer for Hire";

export const SITE_DESCRIPTION =
  "Need help building your website or web app? I'm Saber Ahmed, a Software Engineer in Dhaka, Bangladesh, building fast, SEO-friendly, interactive apps with React, Next.js, TypeScript and Three.js. Available for freelance and remote projects.";
