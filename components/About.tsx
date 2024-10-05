"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 sm:mb-40 max-w-[50rem] text-center leading-8 scroll-mt-28"
      id="about"
    >
      <SectionHeading heading="about me" />

      <p className="mb-5">
        After graduating with a degree in{" "}
        <span className="font-semibold">Aerospace Engineering</span>, I decided
        to pursue my passion for programming. I mainly studied{" "}
        <span className="font-semibold">on my own</span>, and also took several
        courses. My favorite part of programming is the problem-solving aspect.
        I love the feeling of finally figuring out a solution to a problem. My
        core stack is <span className="font-semibold">React and Next.js</span>.
        I'm also familiar with{" "}
        <span className="italic">TypeScript and Tailwind</span>. Now I'm
        deepening my backend study by incorporating technologies such as{" "}
        <span className="italic">Node.js, Prisma and MongoDB</span> into my
        skill set. I'm currently looking for a{" "}
        <span className="font-semibold">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading,
        learning new things, working out and spending time outdoors. I am
        currently learning about yoga and meditation, incorporating them into my
        daily routine.
      </p>
    </motion.section>
  );
};
export default About;
