export type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: string; // lucide icon name (resolved in component)
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Alifa International School Database",
    description:
      "Led frontend development for a school discovery platform helping international parents filter, compare, and customize school preferences.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Hero UI",
      "MongoDB",
      "Ghost",
      "Google Maps",
    ],
    icon: "School",
    link: "https://www.alifaedtech.com/",
  },
  {
    title: "Bangladesh Parliament",
    description:
      "Built responsive UI and bilingual Bangla–English support for a public-facing government platform serving thousands of citizens.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    icon: "Landmark",
    link: "https://www.parliament.gov.bd/",
  },
  {
    title: "Kakehashi Sports Auction",
    description:
      "Built responsive frontend interfaces for a real-time sports auction platform using Laravel, Tailwind CSS, and PHP.",
    technologies: ["Laravel", "Tailwind CSS", "PHP"],
    icon: "Trophy",
    link: "https://kakehashi-sports.com/",
  },
  {
    title: "Blink",
    description:
      "Interactive 3D landing page for a simulation product, with scroll-driven animation built in React and Three.js.",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    icon: "Rocket",
    link: "https://blink-scroll-homepage.vercel.app/",
  },
  {
    title: "Centralized Insurance Portal",
    description:
      "Led frontend development of an insurance management portal that streamlines policy handling, built with React and JavaScript.",
    technologies: ["React", "JavaScript"],
    icon: "ShieldCheck",
    link: "https://github.com/S48AHan/clg_portal",
  },
  {
    title: "Pokémon Card Game",
    description:
      "Created an interactive 3D Pokémon card game with immersive animations powered by Three.js and GSAP.",
    technologies: ["Three.js", "GSAP", "JavaScript"],
    icon: "Gamepad2",
    link: "https://github.com/S48AHan/PokemonCardGame",
  },
  {
    title: "E-Voting System Using Blockchain",
    description:
      "Undergraduate thesis: a tamper-proof blockchain voting system built on Hyperledger Fabric with a React frontend and Solidity/Go smart contracts.",
    technologies: ["React", "Solidity", "Go", "Hyperledger Fabric"],
    icon: "Vote",
    link: "https://github.com/h-razu/smart-voting",
  },

  {
    title: "GadgetScape",
    description:
      "Desktop software to manage PC accessories inventory, built with JavaFX and backed by MS SQL Server.",
    technologies: ["Java", "JavaFX", "MS SQL Server"],
    icon: "MonitorCog",
    link: "https://github.com/S48AHan/GadgetScape",
  },
  {
    title: "Grocery Management System",
    description:
      "Inventory and sales management system for a grocery store, handling stock, billing, and reporting.",
    technologies: ["Java", "JavaFX", "MS SQL"],
    icon: "ShoppingCart",
    link: "https://github.com/S48AHan/grocery-management",
  },
  {
    title: "Speedy Couriers",
    description:
      "Web-based courier and delivery management system developed with C# on the ASP.NET MVC framework.",
    technologies: ["C#", "ASP.NET MVC", "MS SQL"],
    icon: "Truck",
    link: "https://github.com/S48AHan/SpeedyCourier",
  },
  {
    title: "Movers and Packers",
    description:
      "A relocation and logistics booking website for movers and packers, built with PHP, MySQL, HTML5 and Bootstrap.",
    technologies: ["PHP", "MySQL", "HTML5", "Bootstrap"],
    icon: "Package",
    link: "https://github.com/S48AHan/Movers-And-Packers",
  },

  {
    title: "Astro Runner",
    description:
      "A fast-paced arcade runner game built from scratch in C++ using the iGraphics library.",
    technologies: ["C++", "iGraphics"],
    icon: "Gamepad2",
  },
];
