import { Code2, Mail } from "lucide-react";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./BrandIcons";
import { socials } from "@/data/experience";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-6 py-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-indigo-500 to-cyan-400 text-white">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold text-white">
            Saber<span className="text-gradient">.dev</span>
          </span>
        </a>

        {/* <p className="text-sm text-slate-400">
          © 2026 Saber Ahmed. Built with Next.js &amp; Three.js.
        </p> */}

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-white/30 hover:text-white"
            >
              {s.icon === "github" && <GithubIcon className="h-4 w-4" />}
              {s.icon === "linkedin" && <LinkedinIcon className="h-4 w-4" />}
              {s.icon === "leetcode" && <LeetcodeIcon className="h-4 w-4" />}
              {s.icon === "mail" && <Mail className="h-4 w-4" />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
