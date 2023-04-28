import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import FlexiblesCategories from "../../components/flexiblesCategories/FlexiblesCategories";
import Footer from "../../components/footer/Footer";
import SectionFlexible from "../../components/sectionFlexible/SectionFlexible";
import FloatingButton from "../../components/floatingBotton/FloatingButton";

const Flexibles = () => {
  return (
    <>
      <Header />
      <Banner title="Flexibles hydrauliques" />
      <SectionFlexible />
      <FlexiblesCategories />
      <Footer />
      <FloatingButton />
    </>
  );
};

export default Flexibles;
