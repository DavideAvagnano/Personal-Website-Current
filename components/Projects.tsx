"use client";

import { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import FilterButton from "./FilterButton";
import ProjectCard from "./ProjectCard";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 * index,
    },
  }),
};

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "frontend" | "full-stack"
  >("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section ref={ref} id="projects" className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading heading="my projects" />

      <div className="flex justify-center items-center gap-6 mb-10">
        <FilterButton
          text="All"
          active={selectedCategory === "all"}
          onClick={() => setSelectedCategory("all")}
        />
        <FilterButton
          text="Frontend"
          active={selectedCategory === "frontend"}
          onClick={() => setSelectedCategory("frontend")}
        />
        <FilterButton
          text="Full-Stack"
          active={selectedCategory === "full-stack"}
          onClick={() => setSelectedCategory("full-stack")}
        />
      </div>

      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="mb-10 last:mb-0"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))
      ) : (
        <p className="text-center mt-20 mb-[20rem] font-medium text-lg text-gray-500">
          Work in Progress...
        </p>
      )}
    </section>
  );
};
export default Projects;
