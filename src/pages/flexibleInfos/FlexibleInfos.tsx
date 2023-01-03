import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import InfosFlexible from "../../components/infosFlexible/InfosFlexible";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import lottie from "../../lottie/lf30_about_us.json";

const FlexibleInfos = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <InfosFlexible />
      <Partner />
      <Footer />
    </>
  );
};

export default FlexibleInfos;
