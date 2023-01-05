import React from "react";
import BakerHughes from "../../assets/partner/Baker_Hughes_logo.svg.png";
import HallyBurton from "../../assets/partner/hallyburton.png";
import Schlumberger from "../../assets/partner/Schlumberger.svg";
import Ois from "../../assets/partner/ois.png";
import Preziozo from "../../assets/partner/prezioso.svg";
import Perenco from "../../assets/partner/parenco.svg";
import Petrofor from "../../assets/partner/petrofor.png";
import Spie from "../../assets/partner/Spie.svg";
import TotalEnergie from "../../assets/partner/total.svg";
import EniCongo from "../../assets/partner/eni.svg";
import Medior from "../../assets/partner/medior.png";
import Seas from "../../assets/partner/seas.png";
import Brasco from "../../assets/partner/brasco.png";
import Tidewater from "../../assets/partner/Tidewater.png";
import Ilogs from "../../assets/partner/ilogs.png";
import Friedlander from "../../assets/partner/friedlander.png";
import ExpressAfric from "../../assets/partner/ocean_express.png";
import CongoServices from "../../assets/partner/congo_service.png";

import "./partner.css";

const data = [
  BakerHughes,
  HallyBurton,
  Schlumberger,
  Ois,
  Preziozo,
  Perenco,
  Petrofor,
  Spie,
  TotalEnergie,
  EniCongo,
  Medior,
  Seas,
  Brasco,
  Tidewater,
  Ilogs,
  Friedlander,
  ExpressAfric,
  CongoServices,
];

const Partner = () => {
  return (
    <div className="container partner">
      <h2>Nos partenaires</h2>
      <div className="partner-list">
        {data.map((img, index) => (
          <div className="partner-card" key={`partner-${index}`}>
            <div className="logo">
              <img src={img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
