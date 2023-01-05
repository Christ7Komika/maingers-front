import React, { useEffect, useState } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import Flexible from "../../assets/flexibles/flexibles.png";
const CustomSelect = React.lazy(() => import("../input/CustomSelect"));
import "./typeFlexible.css";

import { Link } from "react-router-dom";
const filterData = [
  {
    name: "dbvniudvh",
  },
];

const TypeFlexible = () => {
  const [flexibleList, setFlexibleList] = useState(flexibleTypeData);
  const [data, setData] = useState<null | TYPE_FLEXIBLE>(null);
  const [norme, setNorme] = useState(null);
  const [name, setName] = useState(null);
  const id = sessionStorage.getItem("idFlexibleType");

  useEffect(() => {
    const flexible = flexibleList.filter(
      (flexible) => flexible.id.toString() == id
    );
    setData(flexible.flat()[0]);
  }, []);

  const sendFlexibleData = (tabId: string, flexibleId: string) => {
    sessionStorage.setItem("tabId", tabId);
    sessionStorage.setItem("flexibleId", flexibleId);
  };

  return (
    <div className="container type-flexible">
      <div className="flexible-type-header">
        <h2>Flexibles type {data?.type} </h2>
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
            data={filterData}
            getValue={setNorme}
          />
          <button>Filtrer</button>
        </form>
      </div>
      <div className="flexible-type-cards">
        {data?.data.map((flexibleInfos, index) => (
          <div className="flexible-type-card" key={`type-flexible-${index}`}>
            <div className="flexible-type-card-img">
              <img src={Flexible} alt="" />
            </div>
            <div className="flexible-type-card-content">
              <h3>{flexibleInfos?.name}</h3>
              <Link
                to={`/departement/flexibles/type/infos`}
                onClick={() =>
                  sendFlexibleData(
                    flexibleInfos?.IdTableau?.toString(),
                    data?.id.toString()
                  )
                }
              >
                Plus d'infos
                <span>
                  <FaChevronRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
type TYPE_FLEXIBLE = {
  id: number;
  type: string;
  data: any[];
};
const flexibleTypeData = [
  {
    id: 1,
    type: "EAU",
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
        name: "CARBO 10",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES TYPE 10",
        application:
          "Tuyau pour le refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: NBR/PVC aspect toilé
          &Résistant aux intempéries et hautes températures.
          &Température: -30°c à +100°c pointes à 125°c`,
        IdTableau: 16,
      },
      {
        id: 2,
        name: "CARBO 20",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES TYPE 20",
        application:
          "Tuyau pour le refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: NBR/PVC aspect toilé
          &Résistant aux intempéries et hautes températures.
          &Température: -30°c à +100°c pointes à 125°c`,
        IdTableau: 17,
      },
      {
        id: 3,
        name: "NAFTA",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT D'HYDROCARBURES",
        application:
          "Tuyau pour l'aspiration et le refoulement d'hydrocarbures,Essence et huile, Utilisé lorsque les conditions de travail sont difficiles, résiste au vrillage et au pliage",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile et spirale métallique (1 ou 2)
          &Revêtement: NBR/PVC aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c
          &Dépression 0.063 Mpa
          &Fil de masse antistatique`,
        IdTableau: 18,
      },
      {
        id: 4,
        name: "PETRO D",
        img: "",
        def: "TUYAU CAOUTCHOUC  REFOULEMENT D'HYDROCARBURES SUIVANT NORME EN 1761 TYPE D",
        application:
          "Tuyau aspiration refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: CR aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +70°c
          &Dépression 0.063 Mpa
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m
          &Homologation: EN 1761`,
        IdTableau: 19,
      },
      {
        id: 5,
        name: "PETRO S",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT D'HYDROCARBURES SUIVANT NORME EN 1761 TYPE SD",
        application:
          "Tuyau aspiration refoulement d'hydrocarbures, jusqu'à 50% d'aromatiques. Convient pour le bioéthanol jusqu'à 15% d'oxygène et pour le biodiesel (80% de gazole 20% de bio composants)",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: CR aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +70°c
          &Dépression 0.063 Mpa
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m
          &Homologation: EN 1761`,
        IdTableau: 20,
      },
      {
        id: 6,
        name: "STOOM 165",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE VAPEUR 165°C",
        application: "Refoulement d'eau chaude ou de vapeur saturée.",
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +165°c`,
        IdTableau: 21,
      },
      {
        id: 7,
        name: "GPL 25",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE GPL",
        application:
          "Tuyau pour le refoulement de GPL et gaz liquéfié&Remplissage et de déchargement de réservoirs",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: CR aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +70°c
          &2 Fils de masse antistatique
          &Homologations : EN 1762 Type D`,
        IdTableau: 22,
      },
      {
        id: 8,
        name: "BENZIN",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES DIN 73379 TYPE 2A",
        application:
          "Bioéthanol (composés d'oxygène jusqu'à 15%) et biodiesel 80% de tuyau pour les installations de refoulement d'hydrocarbures, sur les véhicules automobiles, teneur en aromatiques jusqu'à 50% de gazol et 20% de bio composants.",
        caracteristique: `Tube : NBR noir lisse
          &Renforcement: Textile
          &Revêtement: NBR/PVC Aspect lisse
          &Résistant aux intempéries et à la température.
          &Température: -30°c à +100°c Pointes à 125°c
          &2 Fils de masse antistatique
          &Homologations : DIN 73379 Type 2A`,
        IdTableau: 23,
      },
      {
        id: 9,
        name: "DIZEL",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT D'HYDROCARBURES DIN 73379 TYPE B",
        application:
          "Tuyau pour les installationsde de refoulement d'hydrocarbures, et d'huiles sur les véhicules automobiles.",
        caracteristique: `Tube : NBR noir lisse
          &Revêtement: Tresse synthétique - Tresse coton
          &Résistant aux intempéries et à la température.
          &Température: -30°c à +85°c 
          &Homologations : DIN 73379 Type B`,
        IdTableau: 24,
      },
    ],
  },
  {
    id: 5,
    type: "CHIMIE",
    data: [
      {
        id: 1,
        name: "KEMIA END",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE PRODUITS CHIMIQUES SUIVANT EN 12115 TYPE D",
        application: `Tuyau pour le refoulement de produits chimiques
            &Acides et bases.
            &Acide nitrique à 20%
            &Acide sulfurique jusqu'a 80%
            &Acide chlorhydrique jusqu'à 36%
            &Hydroxyde de sodium, Acide acétique, Ammoniac toutes concentrations`,
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile type D
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries
          &Température: -30°c à +65°c
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m`,
        IdTableau: 25,
      },
      {
        id: 2,
        name: "KEMIA ENS",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS CHIMIQUES SUIVANT EN 12115 TYPE SD",
        application: `Tuyau pour l'aspiration et le refoulement de produits chimiques
            &Acides et bases.
            &Acide nitrique à 20%
            &Acide sulfurique jusqu'a 80%
            &Acide chlorhydrique jusqu'à 36%
            &Hydroxyde de sodium, Acide acétique, Ammoniac toutes concentrations`,
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile et spirale métallique type SD
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries
          &Température: -30°c à +65°c
          &Type S/D Dépression admissible - 0.09 Mpa
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m`,
        IdTableau: 26,
      },
      {
        id: 3,
        name: "KEMIA ECS",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS CHIMIQUES ",
        application: `Tuyau pour l'aspiration et le refoulement de produits chimiques
            &Acides et bases.
            &Acide nitrique à 20%
            &Acide sulfurique jusqu'a 80%
            &Acide chlorhydrique jusqu'à 36%
            &Hydroxyde de sodium, Acide acétique, Ammoniac toutes concentrations`,
        caracteristique: `Tube : EPDM noir lisse
          &Renforcement: Plis textile type D
          &Revêtement: EPDM aspect toilé
          &Résistant aux intempéries
          &Température: -30°c à +65°c
          &2 Fils de masse antistatique
          &Résistant électrique 10^6 Ω/m`,
        IdTableau: 27,
      },
    ],
  },
  {
    id: 6,
    type: "ALIMENTAIRE",
    data: [
      {
        id: 1,
        name: "GIDA",
        img: "",
        def: "TUYAU CAOUTCHOUC REFOULEMENT DE PRODUITS ALIMENTAIRES ",
        application: `Transfert de produits alimentaires dans les tuyaux sans saveur ni odeur
          &Nourriture acide pH ≤ 4,5
          &Alcool teneur maximum 96%`,
        caracteristique: `Tube : EPDM blanc lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR bleu, rouge ou blanc, aspect toilé
          &Résistant aux intempéries, détergents et produits chimiques diluées.
          &Température: -30°c à +70°c pointes à 140°c pendant la période de néttoyage à la vapeur`,
        IdTableau: 28,
      },
      {
        id: 2,
        name: "IKEL",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS ALIMENTAIRES ",
        application: `Transfert de produits alimentaires dans les tuyaux sans saveur ni odeur
          &Nourriture acide pH ≤ 4,5
          &Alcool teneur maximum 96%`,
        caracteristique: `Tube : EPDM blanc lisse
          &Renforcement: Plis textile et spiral métallique
          &Revêtement: EPDM/SBR bleu, rouge ou blanc, aspect toilé
          &Résistant aux intempéries, détergents et produits chimiques diluées.
          &Température: -30°c à +70°c pointes à 140°c pendant la période de néttoyage à la vapeur`,
        IdTableau: 29,
      },
    ],
  },
  {
    id: 7,
    type: "PROJECTION",
    data: [
      {
        id: 1,
        name: "GYPSO 40",
        img: "",
        def: "TUYAU CAOUTCHOUC DE PROJECTION ET DE GUNITAGE",
        application: `Projection de produits abrasifs divers tels que:
          &Mortier, Béton mélangé, Enduits
          &Indice d'abrasion 70 ou 40 mm^3`,
        caracteristique: `Tube : SBR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -35°c à +60°c`,
        IdTableau: 30,
      },
      {
        id: 2,
        name: "SAND",
        img: "",
        def: "TUYAU CAOUTCHOUC POUR LE SABLAGE",
        application: `Refoulement de sable ou grenaille
          &Indice d'abrasion 70 ou 40 mm^3`,
        caracteristique: `
          Tube : BR/NR noir lisse
          &Renforcement: Plis textile
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c`,
        IdTableau: 31,
      },
      {
        id: 3,
        name: "GRIT 70",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS ABRASIFS",
        application: `Tuyau aspiration refoulement de produits abrasifs
          &Sable, gravier, limaille etc.`,
        caracteristique: `
          Tube : BR/NR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c
          &2 Fils de masse métallique
          &Résistant électrique 10^6 Ω/m
          &Dépression 0.063 Mpa
          Indice d'abrasion : 70mm3`,
        IdTableau: 32,
      },
      {
        id: 4,
        name: "GRIT 40",
        img: "",
        def: "TUYAU CAOUTCHOUC ASPIRATION REFOULEMENT DE PRODUITS ABRASIFS",
        application: `Tuyau aspiration refoulement de produits abrasifs
          &Sable, gravier, limaille etc.`,
        caracteristique: `
          Tube : BR/NR noir lisse
          &Renforcement: Plis textile et spirale métallique
          &Revêtement: EPDM/SBR noir aspect toilé
          &Résistant aux intempéries.
          &Température: -30°c à +60°c
          &2 Fils de masse métallique
          &Résistant électrique 10^6 Ω/m
          &Dépression 0.063 Mpa
          Indice d'abrasion : 40mm3`,
        IdTableau: 33,
      },
    ],
  },
  {
    id: 8,
    type: "COMPOSITE - POLYFILMS",
    data: [
      {
        id: 1,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'HYDROCARBURES - 10 BAR",
        tube: "Acier galvanise",
        armature: "Film polypropylène",
        revetement:
          "Tissu enduit pvc gris bande de marquage jaune acier galvanise",
        utilisation:
          "Aspiration et refoulement d'hydrocarbures spécialement conçu pour dépotage d'hydrocarbures par camions citernes",
        cds: "4:1",
        temperature: "-30°c / +80°c (-22°F / +176°F)",
        norme: "BS 5842",
        IdTableau: 34,
      },
      {
        id: 2,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'HYDROCARBURES - 14 BAR",
        tube: "Acier galvanise",
        armature: "Film polyester",
        revetement: "Tissu enduit pvc gris bande de marquage jaune",
        utilisation:
          "Aspiration et refoulement d'hydrocarbures spécialement conçu pour utilisation intensive et sévère nécessitant une résistance aux température élevées",
        cds: "4:1",
        temperature: "-30°c / +100°c (-22°F / +212°F)",
        norme: "BS 5842",
        IdTableau: 35,
      },
      {
        id: 3,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'ACIDES ET PRODUITS CHIMIQUES - 10 BAR",
        tube: "Fil acier revêtu polypropylène",
        armature: "Film polypropylène",
        revetement: "Tissu enduit pvc gris bande de marquage blanche",
        utilisation:
          "Aspiration et refoulement de produits chimiques - spécialement conçu pour dépotage de produits chimiques par camions citernes",
        cds: "4:1",
        temperature: "-30°c / +80°c (-22°F / +176°F)",
        norme: "BS 5842",
        IdTableau: 36,
      },
      {
        id: 4,
        name: "COMPOSITE - POLYFILMS",
        img: "",
        def: "ASPIRATION ET REFOULEMENT D'ACIDES ET PRODUITS CHIMIQUES - 14 BAR",
        tube: "Fil acier inoxydable 316L",
        armature: "Film ptfe",
        revetement:
          "Tissu enduit pvc gris bande de marquage blanche fil acier inoxydable 316L",
        utilisation:
          "Aspiration et refoulement de produits chimiques agressifs, acides, solvants... - spécialement conçu pour l'utilisation intensives et sévère nécessitant une résistance élevées",
        cds: "4:1",
        temperature: "-30°c / +115°c (-22°F / +239°F)",
        norme: "BS 5842",
        IdTableau: 37,
      },
    ],
  },
  {
    id: 9,
    type: "TÉFLON - PTFE",
    data: [
      {
        id: 1,
        name: "TÉFLON - PTFE",
        img: "",
        def: "MULTISERVICES PTFE LISSE 1 TRESSE INOX 304",
        tube: "Ptfe lisse",
        armature: "1 tresse inox AISI 304",
        revetement:
          "Vapeur, air, gaz produits chimiques, fluides et pâtes à haute température - excellente",
        utilisation: "Résistance chimique - bonne résistance aux flexions",
        cds: "4:1",
        temperature: "-70°c / +260°c (-94°F / +500°F)",
        norme: "FDA",
        IdTableau: 38,
      },
      {
        id: 2,
        name: "TÉFLON - PTFE",
        img: "",
        def: "MULTISERVICES PTFE LISSE 2 TRESSE INOX 304",
        tube: "Ptfe lisse",
        armature: "2 tresse inox AISI 304",
        revetement:
          "Vapeur, air, gaz produits chimiques, fluides et pâtes à haute température - excellente",
        utilisation: "Résistance chimique",
        cds: "4:1",
        temperature: "-70°c / +260°c (-94°F / +500°F)",
        norme: "FDA",
        IdTableau: 39,
      },
      {
        id: 3,
        name: "TÉFLON - PTFE",
        img: "",
        def: "MULTISERVICES PTFE CONVOLUTE 1 TRESSE INOX 304",
        tube: "Ptfe convolute",
        armature: "1 tresse inox AISI 304",
        revetement:
          "Vapeur, air, gaz produits chimiques, fluides et pâtes à haute température - excellente",
        utilisation: "Résistance chimique",
        cds: "4:1",
        temperature: "-70°c / +260°c (-94°F / +500°F)",
        norme: "FDA",
        IdTableau: 40,
      },
    ],
  },
  {
    id: 10,
    type: "TUYAUX SILICONE TRESSE INOX",
    data: [
      {
        id: 1,
        name: "TUYAUX SILICONE TRESSE INOX",
        img: "",
        def: "TUYAUX SILICONE INDUSTRIEL BLEU TRESSÉ INOX",
        tube: "Silicone industriel bleu",
        armature: "1 tresse inox AISI 304",
        revetement: "",
        utilisation:
          "Transfert de liquides agressifs, acide citrique, acide tartique, vapeur, sorties de compresseurs - non toxique",
        temperatureContinu: "",
        temperatureMaxi: "-80°c / +240°c",
        option: "",
        IdTableau: 41,
      },
      {
        id: 2,
        name: "TUYAUX SILICONE TRESSE INOX",
        img: "",
        def: "TUYAUX SILICONE ALIMENTAIRE BLANC TRESSÉ INOX",
        tube: "Silicone alimentaire blanc",
        armature: "1 tresse inox AISI 304",
        revetement: "",
        utilisation:
          "Transfert de produits alimentaires, pharmaceutiques, vapeur, liquides agressifs, acide citrique, acide tartrique - non toxique",
        temperatureContinu: "",
        temperatureMaxi: "-80°c / +240°c",
        option: "",
        IdTableau: 42,
      },
    ],
  },
  {
    id: 11,
    type: "ONDULEUX MÉTALLIQUE INOX",
    data: [
      {
        id: 1,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES NORMALES INOX AISI 316 RENFORCÉES PAR 1 TRESS INOX AISI 304",
        tube: "Onduleux inox AISI 316 ou 321 - ondes parallèles normales",
        armature: "1 tresse inox AISI 304",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 43,
      },
      {
        id: 2,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES NORMALES INOX AISI 316 RENFORCÉES PAR 2 TRESSES INOX AISI 304",
        tube: "Onduleux inox AISI 316 - ondes parallèles normales",
        armature: "2 tresses inox AISI 304",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 44,
      },
      {
        id: 3,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES NORMALES INOX AISI 316 RENFORCÉES PAR 1 TRESSES INOX AISI 316",
        tube: "Onduleux inox AISI 316 - ondes parallèles normales",
        armature: "1 tresses inox AISI 316",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 45,
      },
      {
        id: 4,
        name: "ONDULEUX MÉTALLIQUE INOX",
        img: "",
        def: "TUYAU ONDES PARALLÈLES RAPPROCHÉES INOX AISI 316 RENFORCÉES PAR 1 TRESSES INOX AISI 304",
        tube: "Onduleux inox AISI 316 - ondes parallèles rapprochées",
        armature: "1 tresses inox AISI 304",
        revetement:
          "Vapeur, fluides très basses et très hautes températures, air, gaz, bitume, échappements",
        utilisation: "Moteur, vide - bonne résistance aux vibrations",
        cds: "4:1",
        temperature: "-270°c / +700°c (-454°F / +1292°F)",
        norme:
          "Soudure tig - les flexibles peuvent être fabriqués sur demande dans nos ateliers&étude et réalisation pour toutes vos demandes spécifiques",
        IdTableau: 46,
      },
    ],
  },
];

export default TypeFlexible;
