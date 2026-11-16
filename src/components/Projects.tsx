"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Gamepad2,
  Landmark,
  MonitorCog,
  Package,
  Rocket,
  School,
  ShieldCheck,
  ShoppingCart,
  Trophy,
  Truck,
  Vote,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/data/projects";

const icons: Record<string, LucideIcon> = {
  School,
  Landmark,
  Trophy,
  ShieldCheck,
  Vote,
  Gamepad2,
  MonitorCog,
  Truck,
  Rocket,
  ShoppingCart,
  Package,
};

const MotionArticle = motion.article;
const MotionAnchor = motion.a;

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-20"
    >
      <div className="glow-blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-brand/25" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-semibold text-brand"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-bold text-white lg:text-5xl"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl text-lg text-slate-400"
        >
          Websites and web applications I&apos;ve built for clients, employers
          and my own R&amp;D — spanning government, education, commerce and
          interactive 3D.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = icons[project.icon] ?? Trophy;
            const isLink = Boolean(project.link);
            const Card = isLink ? MotionAnchor : MotionArticle;
            const linkProps = isLink
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noreferrer",
                }
              : {};
            return (
              <Card
                key={project.title}
                {...linkProps}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`card-glow group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06] ${
                  isLink ? "cursor-pointer" : ""
                }`}
              >
                <div className="mb-5 flex items-start justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-brand-2 ring-1 ring-white/10`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  {isLink && (
                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  )}
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-slate-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
