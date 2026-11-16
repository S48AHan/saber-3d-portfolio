export type SkillGroup = {
  category: string;
  icon: string; // lucide icon name
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "LayoutDashboard",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Styling & UI",
    icon: "Palette",
    items: ["Tailwind CSS", "Shadcn UI", "Hero UI", "Bootstrap", "Framer Motion"],
  },
  {
    category: "3D & Motion",
    icon: "Boxes",
    items: ["Three.js", "React Three Fiber", "GSAP"],
  },
  {
    category: "Languages",
    icon: "Code2",
    items: ["Java", "PHP", "C#", "C++", "Go", "Solidity"],
  },
  {
    category: "Backend & Data",
    icon: "Server",
    items: ["Laravel", "ASP.NET MVC", "MongoDB", "MySQL", "MS SQL", "Firebase"],
  },
  {
    category: "Tools & Practices",
    icon: "Gauge",
    items: ["Docker", "Git & GitHub", "SSR / SSG", "SEO", "Web Performance", "Clean Code"],
  },
];

// flat list kept for convenience
export const skills = skillGroups.flatMap((g) => g.items);
