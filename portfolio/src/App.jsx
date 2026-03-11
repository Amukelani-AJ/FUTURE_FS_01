import "./App.css";
import { Project } from "./pages/Project";
import { About } from "./pages/About";
import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;

    const timer = setTimeout(() => {
      if (window.VANTA) {
        effect = window.VANTA.GLOBE({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff1414,
          size: 0.6,
          backgroundColor: 0x180055,
        });
      }

      window.addEventListener("resize", () => {
        if (effect) effect.resize();
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", () => {});
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        id="app-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
