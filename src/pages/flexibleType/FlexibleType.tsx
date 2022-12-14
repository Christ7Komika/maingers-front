import React from "react";
import "./flexibleType.css";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/Banner/Banner"));
// const Header = React.lazy(() => import("../../components"))
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const FlexibleType = () => {
  return (
    <>
      <Header />
      <Banner />
      <Partner />
      <Footer />
    </>
  );
};

export default FlexibleType;
