import React from "react";
import Loader from "../../components/Loader/Loader";

const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const MarketPlace = React.lazy(
  () => import("../../components/marketplace/MarketPlace")
);
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const Shop = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Header />
      <Banner />
      <MarketPlace />
      <Partner />
      <Footer />
    </React.Suspense>
  );
};

export default Shop;
