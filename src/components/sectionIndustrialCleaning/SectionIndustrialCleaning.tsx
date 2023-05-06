import React from "react";
import "./sectionIndustrialCleaning.css";
import { FaCheckCircle } from "react-icons/fa";
import Img1 from "../../assets/cleaning/image2.png";

const SectionIndustrialCleaning = () => {
  return (
    <div className="container rent-engine">
      <div className="rent-engine-content">
        <h2>Nettoyage industriel</h2>
        <div className="rent-engine-card">
          <p>
            MAINGER'S - Nettoyage industriel est votre partenaire indiqué pour
            tous vos travaux de nettoyage industriel OFFSHORE / ONSHORE.
          </p>
        </div>
        <ul>
          <h2>ONSHORE : </h2>
          {onShort.map((data, index) => (
            <li key={`section-rent-engine-${index}`}>
              <span>
                <FaCheckCircle />
              </span>
              {data}
            </li>
          ))}
        </ul>
        <ul>
          <h2>OFFSHORE : </h2>
          {offShort.map((data, index) => (
            <li key={`section-rent-engine-${index}`}>
              <span>
                <FaCheckCircle />
              </span>
              {data}
            </li>
          ))}
        </ul>
      </div>
      <div className="rent-engine-img">
        <img src={Img1} alt="" />
      </div>
    </div>
  );
};

const onShort = [
  "Inspection & Maintenance des TUBINGS NEUFS",
  "Inspection , Maintenance & Nettoyage des TUBINGS USAGES.",
];
const offShort = [
  "Nettoyage des plateformes",
  "Nettoyage des capacités",
  "Nettoyage des faisceaux",
  "Nettoyage des bacs etc",
  "Traitement et évacuation des boues...",
];

export default SectionIndustrialCleaning;
