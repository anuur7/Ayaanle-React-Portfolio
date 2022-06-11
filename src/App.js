import "./App.css";
// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

function App() {  
  return (
    <div>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="ayaanle-react-portfolio" element={<Intro />} />
            <Route path="ayaanle-react-portfolio/about" element={<AboutMe />} />
            <Route path="ayaanle-react-portfolio/projects" element={<Projects />} />
            <Route path="ayaanle-react-portfolio/form" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
