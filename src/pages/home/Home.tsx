import Header from "../../components/header/Header";
import Slider from "../../components/sliders/Slider";
import Company from "../../components/company/Company";
import Product from "../../components/product/Product";
import Work from "../../components/work/Work";
import Projects from "../../components/projects/Projects";
import Partner from "../../components/partner/Partner";
import Footer from "../../components/footer/Footer";
import FloatingButton from "../../components/floatingBotton/FloatingButton";

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
      <FloatingButton />
    </>
  );
};

export default Home;
