import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/BodyComponent";
import FooterComponent from "./component/Footer";

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
