import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./components/contact/Contact";
import Flexibles from "./pages/flexibles/Flexibles";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Services from "./pages/services/Services";
import Shop from "./pages/shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/departement",
    element: <Flexibles />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
