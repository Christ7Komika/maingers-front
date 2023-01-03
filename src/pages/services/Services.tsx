import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import SectionFlexible from "../../components/sectionFlexible/SectionFlexible";
import SectionIndustrialCleaning from "../../components/sectionIndustrialCleaning/SectionIndustrialCleaning";
import SectionRentEngine from "../../components/sectionRentEngine/SectionRentEngine";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import lottie from "../../lottie/lf30_about_us.json";
const Services = () => {
  return (
    <div>
      <Header />
      <Banner animation={lottie} />
      <SectionFlexible />
      <SectionIndustrialCleaning />
      <SectionRentEngine />
      <Partner />
      <Footer />
    </div>
  );
};

export default Services;
