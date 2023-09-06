import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title" tabIndex={"5"}>
    Title Component
  </h1>
);

const elem = <span>React element</span>;

const title = (
  <h1 className="title" tabIndex={"5"}>
    {elem}
    React element inside component
  </h1>
);

// const thousand = api.getData();

const TitleFunction = () => <h1 className="titler">Namaste Title function</h1>;
const HeadingComponent = () => {
  return (
    <div id="Heading Container">
      {TitleFunction()}
      {/* <h1>{thousand}</h1> */}
      {title}

      <h1>Above is title component inside the Heading Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
