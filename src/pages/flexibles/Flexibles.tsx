import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import FlexiblesCategories from "../../components/flexiblesCategories/FlexiblesCategories";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import SectionFlexible from "../../components/sectionFlexible/SectionFlexible";

const Flexibles = () => {
  return (
    <>
      <Header />
      <Banner title="FLEXIBLE" />
      <SectionFlexible />
      <FlexiblesCategories />
      <Partner />
      <Footer />
    </>
  );
};

export default Flexibles;
