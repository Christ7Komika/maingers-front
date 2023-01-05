import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import RentEngineInfos from "../../components/rentEngineInfos/RentEngineInfos";
import OurEngine from "../../components/ourEngine/OurEngine";
import Footer from "../../components/footer/Footer";
const RentEngine = () => {
  return (
    <>
      <Header />
      <Banner title="Location d'engins" />
      <RentEngineInfos />
      <OurEngine />
      <Footer />
    </>
  );
};

export default RentEngine;
