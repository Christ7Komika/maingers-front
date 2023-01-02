import React, { useState } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import Flexible from "../../assets/flexibles/flexibles.png";
const CustomSelect = React.lazy(() => import("../input/CustomSelect"));
import "./typeFlexible.css";

const data = [
  {
    id: 1,
    type: "Eau",
    data: [
      {
        id: 1,
        name: "VODA 6",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 1 & WATER DELIVERY RUBBER HOSE - ISO 1403 TYPE 1",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
        &Aspect toilé à partir du diamètre intèrieur 19
        &Resistant aux intempéries, détergents et produits
        &Chimiques dilués.
        &Température: -25°c à +70°c
        &Homologations: EN ISOS 1403`,
        IdTableau: 1,
      },
      {
        id: 2,
        name: "VODA 10",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 2 & WATER DELIVERY RUBBER HOSE - ISO 1403 TYPE 2",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
        &Aspect toilé à partir du diamètre intèrieur 19
        &Resistant aux intempéries, détergents et produits
        &Chimiques dilués.
        &Température: -25°c à +70°c
        &Homologations: EN ISOS 1403`,
        IdTableau: 2,
      },
    ],
  },
];

const TypeFlexible = () => {
  const [norme, setNorme] = useState(null);
  const [name, setName] = useState(null);
  return (
    <div className="container type-flexible">
      <div className="flexible-type-header">
        <h2>Flexibles a eau</h2>
        <form className="flexible-type-filter">
          <div className="search-bar">
            <span>
              <FaSearch />
            </span>
            <input type="text" />
          </div>
          <CustomSelect
            placeholder="Norme ISO"
            labelExtractor={(item: { name: string }) => item.name}
            keyExtractor={(item: { id: number }) => item.id}
            valueExtractor={(item: { id: number }) => item.id}
            data={data}
            getValue={setNorme}
          />
          <button>Filtrer</button>
        </form>
      </div>
      <div className="flexible-type-cards">
        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeFlexible;
