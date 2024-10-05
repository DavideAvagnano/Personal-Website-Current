import React from "react";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";

import { FaGraduationCap, FaPython, FaReact } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Website",
    description:
      "A virtual meeting point to share my journey, improvements, and passions to the world.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Framer"],
    category: "frontend",
    gitHubUrl: "https://github.com/DavideAvagnano",
    imageUrl: corpcommentImg,
  },
  {
    title: "Meditation App",
    description:
      "Meditation app with carousel comments, FAQ accordion, and customizable countdown timer, accessible from any page.",
    tags: ["React", "Tailwind", "TypeScript", "Shadcn/ui"],
    category: "frontend",
    gitHubUrl: "https://github.com/DavideAvagnano/Meditation-App",
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "TypeScript",
    "React",
    "Next.js",
    "Framer Motion",
    "Shadcn/ui",
    "Git",
  ],
  backend: ["Node.js", "Express", "PostgreSQL", "Python", "Prisma", "MongoDB"],
} as const;

export const experiencesData = [
  {
    title: "Bachelor's degree in Aerospace Engineering",
    location: "Federico II di Napoli, IT",
    description:
      "I graduated after about 3 years of study. However, I decided to explore new interests that were emerging.",
    icon: React.createElement(FaGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Data Analysis & Machine Learning",
    location: "Udemy",
    description:
      "My journey into programming started with Python and SQL, given my passion for statistics and probability developed at university.",
    icon: React.createElement(FaPython),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Development",
    location: "Online Resources",
    description:
      "Continuing my studies, transitioning into web development felt quite natural. I delved deeper into the React ecosystem, and now I aspire to become a full-stack developer.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;
