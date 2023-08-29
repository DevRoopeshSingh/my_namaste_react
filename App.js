/*
    <div id="parent">
        <div id="child">
            <h1>Nested header Tag 1</h1>
            <h1>Nested Header Tag 2<h1>
        </div>
        <div id="child-2">
            <h1>Nested header Tag 1</h1>
            <h1>Nested Header Tag 2<h1>
        </div>
    </div>

*/
//React element is a object
// const child = React.createElement("div", { id: "child" });
//ReactElement(Object) => HTML(Browser Understand)

const parent = React.createElement("div", { id: "parent" }, [
  //passing in array to act like a sibling elements h1 and h2
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "header-nested-tag-1" },
      "Nested header Tag 1"
    ),
    React.createElement(
      "h2",
      { id: "header-nested-tag-2" },
      "Header Nested Tag 2"
    ),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement(
      "h1",
      { id: "header-nested-tag-1" },
      "Nested header Tag"
    ),
    React.createElement(
      "h2",
      { id: "header-nested-tag-2" },
      "Header Nested Tag 2"
    ),
  ]),
]);

const headerTag = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello from React js file. Yeah Again!!!"
);

// this looks so much to create a simple code but we can JSX to write the code in short

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headerTag);
root.render(parent);

// React.create is not creating any element but it creates a object while it is rendering onto the dom it covert
// it self into the html and puts up it to the dom
