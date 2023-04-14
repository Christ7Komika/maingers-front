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
            <h3>Why do we use it?</h3>
          </div>
          <p>
            En outre, Mainger’s Hydraulic dispose d'un parc de location d'engins
            élévateurs de haute qualité pour répondre aux besoins de ses
            clients. Les clients peuvent louer des engins élévateurs pour des
            projets à court ou long terme, avec la garantie de recevoir des
            équipements de haute qualité et une assistance technique
            professionnelle.
          </p>
        </div>
        <div className="valor-card">
          <div className="valor-card-header">
            <span>
              <FaVials />
            </span>
            <h3>Why do we use it?</h3>
          </div>
          <p>
            Grâce à son expertise de pointe, Mainger’s Hydraulic a réussi à se
            différencier de ses concurrents et à établir un réseau de clients
            satisfaits à travers la République du Congo et au-delà. En plus de
            son siège social à Pointe Noire, Mainger’s Hydraulic possède
            également un pôle à Dakar, au Sénégal, pour servir ses clients de la
            région de l'Afrique de l'Ouest.
          </p>
        </div>
        <div className="valor-card">
          <div className="valor-card-header">
            <span>
              <FaVials />
            </span>
            <h3>Why do we use it?</h3>
          </div>
          <p>
            Avec son engagement envers l'excellence, Mainger’s Hydraulic est
            fière de servir ses clients avec des solutions hydrauliques de
            qualité supérieure, une assistance technique professionnelle et une
            expérience de location d'engins élévateurs sans faille.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valor;
