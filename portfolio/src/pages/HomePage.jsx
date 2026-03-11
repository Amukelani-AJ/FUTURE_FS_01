import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { Contact } from "./Contact";
import { VantaBackground } from "../components/VantaBackground";

export function HomePage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <NavBar />
      <VantaBackground />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}
