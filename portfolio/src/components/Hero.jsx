import { Link } from "react-router-dom";
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero-content">
      <p>Hi, Im a Full Stack Web developer</p>
      <h1>BSc in IT in Computer Science and Informatics</h1>
      <div>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
}
