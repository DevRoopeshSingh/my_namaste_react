import React from "react";
import ReactDOM from "react-dom/client";

// React Elements just like to dom elements
// React.createElement => Object => HtmlElements(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React by Roopesh 🚀 "
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
