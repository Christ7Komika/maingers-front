import React from "react";
import "./sectionRentEngine.css";
import { FaCheckCircle } from "react-icons/fa";

const SectionRentEngine = () => {
  return (
    <div className="container rent-engine">
      <div className="rent-engine-content">
        <h2>Néttoyage industriel</h2>
        <div className="rent-engine-card">
          <p>
            MAINGER'S - Néttoyage industriel est votre partenaire indiqué pour
            tout vos travaux de néttoyage industriel OFF / ON SHORT. Spécialisé
            dans les différents types de travaux et de prestations
          </p>
        </div>
        <ul>
          <h2>ON SHORT</h2>
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
          <h2>OFF SHORT</h2>
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
      <div className="rent-engine-img"></div>
    </div>
  );
};

const onShort = [
  "Inspection & Maintenance des TUBINGS NEUFS",
  "Inspection , Maintenance & Néttoyage des TUBINGS USAGES",
];
const offShort = [
  "Néttoyage des plateformes",
  "Néttoyage des capacités",
  "Néttoyage des faisceaux",
  "Néttoyage des bacs etc",
  "Traitement et évacuation des boues...",
];

export default SectionRentEngine;
