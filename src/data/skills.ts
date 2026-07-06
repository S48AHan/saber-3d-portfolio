export type SkillGroup = {
  category: string;
  icon: string; // lucide icon name
  accent: string; // gradient classes
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "LayoutDashboard",
    accent: "from-sky-400 to-indigo-500",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Styling & UI",
    icon: "Palette",
    accent: "from-fuchsia-400 to-purple-500",
    items: ["Tailwind CSS", "Shadcn UI", "Hero UI", "Bootstrap", "Framer Motion"],
  },
  {
    category: "3D & Motion",
    icon: "Boxes",
    accent: "from-cyan-400 to-blue-500",
    items: ["Three.js", "React Three Fiber", "GSAP"],
  },
  {
    category: "Languages",
    icon: "Code2",
    accent: "from-rose-400 to-pink-500",
    items: ["Java", "PHP", "C#", "C++", "Go", "Solidity"],
  },
  {
    category: "Backend & Data",
    icon: "Server",
    accent: "from-emerald-400 to-teal-500",
    items: ["Laravel", "ASP.NET MVC", "MongoDB", "MySQL", "MS SQL", "Firebase"],
  },
  {
    category: "Tools & Practices",
    icon: "Gauge",
    accent: "from-amber-400 to-orange-500",
    items: ["Docker", "Git & GitHub", "SSR / SSG", "SEO", "Web Performance", "Clean Code"],
  },
];

// flat list kept for convenience
export const skills = skillGroups.flatMap((g) => g.items);
