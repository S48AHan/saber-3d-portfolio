"use client";

import HeroCanvas from "./three/HeroCanvas";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./BrandIcons";
import { socials } from "@/data/experience";

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "15+", label: "Technologies" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pt-28 pb-16 lg:px-20"
    >
      {/* ambient background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="glow-blob -left-24 top-24 h-72 w-72 bg-brand/60" />
      <div className="glow-blob -right-16 bottom-10 h-80 w-80 bg-brand-2/50" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance &amp; remote work
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3 flex items-center gap-2 font-semibold text-brand"
          >
            <Sparkles className="h-4 w-4" /> Software Engineer II · Frontend Specialist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl"
          >
            Saber Ahmed
            <span className="mt-2 block text-3xl text-gradient lg:text-5xl">
              React &amp; Next.js Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            I design and build fast, accessible, SEO-ready websites and web
            applications for startups, agencies and growing businesses — from
            high-converting landing pages to full-scale React and Next.js
            products. Based in Dhaka, Bangladesh, working with clients
            worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand to-brand-2 px-6 py-3 font-semibold text-background shadow-lg shadow-brand/25 transition hover:shadow-brand/40"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              <Mail className="h-4 w-4" /> Start a project
            </a>

            <div className="flex items-center gap-2 pl-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/30 hover:text-white"
                >
                  {s.icon === "github" && <GithubIcon className="h-5 w-5" />}
                  {s.icon === "linkedin" && <LinkedinIcon className="h-5 w-5" />}
                  {s.icon === "leetcode" && <LeetcodeIcon className="h-5 w-5" />}
                  {s.icon === "mail" && <Mail className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex gap-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-104 w-full lg:h-136"
        >
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}
