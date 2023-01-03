import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import IndustrialCleaningInfos from "../../components/indstrialCleaningInfos/IndustrialCleaningInfos";
import IndustrialCleaningGallery from "../../components/industrialCleaningGallery/IndustrialCleaningGallery";
import Footer from "../../components/footer/Footer";
import lottie from "../../lottie/lf30_about_us.json";
const IndustrialCleaning = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <IndustrialCleaningInfos />
      <IndustrialCleaningGallery />
      <Footer />
    </>
  );
};

export default IndustrialCleaning;
