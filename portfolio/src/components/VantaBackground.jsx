import { useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import "./VantaBackground.css";

export function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = RINGS({
      el: vantaRef.current,
      THREE: window.THREE, 
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div className="app">
      <div className="bg" ref={vantaRef} />
    </div>
  );
}
