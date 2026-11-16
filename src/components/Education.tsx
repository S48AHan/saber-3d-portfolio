"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { achievements, education } from "@/data/experience";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-20"
    >
      <div className="glow-blob right-10 top-10 h-72 w-72 bg-brand-2/20" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-semibold text-brand"
        >
          Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-white lg:text-5xl"
        >
          Education &amp; <span className="text-gradient">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            {education.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-glow flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand to-brand-2 text-background">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{ed.degree}</h3>
                  <p className="text-sm text-brand">{ed.institution}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {ed.duration} · {ed.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-brand-2 ring-1 ring-white/10">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-white">Highlights</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-brand to-brand-2" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
