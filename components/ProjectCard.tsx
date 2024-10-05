"use client";

import { projectsData } from "@/lib/data";
import { IoArrowUp } from "react-icons/io5";
import Image from "next/image";

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  description,
  tags,
  gitHubUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden border border-black/10 rounded-lg shadow-lg bg-gray-100 w-[25rem] sm:w-[36rem] sm:h-[20rem] hover:bg-gray-200 hover:border-black/15 transition-all">
      <div className="pt-4 pb-7 px-5 flex flex-col h-full sm:pl-10 sm:pt-10 sm:w-1/2">
        <a
          href={gitHubUrl}
          target="_blank"
          className="group/link flex items-end gap-1"
        >
          <h3 className="font-semibold text-xl sm:text-2xl group-hover/link:underline group-hover/link:underline-offset-4 transition-all">
            {title}
          </h3>
          <IoArrowUp className="text-lg sm:text-xl rotate-45 group-hover/link:translate-x-2 group-hover/link:-translate-y-2 transition-all" />
        </a>
        <p className="mt-2 leading-relaxed text-gray-700 text-sm sm:text-base">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] sm:text-xs uppercase tracking-wide text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project"
        quality={95}
        className="hidden sm:block absolute top-8 -right-40 w-[25rem] rounded-t-lg shadow-2xl transition-all group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
      />
    </div>
  );
};
export default ProjectCard;
