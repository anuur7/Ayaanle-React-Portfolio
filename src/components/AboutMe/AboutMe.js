import "./AboutMe.css";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="about">
      <div className="sub-about">
        <h2>About Me</h2>
      </div>
      <div className="about-container">
        <div className="about-bio">
          <p>
            My name is Ayaanle Nur and I have a background in accounting &
            finance. I graduated from Birmingham City University with a first
            class degree and have since been working in that field.
          </p>
          <p>
            After 3 years of working in finance I decided that this field was
            not really my passion long term. I looked into coding and did a bit
            of studying on my own on freecode camp and i quite enjoyed it hence
            why i joined the bootcamp of University of Birmingham. Hopefully
            once I complete this bootcamp I will be ready to start applying for
            jobs in software development.
          </p>
          <p>
            In my free time i love to either watch football or play outdoors. I
            also enjoy a quiet night in watching movies or shows with
            a hot cuppa.
          </p>
        </div>
        <div className="graduation">
          <img
            src="images/graduation.jpeg"
            alt="me shaking hands with Lenny Henry"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
