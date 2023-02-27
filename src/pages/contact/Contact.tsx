import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Partner from "../../components/partner/Partner";
import Banner from "../../components/Banner/Banner";
import InfosContact from "../../components/infosContact/InfosContact";
import FormContact from "../../components/formContact/FormContact";

const Contact = () => {
  return (
    <>
      <Header />
      <Banner title="Contact" />
      <InfosContact />
      <FormContact />
      <Partner />
      <Footer />
    </>
  );
};

export default Contact;
