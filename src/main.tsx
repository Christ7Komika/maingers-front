import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "swiper/css/bundle";
import Loader from "./components/Loader/Loader";
import "./index.css";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </React.Suspense>
);
