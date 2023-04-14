import Banner from "../../components/Banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import InfosActuality from "../../components/infosActuality/InfosActuality";
import Partner from "../../components/partner/Partner";
import { useParams } from "react-router-dom";
import Actualities from "../../components/actualities/Actualities";
import { useEffect, useState } from "react";

const actualityInfos = () => {
  const [title, setTitle] = useState("");
  const { name } = useParams<{
    name: "ready" | "load" | "podcast" | "event";
  }>();
  const data = {
    ready: "Projet réalisé",
    load: "Projet en cours",
    podcast: "Podcast",
    event: "Evenementiel",
  };

  useEffect(() => {
    if (name) {
      setTitle(data[name]);
    }
  }, [name]);

  return (
    <>
      <Header />
      <Banner title={title} />
      <InfosActuality />
      <Partner />
      <Footer />
    </>
  );
};

export default actualityInfos;
