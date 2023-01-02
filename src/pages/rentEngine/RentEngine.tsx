import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const RentEngineInfos = React.lazy(
  () => import("../../components/rentEngineInfos/RentEngineInfos")
);
const OurEngine = React.lazy(
  () => import("../../components/ourEngine/OurEngine")
);
const Footer = React.lazy(() => import("../../components/footer/Footer"));
import lottie from "../../lottie/lf30_about_us.json";
const RentEngine = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <RentEngineInfos />
      <OurEngine />
      <Footer />
    </>
  );
};

export default RentEngine;
