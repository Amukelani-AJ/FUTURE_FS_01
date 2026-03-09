import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HeroImage2 } from "../components/HeroImage2";

export function Contact() {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="CONTACT" text="Contact me via email" />
      <Footer />
    </div>
  );
}
