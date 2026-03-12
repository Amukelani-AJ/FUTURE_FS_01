import { Link } from "react-router-dom";
import "./VantaBackground.css";

export function VantaBackground() {
  return (
    <div className="hero">
      <div className="content">
        <p className="greeting">Hi, I'm</p>
        <h1 className="name">Amukelani</h1>
        <h2 className="role">Full Stack Web Developer</h2>
        <p className="description">
          I build clean, practical and user focused software solutions.
          Passionate about web development, cloud computing and AI.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="#contact" className="btn btn-light">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
