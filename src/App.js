import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/BodyComponent";
import FooterComponent from "./component/Footer";
//import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Home from "./component/Home";
import Cart from "./component/Cart";
import RestaurantMenu from "./component/RestaurantMenu";
//import Grocery from "./component/Grocery";
import useOnlineStatus from "./utils/useOnlineStatus";
import OfflineAlert from "./component/OfflineAlert";
const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));

const AppLayoutComponent = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="app relative overflow-hidden">
      {isOnline ? (
        <>
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </>
      ) : (
        <OfflineAlert />
      )}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
