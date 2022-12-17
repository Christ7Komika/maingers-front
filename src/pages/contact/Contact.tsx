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

// const banner = {
//   title: "Lorem ipsum dolor sit amet."
//   description:   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
//   aliquid tenetur qui ipsam ex ipsum? Numquam ullam reiciendis commodi
//   sequi!
// }

const Contact = () => {
  return (
    <>
      <Header />
      <Banner />
      <InfosContact />
      <FormContact />
      <Partner />
      <Footer />
    </>
  );
};

export default Contact;
