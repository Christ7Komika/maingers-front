import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/Banner/Banner"));
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

const Services = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SectionFlexible />
      <SectionIndustrialCleaning />
      <SectionRentEngine />
      <Partner />
      <Footer />
    </div>
  );
};

export default Services;
