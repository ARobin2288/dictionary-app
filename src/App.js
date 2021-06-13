import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <main>
        <Dictionary defaultKeyword="Cat"/>
      </main>
      <footer>Coded by Robin A. Hosted on GitHub</footer>
    </div>
    </div>
  );
}
