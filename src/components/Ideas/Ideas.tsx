import React from "react";
import Navigation from "../layout/Navigation";
import IdeaBox from "../layout/IdeaBox";

function Ideas() {
  function onclick(event: any) {
    event.preventDefault;
    document.getElementById("search")?.setAttribute("value", " ");
  }
  return (
    <div className="ideas">
      <Navigation />
      <div className="container">
        <div className="container__investors">
          <h1>Entrepreneurs</h1>
          <h2>Talk to an idealist</h2>
          <div className="ideas-container">
            <IdeaBox />
          </div>
        </div>
        <div className="container__search">
          <input
            type="search"
            onClick={(event) => event.preventDefault}
            name="Search"
            id="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

const text = [
  {
    id: 1,
    title: "Crypto Payment System",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis estinterdum felis urna, aliquet integer habitasse eu.",
  },
  {
    id: 2,
    title: "Real Estate Boom",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit velit varius enim velit amet.",
  },
];

export default Ideas;
