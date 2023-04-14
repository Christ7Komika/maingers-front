import BakerHughes from "../../assets/partner/Baker_Hughes_logo.svg.png";
import HallyBurton from "../../assets/partner/hallyburton.png";
import Schlumberger from "../../assets/partner/Schlumberger.svg";
import Ois from "../../assets/partner/ois.png";
import Preziozo from "../../assets/partner/prezioso.svg";
import Perenco from "../../assets/partner/parenco.svg";
import Petrofor from "../../assets/partner/petrofor.png";
import Spie from "../../assets/partner/Spie.png";
import TotalEnergie from "../../assets/partner/total.svg";
import EniCongo from "../../assets/partner/eni.png";
import Medior from "../../assets/partner/medior.png";
import Seas from "../../assets/partner/seas.png";
import Brasco from "../../assets/partner/brasco.png";
import Tidewater from "../../assets/partner/Tidewater.png";
import Ilogs from "../../assets/partner/ilogs.png";
import Friedlander from "../../assets/partner/friedlander.png";
import ExpressAfric from "../../assets/partner/ocean_express.png";
import CongoServices from "../../assets/partner/congo_service.png";
import DANGOTE from "../../assets/partner/DANGOTE.png";
import PONTICELLI from "../../assets/partner/PONTICELLI.png";
import SOFAPRAL from "../../assets/partner/SOFAPRAL.png";
import KCHIMIE from "../../assets/partner/K-CHIMIE.png";
import PUMA from "../../assets/partner/PUMA.png";

import "./partner.css";

const data = [
  {
    img: BakerHughes,
    alt: "BakerHughes",
  },
  {
    img: HallyBurton,
    alt: "HallyBurton",
  },
  {
    img: Schlumberger,
    alt: "Schlumberger",
  },
  {
    img: Preziozo,
    alt: "Preziozo",
  },
  {
    img: Ois,
    alt: "Ois",
  },
  {
    img: Perenco,
    alt: "Perenco",
  },
  {
    img: Petrofor,
    alt: "Petrofor",
  },
  {
    img: Spie,
    alt: "Spie",
  },
  {
    img: TotalEnergie,
    alt: "TotalEnergie",
  },
  {
    img: EniCongo,
    alt: "EniCongo",
  },
  {
    img: Medior,
    alt: "Medior",
  },
  {
    img: Seas,
    alt: "Seas",
  },
  {
    img: Brasco,
    alt: "Brasco",
  },
  {
    img: Tidewater,
    alt: "Tidewater",
  },
  {
    img: Ilogs,
    alt: "Ilogs",
  },
  {
    img: Friedlander,
    alt: "Friedlander",
  },
  {
    img: ExpressAfric,
    alt: "ExpressAfric",
  },
  {
    img: CongoServices,
    alt: "CongoServices",
  },
  {
    img: DANGOTE,
    alt: "DANGOTE",
  },
  {
    img: PUMA,
    alt: "Puma",
  },
  {
    img: PONTICELLI,
    alt: "Pomticelli",
  },
  {
    img: KCHIMIE,
    alt: "K-CHIMIE",
  },
  {
    img: SOFAPRAL,
    alt: "SOFAPRAL",
  },
];

const Partner = () => {
  return (
    <div className="container partner">
      <h2 style={{ fontSize: "2rem" }}>Nos partenaires et Clients</h2>
      <div className="partner-list">
        {data.map((logo, index) => (
          <div className="partner-card" key={`partner-${index}`}>
            <div className="logo">
              <img src={logo.img} alt={logo.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
