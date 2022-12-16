import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/Banner/Banner"));
const InfosFlexible = React.lazy(
  () => import("../../components/infosFlexible/InfosFlexible")
);
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const FlexibleInfos = () => {
  return (
    <>
      <Header />
      <Banner />
      <InfosFlexible />
      <Partner />
      <Footer />
    </>
  );
};

export default FlexibleInfos;
