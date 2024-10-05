"use client";

import { useActiveSection } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import profileImage from "@/public/profileImg.png";

const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 md:mb-0 max-w-[50rem] text-center scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profileImage}
              alt="Profile Image"
              width="150"
              height="150"
              quality="95"
              priority={true}
              className="size-40 rounded-full object-cover border-2 border-gray-600 bg-gray-300 shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-1 right-1 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-10 px-4 text-2xl sm:text-3xl font-medium !leading-[1.5]"
      >
        <span className="font-bold">Hello, I'm Davide</span>. I've transitioned
        from <span className="italic">aerospace engineering</span> to the coding
        world. I'm a passionate full-stack developer with a focus on{" "}
        <span className="font-bold underline">React and Next.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full shadow-sm outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
        >
          Contact me
          <FaArrowRightLong className="opacity-70 group-hover:opacity-100 group-hover:translate-x-2 group-hover:scale-110 transition-all" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all"
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:opacity-100 group-hover:translate-y-1 group-hover:scale-105 transition-all" />
        </a>

        <div className="flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/davide-avagnano/"
            target="_blank"
            className="cursor-pointer bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 shadow-sm outline-none focus:scale-125 hover:scale-125 hover:text-gray-950 active:scale-110 transition-all"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://github.com/DavideAvagnano"
            target="_blank"
            className="cursor-pointer bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 shadow-sm outline-none focus:scale-125 hover:scale-125 hover:text-gray-950 active:scale-110 transition-all"
          >
            <FaGithubSquare size={25} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
export default Intro;
