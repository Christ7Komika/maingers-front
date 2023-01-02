import React from "react";
import "./footer.css";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-top">
        <div className="newsletter">
          <form className="newsletter-form">
            <p style={{ fontSize: 20 }}>Newsletter</p>
            <input type="email" placeholder="Saisir votre email" />
            <button>Souscrire</button>
          </form>
        </div>
        <div className="company-infos">
          <h3>MAINGER'S HYDRAULIC & SERVICES</h3>
          <p>
            Votre partenaire idéal pour toutes vos opérations hydrauliques,
            location d'engins et de nettoyage industriel.
          </p>
        </div>
        <div className="list-link">
          <h3>Lien</h3>
          <div className="group-link">
            <a href="">
              <FaArrowRight />
              Acceuil
            </a>
            <a href="">
              <FaArrowRight />
              Nos services
            </a>
            <a href="">
              <FaArrowRight />A propos
            </a>
            <a href="">
              <FaArrowRight />
              Contact
            </a>
          </div>
        </div>
        <div className="contact-infos">
          <h3>Contact</h3>
          <p>
            Retrouvez toutes les informations pour nous joindre sur la page
            contact de notre site.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 Mainger's Hydraulic</p>
      </div>
    </div>
  );
};

export default Footer;
