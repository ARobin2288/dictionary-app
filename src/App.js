import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <main>
        <Dictionary defaultKeyword="Cat"/>
      </main>
      <footer>Coded by Robin A. Open-Sourced on <a href="https://github.com/ARobin2288/dictionary-app">GitHub</a> Hosted on <a href="https://tender-goldstine-cfc985.netlify.app/">Netlify</a></footer>
    </div>
    </div>
  );
}
