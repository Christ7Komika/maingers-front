import React from "react";
import "./formcontact.css";
import ContactImg from "../../assets/pictures/img15.jpg";

const FormContact = () => {
  return (
    <form className="container form-contact">
      <div className="form-contact-left">
        <h2>Nous Contacter</h2>
        <form action="" className="form-contact-form">
          <input type="text" placeholder="Veuillez saisir votre" />
          <input type="text" placeholder="Veuillez saisir adresse mail" />
          <input
            type="text"
            placeholder="Veuillez saisir numéro de téléphone"
          />
          <input
            type="text"
            placeholder="Veuillez saisir l'objet de votre message"
          />
          <textarea placeholder="Veuillez saisir votre message"></textarea>
          <button>Envoyer</button>
        </form>
      </div>
      <div className="form-contact-right">
        <img src={ContactImg} alt="Image de contact" />
      </div>
    </form>
  );
};

export default FormContact;
