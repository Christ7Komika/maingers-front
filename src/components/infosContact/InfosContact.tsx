import React from "react";
import "./infoscontact.css";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const InfosContact = () => {
  return (
    <div className="container infos-contact">
      <h2>Nos Contact</h2>
      <div className="infos-contact-container">
        <div className="infos-contact-content">
          <div className="infos-contact-card">
            <span>
              <FaPhone />
            </span>
            <h3>Numéro de téléphone</h3>
            <p>
              <span>+242 05 568 12 23</span>
              <span>+242 06 851 08 45</span>
            </p>
          </div>
          <div className="infos-contact-card">
            <span>
              <FaEnvelope />
            </span>
            <h3>Adresse email</h3>
            <p>maingers-hydraulic@gmail.com</p>
          </div>
          <div className="infos-contact-card">
            <span>
              <FaLocationArrow />
            </span>
            <h3>Adresse</h3>
            <p>Zone industrielle</p>
          </div>
        </div>
        <div className="infos-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.3308182317533!2d11.858450238413226!3d-4.774085207748759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a60bb2370c5e6f1%3A0xc9b9ecedf62cb3cd!2sMus%C3%A9e%20du%20Cercle%20Africain%20de%20Pointe-Noire!5e1!3m2!1sfr!2scg!4v1670600312372!5m2!1sfr!2scg"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 5 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default InfosContact;