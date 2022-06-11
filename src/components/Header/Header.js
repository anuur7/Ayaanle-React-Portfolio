import './Header.css'
import React from "react";
import Nav from '../Navbar/Nav'
import Smile from '../../images/smile.jpg'

const Header = () => {
  return(
      <div className="header">
          <h1>
            <a href="/">My Portfolio</a> 
        </h1>
        <Nav/>
      </div>
  )
};

export default Header;
