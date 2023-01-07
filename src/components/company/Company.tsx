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
          MAINGER'S-HYDRAULIC & SERVICES est une entreprise spécialisée sur le
          conseil, la confection, la pose, l'inspection et la vente de flexible
          hydraulique.
        </h3>
        <p>
          En outre MAINGER'S-HYDRAULIC & SERVICES propose d'autre services dont
          le nettoyage industriel et la location des engins élévateur et
          semi-remorque.
        </p>
        <button>
          <FaArrowRight />
          EN SAVOR PLUS
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
        <div className="company-second-img">
          <img src={Img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
