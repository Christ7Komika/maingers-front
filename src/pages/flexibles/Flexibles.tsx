import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const FlexiblesCategories = React.lazy(
  () => import("../../components/flexiblesCategories/FlexiblesCategories")
);
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));
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
