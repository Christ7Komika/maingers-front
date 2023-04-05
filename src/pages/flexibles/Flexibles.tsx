import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import FlexiblesCategories from "../../components/flexiblesCategories/FlexiblesCategories";
import Footer from "../../components/footer/Footer";
import SectionFlexible from "../../components/sectionFlexible/SectionFlexible";

const Flexibles = () => {
  return (
    <>
      <Header />
      <Banner title="Flexibles hydrauliques" />
      <SectionFlexible />
      <FlexiblesCategories />
      <Footer />
    </>
  );
};

export default Flexibles;
