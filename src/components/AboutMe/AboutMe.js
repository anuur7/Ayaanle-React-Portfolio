import "./AboutMe.css";
import React from "react";
import Graduation from "../../images/graduation.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="about">
      <div className="sub-about">
        <h2>About Me</h2>
      </div>
      <div className="about-container">
        <div className="graduation">
          <img src={Graduation} alt="me shaking hands with Lenny Henry" />
        </div>
        <div className="about-bio">
          <p>
            My name is Ayaanle Nur and I am a highly motivated and passionate
            educator with a background in Accounting and Finance. I am
            Consistently striving for personal development, has recently
            transitioned into tech as a Full Stack Web Developer.
          </p>
          <p>
            I am equipped with solid knowledge of many different back-end and
            front-end technologies, databases and responsive frameworks after
            completing the Full Stack Software Developer program provided by
            University of Birmingham
          </p>
          <p>
            I have experience working with various technologies such as HTML,
            CSS, JavaScript, Node JS, MySQL, MongoDB, Express & React. I
            completed weekly individual projects building various frontend and
            backend applications. Also as part of a team practicing agile
            working.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
