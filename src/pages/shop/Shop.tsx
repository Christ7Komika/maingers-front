import React from "react";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import MarketPlace from "../../components/marketplace/MarketPlace";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import lottie from "../../lottie/lf30_about_us.json";
const Shop = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Header />
      <Banner animation={lottie} />
      <MarketPlace />
      <Partner />
      <Footer />
    </React.Suspense>
  );
};

export default Shop;
