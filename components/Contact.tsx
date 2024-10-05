"use client";

import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading heading="contact me" />

      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a href="mailto:dav.avagnano@gmail.com" className="underline">
          dav.avagnano@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (FormData) => {
          await sendEmail(FormData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg border border-black/10"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg border border-black/10 p-4 resize-none"
        ></textarea>
        <button
          type="submit"
          className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-950 text-white rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </button>
      </form>
    </motion.section>
  );
};
export default Contact;
