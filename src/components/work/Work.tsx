import React from "react";
import Img10 from "../../assets/pictures/img10.jpg";
import { FaIndustry } from "react-icons/fa";
import "./work.css";

const Work = () => {
  return (
    <div className="container work">
      <div className="work-about">
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Experience</h3>
          </div>
        </div>
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Fiabilité</h3>
          </div>
        </div>
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Qualité</h3>
          </div>
        </div>
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>satisfaction</h3>
          </div>
        </div>
      </div>
      <div className="work-content">
        <h2>Nos objectifs</h2>
        <h3>
          Notre entreprise vise à atteindre plusieurs objectifs importants afin
          de garantir le succès à long terme de l'entreprise et de répondre aux
          besoins de nos clients. Ces objectifs incluent l'augmentation de la
          productivité, l'amélioration de la qualité de nos produits, la
          réduction de nos coûts de production, l'augmentation de nos ventes, la
          diversification de notre gamme de produits et l'amélioration de la
          satisfaction de nos clients.
        </h3>
      </div>
      <div className="work-img">
        <img src={Img10} alt="" />
      </div>
    </div>
  );
};

export default Work;
