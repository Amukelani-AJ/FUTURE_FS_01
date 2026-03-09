import "./ProjectCard.css";
import project1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

export function ProjectCard() {
  return (
    <div className="project-card">
      <img src={project1} alt="Image" />
      <h2 className="project-title">Project Title</h2>
      <div className="pro-details">
        <p>The project details</p>
        <div className="pro-btns">
          <NavLink to="url.com" className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}
