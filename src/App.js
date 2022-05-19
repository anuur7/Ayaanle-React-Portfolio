import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Intro />
      </section>

      <main>
        <AboutMe />
      </main>

      <section>
        <Projects />
      </section>
    </div>
  );
}

export default App;
