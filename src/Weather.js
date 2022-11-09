import React from "react";
import SunImage from "./images/sun.png";
import CloudImage from "./images/cloudy.png";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tbilisi",
    description: "Sunny",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  list="datalistOptions"
                  placeholder="Type City..."
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm"
                />
              </div>
            </div>

            <h1>{weatherData.city}</h1>
            <img src={SunImage} alt={weatherData.description} />
            <h2>{weatherData.description}</h2>
            <h3>20°C</h3>
            <br />
            <div className="row">
              <div className="col-4">
                Today
                <br />
                <img src={SunImage} alt="sunny" />
                <div className="today-temp">20°C /15°C</div>
              </div>
              <div className="col-4">
                Thursday
                <br />
                <img src={CloudImage} alt="cloudy" />
                <div className="thursday-temp">16°C /13°C</div>
              </div>
              <div className="col-4">
                Friday
                <br />
                <img src={SunImage} alt="sunny" />
                <div className="friday-temp">23°C/ 18°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
