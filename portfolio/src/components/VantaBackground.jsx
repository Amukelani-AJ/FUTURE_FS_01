import { useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import { Link } from "react-router-dom";
import "./VantaBackground.css";

export function VantaBackground({ children }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = GLOBE({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <div className="bg" ref={vantaRef} />
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
      {children}
    </div>
  );
}
