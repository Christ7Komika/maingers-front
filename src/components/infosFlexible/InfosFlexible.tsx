import React from "react";
import { v4 as uuid } from "uuid";
import "./infosFlexible.css";

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
  return (
    <div className="container flexible-infos">
      <h2>Name : Voda 01</h2>
      <h3>Norme ISO 1025</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut porro
        rerum quas vitae incidunt temporibus tempora aspernatur velit mollitia!
      </p>
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
      <div className="flexible-infos-desc">
        <h3>Application</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          odit minima eveniet, natus hic dicta.
        </p>
      </div>
      <div className="flexible-infos-desc">
        <h3>Caractéristique technique</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, modi
          magni voluptate necessitatibus vel recusandae maxime placeat? Aliquam
          tempora quae labore nulla, explicabo maxime doloribus.
        </p>
      </div>
    </div>
  );
};

export default InfosFlexible;
