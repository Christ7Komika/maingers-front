import React from "react";
const Header = React.lazy(() => import("../../components/header/Header"));
const Footer = React.lazy(() => import("../../components/footer/Footer"));
const Partner = React.lazy(() => import("../../components/partner/Partner"));
const Banner = React.lazy(() => import("../../components/banner/Banner"));
const InfosContact = React.lazy(
  () => import("../../components/infosContact/InfosContact")
);
const FormContact = React.lazy(
  () => import("../../components/formContact/FormContact")
);
import lottie from "../../lottie/129404-contact-us.json";

const Contact = () => {
  return (
    <>
      <Header />
      <Banner animation={lottie} />
      <InfosContact />
      <FormContact />
      <Partner />
      <Footer />
    </>
  );
};

export default Contact;
