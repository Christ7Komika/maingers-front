import { FaArrowRight } from "react-icons/fa";
import Img from "../../assets/We/MicrosoftTeams-image (19).png";
import "./company.css";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="container company">
      <div className="company-content">
        <h2>QUI SOMME NOUS ?</h2>
        <h3>
          MH, votre entreprise industrielle leader depuis 2005 engagée pour un
          avenir durable.
        </h3>
        <p>
          Nous proposons une gamme complète de connectiques hydrauliques et
          industrielles pour les secteurs d'activités : Travaux publics,
          Industrie, Poids Lourds, Manutention, Levage, Agricole & Location.
        </p>
        <button>
          <FaArrowRight />
          <Link to="/about">EN SAVOR PLUS</Link>
        </button>
      </div>
      <div className="company-img">
        <div className="company-first-img">
          {/* <div className="company-infos">
            <span>
              <FaIndustry />
            </span>
            <p>MH Votre partenaire</p>
          </div> */}
          <img src={Img} alt="Qui somme nous image" />
        </div>
      </div>
    </div>
  );
};

export default Company;
