import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import BodyComponent from "./component/BodyComponent";

const FooterComponent = () => {
  return (
    <div className="footer">
      &copy; 2023 Food Ordering App. All rights reserved.
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <Header />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
