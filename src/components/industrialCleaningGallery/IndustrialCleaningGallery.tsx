import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./industrialCleaningGallery.css";
import SlideModal from "../Modal/SlideModal";
import Img1 from "../../assets/cleaning/image17.png";
import Img2 from "../../assets/cleaning/image4.jpg";
import Img3 from "../../assets/cleaning/image5.jpg";
import Img4 from "../../assets/cleaning/image6.png";
import Img5 from "../../assets/cleaning/image7.png";
import Img6 from "../../assets/cleaning/image8.png";
import Img7 from "../../assets/cleaning/image9.png";
import Img8 from "../../assets/cleaning/image10.png";
import Img9 from "../../assets/cleaning/image11.png";
import Img11 from "../../assets/cleaning/image13.jpg";
import Img12 from "../../assets/cleaning/image14.jpg";
import Img13 from "../../assets/cleaning/image15.jpg";
import Img14 from "../../assets/cleaning/image16.jpg";

interface TypeData {
  id: number;
  img: string;
}
[];

const IndustrialCleaningGallery = () => {
  const [slide, setSlide] = useState(false);
  const [slideData, setSlideData] = useState<any | null>();

  return (
    <>
      {slide && (
        <SlideModal close={setSlide} slideData={slideData} open={slide} />
      )}
      <div className="industrial-cleaning-gallery">
        <h2>NETTOYAGE HAUTE PRESSION PIPE MATERIEL</h2>

        <div className="industriel-cleaning-material">
          <h3>
            Système d'aspiration conteneurisé Offshore Rig-Vac <sup>TM</sup>{" "}
          </h3>
          <div className="industrial-cleaning-gallery-list">
            {data.map((gallery, index) => (
              <div
                className="indrustrial-cleaning-gallery-img"
                key={"cleaning-gallery-list-" + index}
              >
                <img
                  src={gallery.img}
                  alt=""
                  onClick={() => {
                    setSlideData([...data]);
                    setSlide(true);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="industriel-cleaning-material-content">
            <p>
              Le système d'aspiration conteneurisé Offshore Rig-Vac<sup>TM</sup>{" "}
              est un dispositif d'aspiration robuste monté sur patins conçu pour
              être situé au centre pour la récupération, le confinement et la
              manipulation des déchets liquides et des boues provenant des
              opérations à terre et en mer.
            </p>

            <p>
              Une gamme de deux différents systèmes d'aspiration conteneurisés
              Offshore Rig-Vac<sup>TM</sup> est proposée - le RV-50 HP et le
              RV-100 HP à commande électrique.
            </p>
          </div>
          <h3>Caractéristiques et avantages</h3>
          <div className="industriel-cleaning-material-content-list">
            <div className="industriel-cleaning-material-content-list-right">
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Soufflante à lobes rotatifs avec entraînement direct et pigon de
                distribution hélicoïdal pour un fonctionnement plus silencieux
                et plus puissant
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Décharge - Silencieux universel 6" SDY (RV-50 HP) / 10" SDY
                (RV-100 HP) pour un environnement silencieux
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Conteneur approuvé DNV 2.7.1 de 20 pieds avec portes aux des
                extrémités et réservoir de rétention à fond conique de 500 / 750
                gal pour le RV-50 HP et le RV-100 HP respectivement
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Polyvalent - le système de vide conteneurisé Offshore Rig-Vac
                <sup>TM</sup> a la capacité de passer du chargement sous vide au
                déchargement pour vider le réservoir
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Les deux système ont des soupapes de suppression, une soupape de
                suppression et une jauge de pression/vide composée (30 po HGg à
                15 psig)
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Maintenance et fonctionnement - les unités ont effectué des
                années de service fiable avec un minimum de maintenance
              </p>
            </div>
            <div className="separator"></div>
            <div className="industriel-cleaning-material-content-list-left">
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Flexible - grâce à leur conception modulaire à deux composants,
                la disposition des systèmes 50 HP et 100 HP peut être organisée
                pour s'adapter à n'importe quel environnement
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Sécurité - amèliore la sécurité du lieu de travail en permettant
                une élimination rapide et facile des déversements
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Entretien - tous les systèmes ont un passage pour un hommes de
                18 pouces pour un néttoyage facile
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Capacité - plus puissante qu'un camion aspirateur ordinaire
                facile à utiliser
              </p>
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                Les deux moteurs électriques sont dotés d'un interrupteur
                marche-arrêt avec réinitialisation et le moteur diesel est
                autonome
              </p>
            </div>
          </div>
          <h3>Caractéristiques</h3>
          <div className="table-container">
            <table className="industrial-cleaning-table">
              <tr className="head">
                <th colSpan={3}>Performance</th>
              </tr>
              <tr>
                <td>Modèle</td>
                <td>
                  Système conteneurisé RV offshore,
                  <br /> Aspirateur 50CV
                </td>
                <td>
                  Système conteneurisation RV offshore, <br />
                  Aspirateur 100 CV{" "}
                </td>
              </tr>
              <tr>
                <td>Flux (ICFM)</td>
                <td>925.8</td>
                <td>1600</td>
              </tr>
              <tr>
                <td>Pression atmosphérique (psiA)</td>
                <td>14.7</td>
                <td>14.7</td>
              </tr>
              <tr>
                <td>Température d'entrée (-F)</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Gaz</td>
                <td>Air</td>
                <td>Air</td>
              </tr>
              <tr>
                <td>Gravité spécifique</td>
                <td>1.0</td>
                <td>1.0</td>
              </tr>
              <tr>
                <td>K (Cp/Cv)</td>
                <td>1.395</td>
                <td>1.395</td>
              </tr>
              <tr>
                <td>Pression d'entrée (in. Hg vac)</td>
                <td>15</td>
                <td>16</td>
              </tr>
              <tr>
                <td>Température ambiante (-F)</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Réglage RV (en Hg vac)</td>
                <td>16</td>
                <td>16.5</td>
              </tr>
              <tr>
                <td>Réglage RV (psig)</td>
                <td>8</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Vitesse (tr/min)</td>
                <td>1775</td>
                <td>2711</td>
              </tr>
              <tr>
                <td>BHP en exploitation</td>
                <td>46.6</td>
                <td>87</td>
              </tr>
              <tr>
                <td>BHP au réglage de la soupape de décharge</td>
                <td>48.7</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Température de décharge (-F)</td>
                <td>340</td>
                <td>312</td>
              </tr>
              <tr>
                <td>Bruit avec encinte (dba)</td>
                <td>85</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Soufflante à lobes rotatifs</td>
                <td>Tuthill - MD Pneumatics Modèle 6016-46 L2</td>
                <td>Tuthill - MD Pneumatics Modèle 7021-46 PD</td>
              </tr>
              <tr>
                <td>Capacité du réservoir</td>
                <td>500 gallons (1 893 litres)</td>
                <td>750 gallons (2 litres)</td>
              </tr>
              <tr className="head">
                <th colSpan={3}>Dimensions (conteneur DNV)</th>
              </tr>
              <tr>
                <td>Longueur</td>
                <td>120" (3 048 mm)</td>
                <td>240" (6 096 mm)</td>
              </tr>
              <tr>
                <td>Largeur</td>
                <td> 96" (2 438 mm)</td>
                <td> 96" (2 438 mm)</td>
              </tr>
              <tr>
                <td>Hauteur</td>
                <td>102" (2 591 mm)</td>
                <td>102" (2 591 mm)</td>
              </tr>
              <tr className="head">
                <th colSpan={3}>Exigences de l'utilitaire</th>
              </tr>
              <tr>
                <td style={{ textTransform: "uppercase" }} colSpan={3}>
                  Moteur électrique
                </td>
              </tr>
              <tr>
                <td>Du pouvoir</td>
                <td>50 ch (37.3 kw)</td>
                <td>100 ch (74.6 kw)</td>
              </tr>
              <tr>
                <td>Tension</td>
                <td>460V</td>
                <td>460V</td>
              </tr>
              <tr>
                <td>Phase</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Fréquence</td>
                <td>60Hz</td>
                <td>60Hz</td>
              </tr>
              <tr>
                <td>Sécurité</td>
                <td>Moteur à induction antidéflagrant TEXP</td>
                <td>Moteur à induction antidéflagrant TEXP</td>
              </tr>
            </table>
          </div>

          <h3>Pompe K350 Modele PTC-7 / K350-D ON SKID</h3>
          <div className="industrial-cleaning-gallery-list">
            {data2.map((gallery, index) => (
              <div
                className="indrustrial-cleaning-gallery-img"
                key={"cleaning-gallery-list-" + index}
              >
                <img
                  src={gallery.img}
                  alt=""
                  onClick={() => {
                    setSlideData([...data2]);
                    setSlide(true);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="industriel-cleaning-material-content">
            <p>
              L'unité avec pompe k35040 (232|/min avec 810 bar), moteur diesel
              IVECO (Cursor C13ENTX Turbo Intercooler 375KW à 2100RPM), filtrage
              avec boite et cartouche inox, pompe de relance de grande taille,
              établisateur pression d'alimentation, regulateur pression
              pneumatique, embraillage avec piston pneumatique, contrôle du
              système et alarme en boite inox, contrôle pression et revolution
              moteur à distance avec 100m de cable spécial sur turret,
              construction dur skid avec deux couches de peinture protectife
              tampons élastiques, etc.
            </p>
          </div>
          <h3>Gallery nettoyage de pipe à haute pression</h3>

          <div className="industrial-cleaning-gallery-list">
            {data3.map((gallery, index) => (
              <div
                className="indrustrial-cleaning-gallery-img"
                key={"cleaning-gallery-list-" + index}
              >
                <img
                  src={gallery.img}
                  alt=""
                  onClick={() => {
                    setSlideData([...data3]);
                    setSlide(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    img: Img11,
  },
  {
    id: 2,
    img: Img12,
  },
  {
    id: 3,
    img: Img13,
  },
  {
    img: Img14,
  },
];

const data2 = [
  {
    id: 1,
    img: Img1,
  },
];

const data3 = [
  {
    id: 1,
    img: Img2,
  },
  {
    img: Img3,
    id: 2,
  },
  {
    img: Img4,
    id: 3,
  },
  {
    img: Img5,
    id: 4,
  },
  {
    img: Img6,
    id: 5,
  },
  {
    img: Img7,
    id: 6,
  },
  {
    img: Img8,
    id: 7,
  },
  {
    img: Img9,
    id: 8,
  },
];

export default IndustrialCleaningGallery;
