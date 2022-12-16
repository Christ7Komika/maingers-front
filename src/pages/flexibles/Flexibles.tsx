import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/Banner/Banner"));
const FlexiblesCategories = React.lazy(
  () => import("../../components/flexiblesCategories/FlexiblesCategories")
);
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const Flexibles = () => {
  return (
    <>
      <Header />
      <Banner />
      <FlexiblesCategories />
      <Partner />
      <Footer />
    </>
  );
};

export default Flexibles;
