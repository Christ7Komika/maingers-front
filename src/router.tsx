import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const About = React.lazy(() =>
  wait(1000).then(() => import("./pages/about/About"))
);
const Contact = React.lazy(() =>
  wait(1000).then(() => import("./pages/contact/Contact"))
);
const Flexibles = React.lazy(() =>
  wait(1000).then(() => import("./pages/flexibles/Flexibles"))
);
const Home = React.lazy(() =>
  wait(1000).then(() => import("./pages/home/Home"))
);
const NotFound = React.lazy(() =>
  wait(1000).then(() => import("./pages/notFound/NotFound"))
);
const Services = React.lazy(() =>
  wait(1000).then(() => import("./pages/services/Services"))
);
const IndustrialCleaning = React.lazy(() =>
  wait(1000).then(() => import("./pages/industrialCleaning/IndustrialCleaning"))
);
const Shop = React.lazy(() =>
  wait(1000).then(() => import("./pages/shop/Shop"))
);
const RentEngine = React.lazy(() =>
  wait(1000).then(() => import("./pages/rentEngine/RentEngine"))
);

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
    path: "/departement/flexibles",
    element: <Flexibles />,
  },
  {
    path: "/departement/industrial-cleaning",
    element: <IndustrialCleaning />,
  },
  {
    path: "/departement/rent-engine",
    element: <RentEngine />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
