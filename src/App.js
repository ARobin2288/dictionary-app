import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <main>
        <Dictionary defaultKeyword="Peaceful"/>
      </main>
      <footer>Coded by <a href="https://www.instagram.com/robinandrews22/?hl=en">Robin A</a>. Open-Sourced on <a href="https://github.com/ARobin2288/dictionary-app">GitHub</a> Hosted on <a href="https://tender-goldstine-cfc985.netlify.app/">Netlify</a></footer>
    </div>
    </div>
  );
}
