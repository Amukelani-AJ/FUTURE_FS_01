//import { useState } from 'react'
import './App.css'
import { Project } from './components/Project';
import { About } from './components/About';
import { HomePage } from './components/HomePage';
import { Contact } from './components/Contact';


function App() {


  return (
    <>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="Project" element={<Project/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
