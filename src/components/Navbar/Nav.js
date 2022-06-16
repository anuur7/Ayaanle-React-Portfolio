import './Nav.css'
import React from 'react'
import CV from '../../images/May2022CV.pdf'

const Nav = () => {
    return (
        <div>
            <nav className="nav">
            <ul>
                <li> <Link href="/about">About</Link></li>
                <li> <Link href="/projects">Projects</Link></li>
                <li> <Link href="/form">Contact</Link></li>
                <li> <Link target="_blank" href={CV}>CV 📄</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav
