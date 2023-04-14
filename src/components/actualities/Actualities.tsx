import { useEffect, useState } from "react";
import ActualitiesItems from "../actualitiesItems/ActualitiesItems";
import "./actualities.css";
import { actualities } from "../../data/actualities";

const Actualities = () => {
  const [select, setSelect] = useState({
    ready: true,
    load: false,
    podcast: false,
    event: false,
  });
  const [hidden, setHidden] = useState({
    ready: true,
    load: true,
    podcast: true,
    event: true,
  });

  const [datas, setDatas] = useState(actualities.ready);

  useEffect(() => {
    setHidden({
      ready: actualities.ready.length >= 1 ? false : true,
      load: actualities.load.length >= 1 ? false : true,
      podcast: actualities.podcast.length >= 1 ? false : true,
      event: actualities.event.length >= 1 ? false : true,
    });
  }, []);

  useEffect(() => {
    if (select.ready) {
      setDatas([...actualities.ready]);
    }
    if (select.load) {
      setDatas([...actualities.load]);
    }
    if (select.podcast) {
      setDatas([...actualities.podcast]);
    }
    if (select.event) {
      setDatas([...actualities.event]);
    }
  }, [select]);

  const getClass = (name: "ready" | "load" | "podcast" | "event") => {
    if (!hidden[name]) {
      if (select[name]) {
        return "actuality__section selected";
      }
      return "actuality__section";
    }
    return "actuality__section hidden";
  };

  return (
    <div className="actualities__container">
      <div className="actualities__aside">
        <div
          className={getClass("ready")}
          onClick={() => {
            if (!hidden.ready) {
              setSelect({
                ready: true,
                load: false,
                podcast: false,
                event: false,
              });
            }
          }}
        >
          <p>Projet réalisé</p>
        </div>
        <div
          className={getClass("load")}
          onClick={() => {
            if (!hidden.load) {
              setSelect({
                ready: false,
                load: true,
                podcast: false,
                event: false,
              });
            }
          }}
        >
          <p>Projet en cours</p>
        </div>
        <div
          className={getClass("podcast")}
          onClick={() => {
            if (!hidden.podcast) {
              setSelect({
                ready: false,
                load: false,
                podcast: true,
                event: false,
              });
            }
          }}
        >
          <p>Projet podcast</p>
        </div>
        <div
          className={getClass("event")}
          onClick={() => {
            if (!hidden.event) {
              setSelect({
                ready: false,
                load: false,
                podcast: false,
                event: true,
              });
            }
          }}
        >
          <p>Evènementiel</p>
        </div>
      </div>
      <ActualitiesItems datas={datas} type={select} />
    </div>
  );
};

export default Actualities;

/**
 *
 * Podcast
 *
 */
