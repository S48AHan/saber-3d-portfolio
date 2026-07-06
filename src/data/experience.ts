export type Experience = {
  role: string;
  company: string;
  companyUrl: string;
  duration: string;
  description: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer II",
    company: "Polygon Technology",
    companyUrl: "https://polygontechnology.io/",
    duration: "Sep 2025 – Present",
    description:
      "Leading frontend architecture for scalable, high-performance web applications and mentoring on modern React and Next.js practices.",
    current: true,
  },
  {
    role: "Software Engineer I",
    company: "Polygon Technology",
    companyUrl: "https://polygontechnology.io/",
    duration: "Feb 2024 – Aug 2025",
    description:
      "Shipped responsive, accessible interfaces across multiple client platforms with a focus on clean code and performance.",
  },
  {
    role: "Intern Software Engineer",
    company: "Polygon Technology",
    companyUrl: "https://polygontechnology.io/",
    duration: "Nov 2023 – Feb 2024",
    description:
      "Contributed to production frontend features and grew into the React and Next.js ecosystem.",
  },
  {
    role: "Team Manager, Asset Resource (Intern)",
    company: "GAO Tek Inc.",
    companyUrl: "https://gaotek.com/",
    duration: "Jun 2022 – Aug 2022",
    description:
      "Completed a 3-month remote internship coordinating asset resources and cross-functional team workflows.",
  },
];

export type Education = {
  degree: string;
  institution: string;
  duration: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Ahsanullah University of Science & Technology, Dhaka",
    duration: "2019 – 2023",
    detail: "CGPA 3.653 · Thesis: E-Voting System Using Blockchain",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Govt. Science College, Dhaka",
    duration: "2016 – 2018",
    detail: "GPA 4.67 / 5.00",
  },
  {
    degree: "Secondary (Science)",
    institution: "Willes Little Flower School & College, Dhaka",
    duration: "2006 – 2016",
    detail: "GPA 5.00 / 5.00",
  },
];

export const achievements: string[] = [
  "Top 6th team — IEEE CS, BUET Game Jam 2023",
  "AI Workshop — IIOE (International Institute of Online Education, ASU)",
  "IT Secretary — AUST Debating Club",
];

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "leetcode" | "mail";
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/S48AHan", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saber-ahmed-524881211/",
    icon: "linkedin",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/saberahmedn2/",
    icon: "leetcode",
  },
  { label: "Email", href: "mailto:saberahmedn2@gmail.com", icon: "mail" },
];
