import React from "react";

import "./WeatherPage.css";

import SearchEngine from "./SearchEngine";

export default function WeatherPage() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <SearchEngine />
        </div>
      </div>
      <small>
        <a
          href="https://github.com/Ta-Muna/react-weather-app"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Open-source code
        </a>
        , by Tamari Pilia
      </small>
    </div>
  );
}
