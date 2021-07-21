import React from "react";
import Navigation from "../layout/Navigation";

function Ideas() {
  return (
    <div className="ideas">
      <Navigation />
      <div className="container">
        <div className="container__investors">
          <h1>Entrepreneurs</h1>
          <p>Talk to an idealist</p>
        </div>
        <div className="container__search">
          <input type="search" name="Search" id="search" value="Search" />
        </div>
      </div>
    </div>
  );
}

export default Ideas;
