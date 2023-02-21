import React from "react";
import "./industrialCleaningInfos.css";
import Img from "../../assets/cleaning/image2.png";
import { FaCheckCircle } from "react-icons/fa";

const IndustrialCleaningInfos = () => {
  return (
    <div className="industrial-cleaning-infos">
      <h2>NETTOYAGE HAUTE PRESSION PIPE</h2>
      <div className="industrial-cleaning-container">
        <div className="industrial-cleaning-infos-img">
          <img src={Img} alt="" />
        </div>
        <div className="industrial-cleaning-infos-content">
          <p>
            MAINGER'S HYDRAULIC met à votre disposition un personnel qualifié,
            bénéficiant d'une solide expérience et rassemblant des compétences
            variées dans le néttoyage de plateforme, de capacités ou
            séparateurs, néttoyage de faisceaux ou échangeurs, néttoyage des
            bacs de stockage, néttoyage de tuyauteries et pompes, néttoyage des
            scrubbers et condenseur, décapage des zones souillées, curage et
            néttoyage des drains, déparaffinage des têtes de puits, etc...
          </p>
          <h3>
            Avec la THP (Très Haute Pression), nous réalisons des opérations de:
          </h3>
          <ul>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Décapage de métaux, enlèvement des peintures
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Condenseur, faisceaux échangeurs, tuyauteries et canalisations,
              surfaces métalliques, cabine peinture, aéroréfrigérants, capacités
              bacs, réacteurs pétrochimique, travaux maritimes
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Enlèvement caoutchouc, résines, additifs
            </li>
          </ul>

          <ul>
            <h3>
              En utilisant la technique la plus adaptée à la problématique :{" "}
            </h3>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Haute pression 50 à 500 bars (2 à 95°C)
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Trés haute pression
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              500 bars 80 litres/minute eau de mer
            </li>
            <li>
              <span>
                <FaCheckCircle />
              </span>
              Ultra haute pression 50 bars à 500 bars
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCleaningInfos;
