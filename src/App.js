import "./App.css";
import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div>
      <header className="header">
        <Header/>
      </header>

      <section className="picture-intro">
        <Intro/>
      </section>

      <main id="about" className="about">
        < AboutMe/>
      </main>

      <section id="projects" class="projects">
        < Projects/>
      </section>
    </div>
  );
}

export default App;
