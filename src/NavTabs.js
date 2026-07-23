import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";
import Bella from "./Bella";
import Gaming from "./Gaming";
import DVDs from "./DVDs";
import Music from "./Music";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar stays persistent here
    children: [
      {
        path: "/", // Corresponds to Home
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "dining",
        element: <Dining />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
       {
        path: "restaurants",
        element: <Restaurants />,
      },
      {
        path: "bella",
        element: <Bella />,
      },
      {
        path: "gaming",
        element: <Gaming />,
      },
       {
        path: "dvds",
        element: <DVDs />,
      },
        {
        path: "music",
        element: <Music />,
      },
      ],
  },
]);

function NavTabs() {
  return <RouterProvider router={router} />;
}

export default NavTabs;
