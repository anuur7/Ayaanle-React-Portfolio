import "./App.css";
import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro'

function App() {
  return (
    <div>
      <header className="header">
        <Header />
      </header>

      <section className="picture-intro">
        <Intro />
      </section>
    </div>
  );
}

export default App;
