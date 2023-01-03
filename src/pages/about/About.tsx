import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Story from "../../components/story/Story";
import Valor from "../../components/valor/Valor";
import Teams from "../../components/teams/Teams";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";

import lottie from "../../lottie/lf30_about_us.json";

const About = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <Story />
      <Valor />
      <Teams />
      <Partner />
      <Footer />
    </>
  );
};

export default About;
