import React from "react";

function IdeaBox() {
  return (
    <div className="idea">
      <h3>Crypto Payment System</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis est
        interdum felis urna, aliquet integer habitasse eu.
      </p>
      <button>See More</button>
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
export default IdeaBox;
