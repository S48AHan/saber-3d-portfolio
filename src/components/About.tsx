"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Sparkles, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Performance & SEO",
    text: "Server-side rendering, static generation and Core Web Vitals tuning so your site loads fast and ranks well.",
  },
  {
    icon: Sparkles,
    title: "Interactive experiences",
    text: "Motion design, 3D with Three.js and thoughtful micro-interactions that keep visitors engaged.",
  },
  {
    icon: Target,
    title: "Pixel-perfect & accessible",
    text: "Responsive, accessible interfaces that look right and work for everyone, on every screen.",
  },
  {
    icon: Users,
    title: "Reliable collaboration",
    text: "Clear communication with designers, backend teams and clients — from planning to launch.",
  },
];

const facts = [
  { label: "Based in", value: "Dhaka, Bangladesh · Remote worldwide" },
  { label: "Focus", value: "React, Next.js, TypeScript" },
  { label: "Education", value: "BSc in CSE, AUST" },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-brand/40 to-brand-2/30 opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/saber-portrait.jpg"
                alt="Saber Ahmed, React and Next.js developer based in Dhaka, Bangladesh"
                width={640}
                height={800}
                sizes="(min-width: 1024px) 384px, 90vw"
                className="h-auto w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/70 to-transparent px-6 pt-16 pb-5">
                <figcaption>
                  <span className="block text-lg font-semibold text-white">
                    Saber Ahmed
                  </span>
                  <span className="text-sm text-slate-300">
                    Software Engineer II · Polygon Technology
                  </span>
                </figcaption>
              </div>
            </div>
          </motion.figure>

          <div className="lg:col-span-7">
            <motion.p {...fadeUp} className="mb-3 font-semibold text-brand">
              About Me
            </motion.p>
            <motion.h2
              {...fadeUp}
              className="mb-6 text-4xl font-bold text-white lg:text-5xl"
            >
              Building web products that{" "}
              <span className="text-gradient">perform</span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="text-lg leading-relaxed text-slate-300"
            >
              I&apos;m Saber Ahmed, a Software Engineer II at Polygon Technology
              specialising in frontend development with React, Next.js and
              TypeScript. Over the past three years I&apos;ve delivered
              production platforms for public-sector, education and commercial
              clients — including the Bangladesh Parliament website and an
              international school discovery platform.
            </motion.p>
            <motion.p
              {...fadeUp}
              className="mt-4 text-lg leading-relaxed text-slate-400"
            >
              I care about the details that drive results: Core Web Vitals,
              technical SEO, accessibility and clean, maintainable code. Whether
              you need a marketing website, a SaaS dashboard or an interactive 3D
              experience, I work closely with you from first idea to launch.
            </motion.p>

            <motion.dl
              {...fadeUp}
              className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3"
            >
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-200">{f.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-brand-2 ring-1 ring-white/10">
                <h.icon className="h-5 w-5" />
              </span>
              <h3 className="mb-1 font-semibold text-white">{h.title}</h3>
              <p className="text-sm text-slate-400">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
