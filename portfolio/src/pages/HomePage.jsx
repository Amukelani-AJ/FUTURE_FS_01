import { NavBar } from "../components/NavBar";
import { HeroImage } from "../components/HeroImage";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { About } from "./About";
import { Contact } from "./Contact";
import { VantaBackground } from "../components/VantaBackground";

export function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroImage />
      <VantaBackground/>
      <About />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}
