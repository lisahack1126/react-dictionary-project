import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <blockquote>
            <h2 className="mb-0">
              "Words are our most inexhaustible source of magic."
            </h2>
            <figcaption>-J.K. Rowling</figcaption>
          </blockquote>
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/lisahack1126/react-dictionary-project">
              Open-source code on GitHub
            </a>
            , by Lisa Weddington, and hosted on{" "}
            <a href="https://stately-snickerdoodle-2aee2e.netlify.app/">
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
