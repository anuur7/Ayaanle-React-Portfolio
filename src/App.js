import "./App.css";
import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  return (
    <div>
      <header className="header">
        <Header />
      </header>

      <section className="picture-intro">
        <Intro />
      </section>

      <main id="about" className="about">
        < AboutMe />
      </main>
    </div>
  );
}

export default App;
