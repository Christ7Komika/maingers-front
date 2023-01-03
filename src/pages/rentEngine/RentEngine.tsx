import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import RentEngineInfos from "../../components/rentEngineInfos/RentEngineInfos";
import OurEngine from "../../components/ourEngine/OurEngine";
import Footer from "../../components/footer/Footer";
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
