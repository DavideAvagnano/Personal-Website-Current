"use client";

import { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import FilterButton from "./FilterButton";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  const [filter, setFilter] = useState<"all" | "frontend" | "backend">("all");

  const filteredSkills =
    filter === "frontend"
      ? skillsData.frontend
      : filter === "backend"
      ? skillsData.backend
      : Object.values(skillsData).flat();

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 sm:mb-40 scroll-mt-28 text-center max-w-[45rem]"
    >
      <SectionHeading heading="my skills" />

      <div className="flex justify-center items-center gap-6 mb-5">
        <FilterButton
          text="All"
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
        <FilterButton
          text="Frontend"
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
        />
        <FilterButton
          text="Backend"
          active={filter === "backend"}
          onClick={() => setFilter("backend")}
        />
      </div>

      <ul className="flex flex-wrap justify-center gap-2">
        {filteredSkills.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="bg-white border border-black/10 rounded-lg px-5 py-3 sm:text-lg font-medium text-gray-800 shadow-sm"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
