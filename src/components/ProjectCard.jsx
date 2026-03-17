import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

export function ProjectCard({ imgsrc, title, text, view, src }) {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="Image" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to={src} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}
