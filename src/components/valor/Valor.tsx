import React from "react";
import { FaVials } from "react-icons/fa";
import "./valor.css";

const Valor = () => {
  return (
    <div className="container valor">
      <div className="valor-img"></div>
      <div className="valor-content">
        <div className="valor-card">
          <div className="valor-card-header">
            <span>
              <FaVials />
            </span>
            <h3>Pourquoi nous choisir ?</h3>
          </div>
          <p>
            Mainger’s Hydraulic dispose d'un parc de location d'engins
            élévateurs de haute qualité pour répondre à tous besoins de ses
            clients. Vous pouvez louer des engins élévateurs pour des projets à
            court ou long terme, avec la garantie de recevoir des équipements de
            haute qualité et une assistance technique professionnelle.
          </p>
        </div>
        <div className="valor-card">
          <div className="valor-card-header">
            <span>
              <FaVials />
            </span>
            <h3>Pourquoi utiliser nos services ?</h3>
          </div>
          <p>
            Grâce à notre expertise de pointe, Mainger’s Hydraulic a réussi à se
            différencier de ses concurrents et à établir un réseau de clients
            satisfaisant en République du Congo et ailleurs. En plus de son
            siège social à Pointe Noire, Mainger’s Hydraulic possède également
            un pôle à Dakar, au Sénégal, pour servir ses clients dans la région
            de l'Afrique de l'Ouest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valor;
