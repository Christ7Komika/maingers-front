import Banner from "../../components/Banner/Banner";
import Actualities from "../../components/actualities/Actualities";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Partner from "../../components/partner/Partner";

const Actuality = () => {
  return (
    <>
      <Header />
      <Banner title="Nos actualités" />
      <Actualities />
      <Partner />
      <Footer />
    </>
  );
};

export default Actuality;
