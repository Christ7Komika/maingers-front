import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./pages/about/About"));

const Contact = React.lazy(() => import("./pages/contact/Contact"));

const Flexibles = React.lazy(() => import("./pages/flexibles/Flexibles"));

const Home = React.lazy(() => import("./pages/home/Home"));

const NotFound = React.lazy(() => import("./pages/notFound/NotFound"));

const Services = React.lazy(() => import("./pages/services/Services"));

const IndustrialCleaning = React.lazy(
  () => import("./pages/industrialCleaning/IndustrialCleaning")
);

const RentEngine = React.lazy(() => import("./pages/rentEngine/RentEngine"));

const FlexibleType = React.lazy(
  () => import("./pages/flexibleType/FlexibleType")
);

const FlexibleInfos = React.lazy(
  () => import("./pages/flexibleInfos/FlexibleInfos")
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/departement/flexibles" element={<Flexibles />} />
        <Route path="/departement/flexibles/type" element={<FlexibleType />} />
        <Route
          path="/departement/flexibles/type/infos"
          element={<FlexibleInfos />}
        />
        <Route
          path="/departement/industrial-cleaning"
          element={<IndustrialCleaning />}
        />
        <Route path="/departement/rent-engine" element={<RentEngine />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
