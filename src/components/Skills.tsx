"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Gauge,
  LayoutDashboard,
  Palette,
  Server,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/skills";

const icons: Record<string, LucideIcon> = {
  LayoutDashboard,
  Palette,
  Boxes,
  Code2,
  Server,
  Gauge,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-20"
    >
      <div className="glow-blob right-0 top-20 h-72 w-72 bg-brand-2/20" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-semibold text-brand"
        >
          Technical Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-white lg:text-5xl"
        >
          Skills &amp; <span className="text-gradient">Technologies</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Boxes;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-brand-2 ring-1 ring-white/10`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-white/25 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
