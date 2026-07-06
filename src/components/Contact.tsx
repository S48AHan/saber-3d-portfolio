"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./BrandIcons";
import { socials } from "@/data/experience";

const EMAIL = "saberahmedn2@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-24 lg:px-20"
    >
      <div className="glow-blob left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-indigo-700/30" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glow overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center lg:p-14"
        >
          <p className="mb-3 font-semibold text-indigo-300">Get in touch</p>
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">great</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-300">
            Have a project in mind or just want to say hi? My inbox is always
            open — I&apos;ll get back to you as soon as I can.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
          >
            <Mail className="h-5 w-5" />
            {EMAIL}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" /> Dhaka, Bangladesh · Open to remote
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                {s.icon === "github" && <GithubIcon className="h-5 w-5" />}
                {s.icon === "linkedin" && <LinkedinIcon className="h-5 w-5" />}
                {s.icon === "leetcode" && <LeetcodeIcon className="h-5 w-5" />}
                {s.icon === "mail" && <Mail className="h-5 w-5" />}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
