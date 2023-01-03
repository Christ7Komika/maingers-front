import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import FlexiblesCategories from "../../components/flexiblesCategories/FlexiblesCategories";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import lottie from "../../lottie/lf30_about_us.json";
const Flexibles = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <FlexiblesCategories />
      <Partner />
      <Footer />
    </>
  );
};

export default Flexibles;
