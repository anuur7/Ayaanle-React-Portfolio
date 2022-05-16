import './Intro.css'
import React from "react";

const Intro = () => {
  return (
    <div>
      <img className="my-picture" src='images/suit.jpeg' alt="me in a suit"/>
      <div className="intro">
        <h1>Hi, I'm Ayaanle Nur</h1>
        <h2>An aspiring software developer</h2>
      </div>
    </div>
  );
};

export default Intro;
