"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-20"
    >
      <div className="glow-blob left-10 bottom-10 h-72 w-72 bg-brand/20" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-semibold text-brand"
        >
          Career Path
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-white lg:text-5xl"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative border-l border-white/10 pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${exp.duration}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span
                className={`absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full ring-4 ring-background ${
                  exp.current
                    ? "bg-linear-to-br from-brand to-brand-2 text-background"
                    : "bg-white/10 text-slate-300"
                }`}
              >
                <Briefcase className="h-4 w-4" />
              </span>

              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${exp.company} website`}
                className="card-glow block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  {exp.current && (
                    <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                      Current
                    </span>
                  )}
                </div>
                <p className="mb-3 text-sm text-brand">
                  {exp.company} · {exp.duration}
                </p>
                <p className="text-slate-400">{exp.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
