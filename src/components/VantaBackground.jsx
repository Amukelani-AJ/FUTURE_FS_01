import { Link } from "react-router-dom";
import "./VantaBackground.css";
import resume from "../assets/Amu_Final.pdf";

export function VantaBackground() {
  return (
    <div className="hero">
      <div className="content">
        <p className="greeting">Hi, I'm</p>
        <h1 className="name">Amukelani</h1>
        <h2 className="role">Full Stack Web Developer</h2>
        <p className="description">
          I build clean, practical and user focused software solutions.
          Passionate about web development, data engineering, cloud computing
          and AI.
        </p>
        <div className="hero-btns">
          <button
            className="btn"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </button>
          <button
            className="btn btn-light"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-resume"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
