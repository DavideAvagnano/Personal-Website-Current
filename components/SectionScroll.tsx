"use client";

import { useActiveSection } from "@/context/ActiveSectionContext";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const SectionScroll = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="hidden md:flex items-center justify-center gap-1 mt-24 mb-[15rem] text-gray-900"
    >
      <Link
        href="#about"
        onClick={() => {
          setActiveSection("About");
          setTimeOfLastClick(Date.now());
        }}
      >
        <svg
          width={"32px"}
          height={"32px"}
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="animate-scroll"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "#111827",
              strokeWidth: "30px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "#111827",
              strokeWidth: "30px",
            }}
          ></path>
        </svg>
      </Link>

      <span className="font-semibold">Scroll Down</span>
      <FaArrowDown size={12} />
    </motion.div>
  );
};
export default SectionScroll;
