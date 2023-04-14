import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import InfosFlexible from "../../components/infosFlexible/InfosFlexible";
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
  {
    name: "Infos flexible",
    url: "/services/flexibles/type/infos",
  },
];

const FlexibleInfos = () => {
  return (
    <>
      <Header />
      <Banner title="Flexible infos" />
      <BreakComb data={data} />
      <InfosFlexible />
      <Footer />
    </>
  );
};

export default FlexibleInfos;
