import './Nav.css'
import React from 'react'
import CV from '../../images/May2022CV.pdf'

const Nav = () => {
    return (
        <div>
            <nav className="nav">
            <ul>
                <li> <a href="/ayaanle-react-portfolio/about">About</a></li>
                <li> <a href="/ayaanle-react-portfolio/projects">Projects</a></li>
                <li> <a href="/ayaanle-react-portfolio/form">Contact</a></li>
                <li> <a target="_blank" href={CV}>CV 📄</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav
