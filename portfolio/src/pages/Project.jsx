import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HeroImage2 } from "../components/HeroImage2";
import { Card } from "../components/Card";

export function Project() {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS." text="Most recent projects." />
      <Card/>
      <Footer />
    </div>
  );
}
