import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import { Link } from "react-router-dom";
import "./VantaBackground.css";

export function VantaBackground({ children }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xed1111,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div className="bg" ref={vantaRef}>
      {children}
    </div>
  );
}
