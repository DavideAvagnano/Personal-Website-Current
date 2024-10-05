import { projectsData } from "@/lib/data";
import Image from "next/image";

type ZprovaProps = (typeof projectsData)[number];

const Zprova = ({ title, description, tags, imageUrl }: ZprovaProps) => {
  return <div>ciao</div>;
};
export default Zprova;
