import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App </h1>
        <button className="btn btn-primary">Hello</button>
        <footer>
          This project is coded by{" "}
          <a
            href="https://cool-florentine-1729b5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Rawan Awwad
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/rawwad97/react-weather-app-"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
