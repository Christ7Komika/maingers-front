import "./actualitiesItems.css";
import Image from "../../assets/pictures/img13.jpg";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  datas: {
    id: number;
    title: string;
    content: string;
    img: string;
  }[];

  type: {
    ready: boolean;
    load: boolean;
    podcast: boolean;
    event: boolean;
  };
}

const ActualitiesItems = ({ datas, type }: Props) => {
  const [state, setState] = useState("");
  const limitText = (text: string) => {
    if (text.length > 45) {
      return text.substring(0, 45) + "...";
    }
    return text;
  };
  useEffect(() => {
    if (type.ready) return setState("ready");
    if (type.load) return setState("load");
    if (type.podcast) return setState("podcast");
    if (type.event) return setState("event");
  }, [type]);
  return (
    <div className="actualities__items__container">
      <div className="actualities__items__grid">
        {datas.map((data, id) => (
          <div className="actualities__item" key={"actualities__item__" + id}>
            <div className="actualities_img">
              <img src={data.img} alt="" />
            </div>
            <div className="actialities__infos">
              <h2>{data.title}</h2>
              <p>{limitText(data.content)}</p>
            </div>
            <div className="actualities__footer">
              <Link to={`/actualities/infos/${state}/${data.id}`}>
                Voir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActualitiesItems;
