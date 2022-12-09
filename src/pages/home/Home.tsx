import React from "react";

const Header = React.lazy(() => import("../../components/header/Header"));
const Slider = React.lazy(() => import("../../components/sliders/Slider"));
const Company = React.lazy(() => import("../../components/company/Company"));
const Product = React.lazy(() => import("../../components/product/Product"));
const Work = React.lazy(() => import("../../components/work/Work"));
const Projects = React.lazy(() => import("../../components/projects/Projects"));
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Company />
      <Product />
      <Work />
      <Projects />
      <Partner />
      <Footer />
    </>
  );
};

export default Home;
