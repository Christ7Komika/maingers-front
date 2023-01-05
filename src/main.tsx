import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css/bundle";
import Loader from "./components/Loader/Loader";
import "./index.css";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Suspense fallback={<Loader />}>
    <Router />
  </React.Suspense>
);
