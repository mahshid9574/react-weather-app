import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project is coded by{" "}
          <a href="https://github.com/mahshid9574">Mahshid Jamali</a>, open
          soucrced on{" "}
          <a href="https://github.com/mahshid9574/react-weather-app">Github</a>,
          and hosted on{" "}
          <a href="https://react-weather-app-coral-three.vercel.app/">Vercel</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
