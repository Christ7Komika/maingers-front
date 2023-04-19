import React from "react";
import { FaIndustry, FaArrowRight } from "react-icons/fa";
import Img6 from "../../assets/pictures/img6.jpg";
import Img7 from "../../assets/pictures/img7.jpg";
import "./company.css";

const Company = () => {
  return (
    <div className="container company">
      <div className="company-content">
        <h2>QUI SOMME NOUS ?</h2>
        <h3>
          MH, votre entreprise industrielle leader depuis 2005 engagée pour un
          avenir durable.
        </h3>
        <p>
          Nous proposons une gamme complète de connectiques hydrauliques et
          industrielles pour les secteurs d'activités : Travaux publics,
          Industrie, Poids Lourds, Manutention, Levage, Agricole & Location.
        </p>
        <button>
          <FaArrowRight />
          <a href="/about">EN SAVOR PLUS</a>
        </button>
      </div>
      <div className="company-img">
        <div className="company-first-img">
          <div className="company-infos">
            <span>
              <FaIndustry />
            </span>
            <p>MH Votre partenaire</p>
          </div>
          <img src={Img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
