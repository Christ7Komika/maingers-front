import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import TypeFlexible from "../../components/typeFlexible/TypeFlexible";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import lottie from "../../lottie/lf30_about_us.json";
const FlexibleType = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <TypeFlexible />
      <Partner />
      <Footer />
    </>
  );
};

export default FlexibleType;
