import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://cool-florentine-1729b5.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rawan Awwad
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/rawwad97/react-weather-app-"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://peaceful-pegasus-e24265.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
