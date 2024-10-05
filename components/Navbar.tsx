"use client";

import { useActiveSection } from "@/context/ActiveSectionContext";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <>
      <header className="relative z-[9999]">
        <motion.div
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          className="fixed top-0 sm:top-6 left-1/2 h-[4.5rem] sm:h-[3.25rem] w-full sm:w-[36rem] rounded-none sm:rounded-full border border-black/15 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-[0.5rem]"
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] sm:top-[1.7rem] left-1/2 -translate-x-1/2 h-12 sm:h-[initial] py-2 sm:py-0">
          <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-y-1 sm:gap-5 w-[22rem] sm:w-[initial] text-[0.9rem] font-semibold text-gray-500">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="h-3/4 flex items-center justify-center relative"
              >
                <Link
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  href={link.hash}
                  className={`w-full flex items-center justify-center p-3 hover:text-gray-950 transition ${
                    activeSection === link.name ? "text-gray-950" : ""
                  }`}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 bg-gray-200 rounded-full"
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
