import "./HeroImage.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
export function HeroImage() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Home page image" />
      </div>
      <div className="content">
        <p>Hi, Im a Full Stack Web developer</p>
        <h1>Computer Science Graduate</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
