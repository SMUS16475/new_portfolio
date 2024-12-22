import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

import Home from "./pages/main/home"
import Projects from "./pages/main/projects/projects"
import Contact from "./pages/main/contact"
import Resume from "./pages/main/resume"
import PageNotFound from './pages/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
