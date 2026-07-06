"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Performance first",
    text: "Fast, SEO-friendly apps with SSR/SSG, lazy loading and clean, maintainable code.",
  },
  {
    icon: Sparkles,
    title: "Interactive UI",
    text: "Motion, 3D and micro-interactions that make interfaces feel alive.",
  },
  {
    icon: Users,
    title: "Team player",
    text: "Collaborative across design and backend to ship polished products.",
  },
  {
    icon: Target,
    title: "Detail-driven",
    text: "Pixel-accurate, accessible and responsive across every screen.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 font-semibold text-indigo-300"
            >
              About Me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold text-white lg:text-5xl"
            >
              Turning ideas into <span className="text-gradient">real products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-slate-300"
            >
              I&apos;m a frontend-focused Software Engineer at Polygon
              Technology with a passion for building scalable, responsive and
              interactive web applications. From public government platforms to
              blockchain voting systems, I enjoy transforming complex problems
              into intuitive user experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-lg leading-relaxed text-slate-400"
            >
              When I&apos;m not shipping features, I explore 3D on the web with
              Three.js and GSAP to push what browsers can do.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-cyan-300">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mb-1 font-semibold text-white">{h.title}</h3>
                <p className="text-sm text-slate-400">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
