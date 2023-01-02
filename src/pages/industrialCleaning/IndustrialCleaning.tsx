import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const IndustrialCleaningInfos = React.lazy(
  () =>
    import("../../components/indstrialCleaningInfos/IndustrialCleaningInfos")
);
const IndustrialCleaningGallery = React.lazy(
  () =>
    import(
      "../../components/industrialCleaningGallery/IndustrialCleaningGallery"
    )
);
const Footer = React.lazy(() => import("../../components/footer/Footer"));
import lottie from "../../lottie/lf30_about_us.json";
const IndustrialCleaning = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <IndustrialCleaningInfos />
      <IndustrialCleaningGallery />
      <Footer />
    </>
  );
};

export default IndustrialCleaning;
