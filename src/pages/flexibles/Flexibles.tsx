import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import FlexiblesCategories from "../../components/flexiblesCategories/FlexiblesCategories";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";

const Flexibles = () => {
  return (
    <>
      <Header />
      <Banner title="FLEXIBLE" />
      <FlexiblesCategories />
      <Partner />
      <Footer />
    </>
  );
};

export default Flexibles;
