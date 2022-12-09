import React from "react";

const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/Banner/Banner"));
const MarketPlace = React.lazy(
  () => import("../../components/marketplace/MarketPlace")
);

const Shop = () => {
  return (
    <>
      <Header />
      <Banner />
      <MarketPlace />
    </>
  );
};

export default Shop;
