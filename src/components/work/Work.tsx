import React from "react";
import Img10 from "../../assets/pictures/img10.jpg";
import { FaIndustry } from "react-icons/fa";
import "./work.css";
import Experience from "../../assets/pictures/experience.svg";

const Work = () => {
  return (
    <div className="container work">
      <div className="work-about">
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Sécurité</h3>
          </div>
        </div>
        <div className="card-about">
          <span>
            {/* <FaIndustry /> */}
            <img src={Experience} alt="" />
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
            <h3>Fiabilité</h3>
          </div>
        </div>
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Durabilité</h3>
          </div>
        </div>
      </div>
      <div className="work-content">
        <h2>Notre objectif</h2>
        <h3>
          Nos standards d'excellence relèvent d'une expertise fondée sur
          l'expérience et d’une équipe dévouée qui a une vision commune : offrir
          des services et produits en hydraulique qui répondent à vos besoins, à
          vos attentes.
          <br />
          <br />
          Augmentez la productivité de vos installations hydrauliques!
          Bénéficiez de notre expertise et d’une large gamme de services et
          produits offerts ! N'hésitez plus{" "}
          <a href="/contact">contactez nous</a>.
        </h3>
      </div>
      <div className="work-img">
        <img src={Img10} alt="" />
      </div>
    </div>
  );
};

export default Work;
