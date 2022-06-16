import './Nav.css'
import React from 'react'
import CV from '../../images/May2022CV.pdf'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className="nav">
            <ul>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/projects">Projects</Link></li>
                <li> <Link to="/form">Contact</Link></li>
                <li> <Link target="_blank" to={CV}>CV 📄</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav
