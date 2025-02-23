import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

import Home from "./pages/main/home"
import Projects from "./pages/main/projects/projects"
import Contact from "./pages/main/contact"
import Resume from "./pages/main/resume"
import PageNotFound from './pages/404'
import InDevelopment from './pages/dev'

const IN_DEVELOPMENT = true

function App() {
  return (
    <Router>
      <Routes>
        {IN_DEVELOPMENT ? (
          <Route path="*" element={<InDevelopment />}/>
        ) : (
          <>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/*" element={<PageNotFound />}/>
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
