import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import IndustrialCleaningInfos from "../../components/indstrialCleaningInfos/IndustrialCleaningInfos";
import IndustrialCleaningGallery from "../../components/industrialCleaningGallery/IndustrialCleaningGallery";
import Footer from "../../components/footer/Footer";
import SectionIndustrialCleaning from "../../components/sectionIndustrialCleaning/SectionIndustrialCleaning";

const IndustrialCleaning = () => {
  return (
    <>
      <Header />
      <Banner title="Néttoyage industriel" />
      <SectionIndustrialCleaning />
      <IndustrialCleaningInfos />
      <IndustrialCleaningGallery />
      <Footer />
    </>
  );
};

export default IndustrialCleaning;
