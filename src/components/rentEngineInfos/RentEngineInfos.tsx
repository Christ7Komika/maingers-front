import React from "react";
import "./rentEngineInfos.css";
import Img from "../../assets/engins/engins1.jpg";
import { Link } from "react-router-dom";

const RentEngineInfos = () => {
  return (
    <div className="container rent-engine-infos">
      <div className="rent-engine-infos-content">
        <h2>LOCATION ENGINS ELEVATEUR</h2>
        <p>
          Pour tous vos besoins de transport et manutention de charges, MH
          propose la location de chariot élévateur, chariot télescopique et bien
          d'autres. Nos engins sont capables de répondre à n'importe quel besoin
          en termes de transport et de manutention de charges. Ces engins de
          manutention sont utilisés dans tous les secteurs d'activité. N'hésitez
          pas , <Link to="/contact">contactez nous</Link> nous ou Visitez-nous
          pour voir l'ensemble de nos produits en location.
        </p>
      </div>
      <div className="rent-engine-infos-img">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default RentEngineInfos;
