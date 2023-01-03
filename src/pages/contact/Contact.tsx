import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Partner from "../../components/partner/Partner";
import Banner from "../../components/banner/Banner";
import InfosContact from "../../components/infosContact/InfosContact";
import FormContact from "../../components/formContact/FormContact";
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
