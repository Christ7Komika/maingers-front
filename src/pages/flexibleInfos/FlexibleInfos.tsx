import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import InfosFlexible from "../../components/infosFlexible/InfosFlexible";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";

const FlexibleInfos = () => {
  return (
    <>
      <Header />
      <Banner title="Flexible infos" />
      <InfosFlexible />
      <Footer />
    </>
  );
};

export default FlexibleInfos;
