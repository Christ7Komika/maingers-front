import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./infosFlexible.css";
import { useParams } from "react-router-dom";
import {
  TYPE_FLEXIBLE,
  flexibleTypeData,
  flexiblesTableData,
} from "../../data/flexibleType";

const datas = {
  head: {
    title: [
      "Reference",
      "Diamètre interieur",
      "Epaisseur parois",
      "Diamètre exterieur",
      "Pression de service",
      "PLNE",
      "Rayon de courbure",
      "Poids",
      "Longueur",
    ],
    measure: ["", "mm", "mm", "mm", "bar", "bar", "mm", "Kg/ml", "m"],
  },
  value: [
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
    ["IVA17706012501", "13", "5.1", "23.2", "6", "60", "117", "0.35", "20"],
  ],
};

const InfosFlexible = () => {
  const { data: idTab, type: idType } = useParams<{
    data: string;
    type: string;
  }>();
  const [flexibles, setFlexibles] = useState(flexibleTypeData);
  const [flexiblesTable, setFlexiblesTable] = useState(flexiblesTableData);
  const [flexible, setFlexible] = useState<null | TYPE_FLEXIBLE>();
  const [flexibleTable, setFlexibleTable] = useState<null | any>();

  useEffect(() => {
    const flexibleInfos = flexibles.filter(
      (data) => data.id.toString() == idType
    );
    setFlexible(flexibleInfos.flat()[0]);
  }, []);

  useEffect(() => {
    const tabData = flexible?.data.filter(
      (data) => data.IdTableau.toString() === idTab
    );
    setFlexibleTable(tabData?.flat()[0]);
  }, [flexible]);

  return (
    <div className="container flexible-infos">
      <h2>Name : {flexibleTable?.name}</h2>
      <p>{flexibleTable?.def}</p>
      <div className="flexible-infos-tab">
        <table>
          <thead>
            <tr>
              {datas.head.title.map((data) => (
                <th id={uuid()}>{data}</th>
              ))}
            </tr>
            <tr>
              {datas.head.measure.map((data) => (
                <th id={uuid()}>{data}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.value.map((data) => (
              <tr id={uuid()}>
                {data.map((value) => (
                  <td id={uuid()}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* APPLICATION */}
      {flexibleTable?.application && (
        <div className="flexible-infos-desc">
          <h3>Application</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.application?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CARACTERISTIQUE TECHNIQUE */}
      {flexibleTable?.caracteristique && (
        <div className="flexible-infos-desc">
          <h3>Caractéristique technique</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.caracteristique
              ?.split("&")
              ?.map((value: string) => (
                <li>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* TUBE */}
      {flexibleTable?.tube && (
        <div className="flexible-infos-desc">
          <h3>Tube</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.tube?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ARMATURE */}
      {flexibleTable?.armature && (
        <div className="flexible-infos-desc">
          <h3>Armature</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.armature?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* REVETEMENT */}
      {flexibleTable?.revetement && (
        <div className="flexible-infos-desc">
          <h3>Revêtement</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.revetement?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* UTILISATION */}
      {flexibleTable?.utilisation && (
        <div className="flexible-infos-desc">
          <h3>Utilisation</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.utilisation?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* C.D.S */}
      {flexibleTable?.cds && (
        <div className="flexible-infos-desc">
          <h3>C.d.S</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.cds?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* TEMPERATURE */}
      {flexibleTable?.temperature && (
        <div className="flexible-infos-desc">
          <h3>Température</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.temperature?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* TEMPERATURE EN CONTINU */}
      {flexibleTable?.temperatureContinu && (
        <div className="flexible-infos-desc">
          <h3>Température en continu</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.temperatureContinu
              ?.split("&")
              ?.map((value: string) => (
                <li>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* TEMPERATURE MAXI */}
      {flexibleTable?.temperatureMaxi && (
        <div className="flexible-infos-desc">
          <h3>Température maxi</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.temperatureMaxi
              ?.split("&")
              ?.map((value: string) => (
                <li>{value}</li>
              ))}
          </ul>
        </div>
      )}

      {/* NORME */}
      {flexibleTable?.norme && (
        <div className="flexible-infos-desc">
          <h3>Norme</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.norme?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {/* OPTION */}
      {flexibleTable?.option && (
        <div className="flexible-infos-desc">
          <h3>Option</h3>
          <ul style={{ listStyleType: "none" }}>
            {flexibleTable?.option?.split("&")?.map((value: string) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfosFlexible;
