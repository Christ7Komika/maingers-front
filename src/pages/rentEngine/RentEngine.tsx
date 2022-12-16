import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/Banner/Banner"));
const RentEngineInfos = React.lazy(
  () => import("../../components/rentEngineInfos/RentEngineInfos")
);
const OurEngine = React.lazy(
  () => import("../../components/ourEngine/OurEngine")
);
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const RentEngine = () => {
  return (
    <>
      <Header />
      <Banner />
      <RentEngineInfos />
      <OurEngine />
      <Footer />
    </>
  );
};

export default RentEngine;
