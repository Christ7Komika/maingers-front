import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const Story = React.lazy(() => import("../../components/story/Story"));
const Valor = React.lazy(() => import("../../components/valor/Valor"));
const Teams = React.lazy(() => import("../../components/teams/Teams"));
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));

const About = () => {
  return (
    <>
      <Header />
      <Banner />
      <Story />
      <Valor />
      <Teams />
      <Partner />
      <Footer />
    </>
  );
};

export default About;
