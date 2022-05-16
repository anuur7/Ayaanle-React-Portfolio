import './Nav.css'
import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className="nav">
            <ul>
                <li> <a href="#about">About</a></li>
                <li> <a href="#projects">Projects</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav
