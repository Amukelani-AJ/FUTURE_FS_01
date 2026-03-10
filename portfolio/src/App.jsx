//import { useState } from 'react'
import "./App.css";
import { Project } from "./pages/Project";
import { About } from "./pages/About";
import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { VantaBackground } from "./components/VantaBackground";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
