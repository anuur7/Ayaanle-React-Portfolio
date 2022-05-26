import './Intro.css'
import React from "react";

const Intro = () => {
  return (
    <div className="picture-intro">
      <img className="my-picture" src="images/smile.jpg" alt="me in a suit"/>
      <div className="intro">
        <h1>Hi, I'm Ayaanle Nur</h1>
        <h2>An aspiring software developer</h2>
      </div>
    </div>
  );
};

export default Intro;
