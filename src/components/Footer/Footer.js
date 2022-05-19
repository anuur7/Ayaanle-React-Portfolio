import './Footer.css'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
    return (
        <div id="contact" className="contact">
            <div className="contact-card">
            <h2>Contact Me</h2>
            <div class="email">
                <nav>
                    <ul>
                        <li>EMAIL: <a href="mailto: ayaanle-n@hotmail.com">AYAANLE-N@HOTMAIL.COM</a></li>
                        <li><a target="_blank" href="./images/May2022CV.pdf">MY RESUME</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="icons-card">
            <h2>Social Network</h2>
            <div className="icons">
                <a href="https://www.linkedin.com/in/ayaanle-nur-094665147/" target="_blank"><FaLinkedin/></a>
                <a href="https://github.com/anuur7" target="_blank"><FaGithub/></a>
                <a href="https://twitter.com/" target="_blank"><FaTwitterSquare/></a>
                <a href="https://facebook.com/" target="_blank"><FaFacebook/></a>
            </div>
        </div>
        </div>
    )
}

export default Footer
