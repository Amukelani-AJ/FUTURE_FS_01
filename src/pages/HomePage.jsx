import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { VantaBackground } from "../components/VantaBackground";
import { Skills } from "../components/Skills";
import { AboutMe } from "../components/AboutMe";
import { Form } from "../components/Form";

export function HomePage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <NavBar />
      <div id="home">
        <VantaBackground />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <Skills />
      <div id="projects">
        <Card />
      </div>
      <div id="contact">
        <Form />
      </div>
      <Footer />
    </div>
  );
}
