import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Story from "../../components/story/Story";
import Valor from "../../components/valor/Valor";
import Teams from "../../components/teams/Teams";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Banner title="à propos" />
      <Story />
      <Valor />
      <Teams />
      <Partner />
      <Footer />
    </>
  );
};

export default About;
