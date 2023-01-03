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
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 1 ",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
        &Aspect toilé à partir du diamètre intèrieur 19
        &Résistant aux intempéries, détergents et produits
        &Chimiques dilués.
        &Température: -25°c à +70°c
        &Homologations: EN ISO 1403`,
        IdTableau: 1,
      },
      {
        id: 2,
        name: "VODA 10",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 2",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
        &Aspect toilé à partir du diamètre intèrieur 19
        &Résistant aux intempéries, détergents et produits
        &Chimiques dilués.
        &Température: -25°c à +70°c
        &Homologations: EN ISO 1403`,
        IdTableau: 2,
      },
      {
        id: 3,
        name: "VODA 25",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU SUIVANT ISO 1403 TYPE 3",
        application:
          "Tuyau polyvalent pour le refoulement d'eau et de produits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
        &Aspect toilé à partir du diamètre intèrieur 19
        &Résistant aux intempéries, détergents et produits
        &Chimiques dilués.
        &Température: -25°c à +70°c
        &Homologations: EN ISO 1403`,
        IdTableau: 3,
      },
      {
        id: 4,
        name: "NERO",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT D'EAU SUIVANT ISO 4641 TYPE 2",
        application:
          "Tuyau polyvalent pour l'aspiration et le refoulement d'eau et de produits chimiques légers.Dépression 0.08 Mpa&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile et spirale métallique (1 ou 2)
        &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
        &Aspect toilé à partir du diamètre intèrieur 19
        &Résistant aux intempéries, détergents et produits
        &Chimiques dilués.
        &Température: -30°c à +100°c
        &Homologations: EN ISO 4640`,
        IdTableau: 4,
      },
      {
        id: 5,
        name: "STAL",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'EAU REVETEMENT FIBRE DE VERRE",
        application:
          "Tuyau de refoulement dans la sidérurgie ou la verrerie.Peut aussi servir de gaine de protection de câbles ou d'autres tuyaux",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR - Fibre de verre vulcanisée
        &Température: -30°c à +100°c
        &Résistance du revêtement à la chaleur: + 600°c
        &Pointes à 1000°c`,
        IdTableau: 5,
      },
      {
        id: 6,
        name: "THERMA A",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE LIQUIDE DE REFROIDISSEMENT DIN 73411",
        application:
          "Tuyau pour le refoulement de liquide de refroidissement Automobile, Poids lourds, Travaux publics et industrie",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Textile
        &Revêtement: EPDM/SBR aspect lisse
        Résistant aux intempéries
        &Température: -35°c à +125°c
        &Homologations: DIN 73411`,
        IdTableau: 6,
      },
      {
        id: 7,
        name: "THERMA B",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE LIQUIDE DE REFROIDISSEMENT DIN 73411",
        application:
          "Tuyau pour le refoulement de liquide de refroidissement Automobile, Poids lourds, Travaux publics et industrie",
        caracteristique: `Tube : EPDM
        &Renforcement: Textile
        &Revêtement: EPDM
        Résistant aux intempéries
        &Température: -35°c à +145°c
        &Homologations: DIN 73411`,
        IdTableau: 7,
      },
    ],
  },
  {
    id: 2,
    type: "AIR",
    data: [
      {
        id: 1,
        name: "AIR 10",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 1 CLASSE A ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse ou toilé
        &Résistant aux intempéries.
        &Température: -40°c à +70°c
        &Homologations: EN ISO 2398 Type 1 Classe A`,
        IdTableau: 8,
      },
      {
        id: 2,
        name: "AIR 16",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 2 CLASSE A ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: EPDM/SBR
        &Résistant aux intempéries.
        &Température: -40°c à +70°c
        &Homologations: EN ISO 2398 Type 2 Classe A`,
        IdTableau: 9,
      },
      {
        id: 3,
        name: "AIR 16",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 2 CLASSE C ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: NBR noir, aspect lisse ou toilé, résistant au huiles
        &Résistant aux intempéries.
        &Température: -40°c à +70°c
        &Homologations: EN ISO 2398 Type 2 Classe C`,
        IdTableau: 10,
      },
      {
        id: 4,
        name: "AIR 25",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT ISO 2398 TYPE 3 CLASSE C ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Plis textile
        &Revêtement: NBR noir, aspect lisse ou toilé, résistant aux huiles
        &Résistant aux intempéries.
        &Température: -40°c à +70°c
        &Homologations: EN ISO 2398 Type 3 Classe C`,
        IdTableau: 11,
      },
      {
        id: 5,
        name: "WELD O&OXYGENE",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'OXYGENE SUIVANT EN 559 - ISO 3821 ",
        application:
          "Tuyau de refoulement d'air comprimé, eau et de prodruits chimiques légers.&Adapté à tous les secteurs, industrie, bâtiment, travaux publics, agriculture, chimie.",
        caracteristique: `Tube : SBR noir lisse
        &Renforcement: Textile
        &Revêtement: EPDM/SBR bleu, aspect lisse
        &Température: -30°c à +70°c
        &Homologations: EN 559 - ISO 3821`,
        IdTableau: 12,
      },
      {
        id: 6,
        name: "WELD A&ACETYLENE",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'OXYGENE ET/OU D'ACETYLENE SUIVANT EN 559 - ISO 3821 ",
        application:
          "Tuyau de refoulement d'acétylène, application de soudage ou d'oxycoupage",
        caracteristique: `Tube : SBR noir lisse
        &Renforcement: Textile
        &Revêtement: EPDM/SBR rouge, aspect lisse
        &Température: -30°c à +70°c
        &Homologations: EN 559 - ISO 3821`,
        IdTableau: 13,
      },
      {
        id: 7,
        name: "WELD O/A&OXYGENE - ACETYLENE",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'OXYGENE ET D'ACETYLENE SUIVANT EN 559 - ISO 3821 ",
        application:
          "Tuyau de refoulement d'acétylène, application de soudage ou d'oxycoupage",
        caracteristique: `Tube : SBR noir lisse
        &Renforcement: Textile
        &Revêtement: EPDM/SBR rouge, aspect lisse
        &Température: -30°c à +70°c
        &Homologations: EN 559 - ISO 3821`,
        IdTableau: 14,
      },
      {
        id: 8,
        name: "AIR DIN",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT DIN 20018 ",
        application: "Tuyau de refoulement d'air comprimé et d'eau",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Tresse ou plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse et toilé
        &Résistant aux intempéries, détergents et produits chimiques dilués.
        &Température: -30°c à +50°c
        &Homologations: DIN 20018`,
        IdTableau: 15,
      },
    ],
  },
  {
    id: 3,
    type: "HYDROCARBURES",
    data: [
      {
        id: 1,
        name: "AIR DIN",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'AIR COMPRIME OU D'EAU SUIVANT DIN 20018 ",
        application: "Tuyau de refoulement d'air comprimé et d'eau",
        caracteristique: `Tube : EPDM/SBR noir lisse
        &Renforcement: Tresse ou plis textile
        &Revêtement: EPDM/SBR noir, aspect lisse et toilé
        &Résistant aux intempéries, détergents et produits chimiques dilués.
        &Température: -30°c à +50°c
        &Homologations: DIN 20018`,
        IdTableau: 16,
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
