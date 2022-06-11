import "./Intro.css";
import React from "react";
import Smile from '../../images/smile.jpg'

const Intro = () => {
  return (
      <div className="picture-intro">
        <img className="my-picture" src={Smile} alt="me in a suit" />
        <div className="intro">
          <h1>Hi, I'm Ayaanle Nur</h1>
          <h2>An aspiring software developer</h2>
        </div>
      </div>
  );
};

export default Intro;
