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

const IndustrialCleaning = () => {
  return (
    <>
      <Header />
      <Banner />
      <IndustrialCleaningInfos />
      <IndustrialCleaningGallery />
      <Footer />
    </>
  );
};

export default IndustrialCleaning;
