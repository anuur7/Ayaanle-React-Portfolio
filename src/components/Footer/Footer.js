import './Footer.css'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
    return (
        <div id="contact" className="contact">
        <div className="icons-card">
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
