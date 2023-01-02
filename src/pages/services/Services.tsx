import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const SectionFlexible = React.lazy(
  () => import("../../components/sectionFlexible/SectionFlexible")
);
const SectionIndustrialCleaning = React.lazy(
  () =>
    import(
      "../../components/sectionIndustrialCleaning/SectionIndustrialCleaning"
    )
);
const SectionRentEngine = React.lazy(
  () => import("../../components/sectionRentEngine/SectionRentEngine")
);

const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));
import lottie from "../../lottie/lf30_about_us.json";
const Services = () => {
  return (
    <div>
      <Header />
      <Banner animation={lottie} />
      <SectionFlexible />
      <SectionIndustrialCleaning />
      <SectionRentEngine />
      <Partner />
      <Footer />
    </div>
  );
};

export default Services;
