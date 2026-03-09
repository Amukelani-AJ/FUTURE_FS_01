import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HeroImage2 } from "../components/HeroImage2";
import { ProjectCard } from "../components/ProjectCard";

export function Project() {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS." text="Most recent projects."/>
      <ProjectCard/>
      <Footer />
    </div>
  );
}
