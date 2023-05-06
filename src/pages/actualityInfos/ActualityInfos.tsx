import Banner from "../../components/Banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import InfosActuality from "../../components/infosActuality/InfosActuality";
import Partner from "../../components/partner/Partner";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BreakComb from "../../components/breakcomb/BreakComb";

const actualityInfos = () => {
  const [title, setTitle] = useState("");
  const [breakComb, setBreakComb] = useState([
    {
      name: "Actualités",
      url: "/actualities",
    },
    {
      name: "Infos Actualiés",
      url: "/actualities/infos/:name/:id",
    },
  ]);
  const location = useLocation();
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

  console.log(location.pathname);
  useEffect(() => {
    setBreakComb([
      {
        name: "Actualités",
        url: "/actualities",
      },
      {
        name: "Infos Actualiés",
        url: location.pathname,
      },
    ]);
  }, []);

  return (
    <>
      <Header />
      <Banner title={title} />
      <BreakComb data={breakComb} />
      <InfosActuality />
      <Partner />
      <Footer />
    </>
  );
};

export default actualityInfos;
