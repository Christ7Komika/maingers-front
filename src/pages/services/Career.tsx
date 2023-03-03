import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import SectionFlexible from "../../components/sectionFlexible/SectionFlexible";
import SectionIndustrialCleaning from "../../components/sectionIndustrialCleaning/SectionIndustrialCleaning";
import SectionRentEngine from "../../components/sectionRentEngine/SectionRentEngine";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <img src="" alt="" />
      <Banner title="Services" />
      <SectionFlexible />
      <SectionIndustrialCleaning />
      <SectionRentEngine />
      <Partner />
      <Footer />
    </div>
  );
};

export default Services;
