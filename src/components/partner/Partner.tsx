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
import BJFLEX from "../../assets/partner/bjflex.png";
import ISOFLEX from "../../assets/partner/isoflex.png";
import HYCO from "../../assets/partner/hycodif.png";
import NAVITRANS from "../../assets/partner/navitrans.png";
import CONGOOILFIELD from "../../assets/partner/congoservices.jpg";
import HMR from "../../assets/partner/HMR.png";
import ARLISERVICE from "../../assets/partner/ARLISERVICE.png";
import BOSCONGO from "../../assets/partner/boscongo.png";
import "./partner.css";

const data = [
  {
    img: BJFLEX,
    alt: "BJFLEX",
    zoom: 1,
  },
  {
    img: ISOFLEX,
    alt: "ISOFLEX",
    zoom: 1,
  },

  {
    img: HYCO,
    alt: "Hycodif",
    zoom: 1,
  },
  {
    img: BakerHughes,
    alt: "BakerHughes",
    zoom: 1,
  },
  {
    img: HallyBurton,
    alt: "HallyBurton",
    zoom: 1,
  },
  {
    img: Schlumberger,
    alt: "Schlumberger",
    zoom: 1.6,
  },

  {
    img: Preziozo,
    alt: "Preziozo",
    zoom: 1,
  },
  {
    img: NAVITRANS,
    alt: "NAVITRANS",
    zoom: 1,
  },
  {
    img: CONGOOILFIELD,
    alt: "CONGOOILFIELD",
    zoom: 1,
  },
  {
    img: HMR,
    alt: "HMR",
    zoom: 1.4,
  },
  {
    img: BOSCONGO,
    alt: "BOSCONGO",
    zoom: 1.2,
  },
  {
    img: ARLISERVICE,
    alt: "ARLISERVICE",
    zoom: 1.4,
  },
  {
    img: Ois,
    alt: "Ois",
    zoom: 1,
  },
  {
    img: Perenco,
    alt: "Perenco",
    zoom: 1,
  },
  {
    img: Petrofor,
    alt: "Petrofor",
    zoom: 1.5,
  },
  {
    img: Spie,
    alt: "Spie",
    zoom: 1,
  },
  {
    img: TotalEnergie,
    alt: "TotalEnergie",
    zoom: 1.2,
  },
  {
    img: EniCongo,
    alt: "EniCongo",
    zoom: 1,
  },
  {
    img: Medior,
    alt: "Medior",
    zoom: 1,
  },
  {
    img: Seas,
    alt: "Seas",
    zoom: 1,
  },
  {
    img: Brasco,
    alt: "Brasco",
    zoom: 1,
  },
  {
    img: Tidewater,
    alt: "Tidewater",
    zoom: 1,
  },
  {
    img: Ilogs,
    alt: "Ilogs",
    zoom: 1,
  },
  {
    img: Friedlander,
    alt: "Friedlander",
    zoom: 1.8,
  },
  {
    img: ExpressAfric,
    alt: "ExpressAfric",
    zoom: 1,
  },
  {
    img: CongoServices,
    alt: "CongoServices",
    zoom: 1,
  },
  {
    img: DANGOTE,
    alt: "DANGOTE",
    zoom: 1,
  },
  {
    img: PUMA,
    alt: "Puma",
    zoom: 1,
  },
  {
    img: PONTICELLI,
    alt: "Pomticelli",
    zoom: 1.4,
  },
  {
    img: KCHIMIE,
    alt: "K-CHIMIE",
    zoom: 1,
  },
  {
    img: SOFAPRAL,
    alt: "SOFAPRAL",
    zoom: 1,
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
              <img
                src={logo.img}
                alt={logo.alt}
                style={{ transform: `scale(${logo.zoom})` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
