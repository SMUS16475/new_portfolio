import React from 'react'
import { NavLink } from 'react-router-dom'
import "../index.css"

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar