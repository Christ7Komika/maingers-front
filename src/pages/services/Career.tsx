import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import CareerForm from "../../components/careerForm/CareerForm";

const Services = () => {
  return (
    <div>
      <Header />
      <Banner title="EMPLOIS ET CARRIÈRES" />
      <CareerForm />
      <Partner />
      <Footer />
    </div>
  );
};

export default Services;
