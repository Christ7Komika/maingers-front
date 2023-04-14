import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import TypeFlexible from "../../components/typeFlexible/TypeFlexible";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import BreakComb from "../../components/breakcomb/BreakComb";
const data = [
  {
    name: "Acceuil",
    url: "/",
  },
  {
    name: "Flexible",
    url: "/services/flexibles",
  },
  {
    name: "Type flexible",
    url: "/services/flexibles/type",
  },
];
const FlexibleType = () => {
  return (
    <>
      <Header />
      <Banner title="Type flexible" />
      <BreakComb data={data} />
      <TypeFlexible />
      <Footer />
    </>
  );
};

export default FlexibleType;
