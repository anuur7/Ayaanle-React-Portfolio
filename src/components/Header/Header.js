import './Header.css'
import React from "react";
import Nav from '../Navbar/Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
      <div className="header">
          <h1>
            <Link to="/">My Portfolio</Link> 
        </h1>
        <Nav/>
      </div>
  )
};

export default Header;
