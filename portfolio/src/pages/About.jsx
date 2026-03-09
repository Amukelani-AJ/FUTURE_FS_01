import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HeroImage2 } from "../components/HeroImage2";

export function About() {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="ABOUT" text="Im a Full stack web developer" />
      <Footer />
    </div>
  );
}
