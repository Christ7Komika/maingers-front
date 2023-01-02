import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const InfosFlexible = React.lazy(
  () => import("../../components/infosFlexible/InfosFlexible")
);
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));
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
