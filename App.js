import React from "react";
import ReactDOM from "react-dom/client";

// React Elements just like to dom elements
// React.createElement => Object => HtmlElements(render)
// React.createElement => ReactElement- JS Object => HTMLElements(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React by Roopesh 🚀📖"
// );

// console.log(heading);
// JSX syntax is like HTML
// JSX => React.createElement =  ReactElement - JS Object => HTMLElement(render)
//JSX (Transpiled before it reaches the JS) Parcel - Babel
const jsxHeading = <h1 id="heading">Hello from Namaste React By Roopesh 🚀</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
