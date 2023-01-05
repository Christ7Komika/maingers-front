import React from "react";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import MarketPlace from "../../components/marketplace/MarketPlace";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
const Shop = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Header />
      <Banner title="Boutique" />
      <MarketPlace />
      <Partner />
      <Footer />
    </React.Suspense>
  );
};

export default Shop;
