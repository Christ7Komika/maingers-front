import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const About = React.lazy(() => import("./pages/about/About"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Flexibles = React.lazy(() => import("./pages/flexibles/Flexibles"));
const Home = React.lazy(() => import("./pages/home/Home"));
const NotFound = React.lazy(() => import("./pages/notFound/NotFound"));
const Services = React.lazy(() => import("./pages/services/Services"));
const Shop = React.lazy(() => import("./pages/shop/Shop"));

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
