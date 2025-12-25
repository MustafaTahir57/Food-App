import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/ResturantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

export const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);
