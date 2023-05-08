import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./pages/about/About"));

const Contact = React.lazy(() => import("./pages/contact/Contact"));

const Flexibles = React.lazy(() => import("./pages/flexibles/Flexibles"));

const Actuality = React.lazy(() => import("./pages/actuality/Actuality"));

const Home = React.lazy(() => import("./pages/home/Home"));

const NotFound = React.lazy(() => import("./pages/notFound/NotFound"));

const Career = React.lazy(() => import("./pages/services/Career"));

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
const ActualityInfos = React.lazy(
  () => import("./pages/actualityInfos/ActualityInfos")
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/flexibles" element={<Flexibles />} />
        <Route path="/services/flexibles/type" element={<FlexibleType />} />
        <Route
          path="/services/flexibles/type/infos"
          element={<FlexibleInfos />}
        />
        <Route
          path="/services/industrial-cleaning"
          element={<IndustrialCleaning />}
        />
        <Route path="/services/rent-engine" element={<RentEngine />} />
        <Route path="/actualities" element={<Actuality />} />
        <Route
          path="/actualities/infos/:name/:id"
          element={<ActualityInfos />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
