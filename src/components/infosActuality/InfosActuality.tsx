import { useParams } from "react-router-dom";
import "./infosActuality.css";
import { actualities } from "../../data/actualities";
import { useEffect, useState } from "react";

type NAME = "ready" | "load" | "podcast" | "event";

const InfosActuality = () => {
  const [actualitie, setActualitie] = useState<any>([]);
  const { name, id } = useParams();

  useEffect(() => {
    if (name && id) {
      let value = name as NAME;
      const current = actualities[value];
      const data = [current.filter((v) => v.id === parseInt(id)).flat(2)];
      setActualitie(data[0][0]);
    }
  }, []);
  return (
    <div className="infos__actuality">
      <div className="infos_actuality__img">
        <img src={actualitie.img} alt={"img" + actualitie.id} />
      </div>
      <div className="infos__actuality_content">
        <h2>{actualitie.title}</h2>
        <p>{actualitie.content}</p>
      </div>
    </div>
  );
};

export default InfosActuality;
