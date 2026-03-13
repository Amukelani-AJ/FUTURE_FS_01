import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./NavBar.css";
import { useState, useEffect } from "react";

export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-socials">
        <Link
          to="https://www.linkedin.com/in/amukelanij"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={25}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
        </Link>
        <Link
          to="https://www.instagram.com/amukelani.exe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} style={{ color: "#fff" }} />
        </Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}
