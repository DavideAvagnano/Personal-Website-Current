import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

import SectionScroll from "@/components/SectionScroll";
import SectionDivider from "@/components/SectionDivider";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <Intro />
      <SectionScroll />

      <About />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <Experience />
      <SectionDivider />

      <Contact />
    </main>
  );
};
export default Home;
