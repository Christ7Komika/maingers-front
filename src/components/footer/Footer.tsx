import React, { useState } from "react";
import "./footer.css";
import { FaArrowRight } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { host } from "../../host";
const Footer = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return toast.error("Votre adresse mail est invalide");
    }

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: host + "/newsletter",
      data: { email: email },
    };

    axios(config)
      .then(function () {
        setEmail("");
        return toast.success("Votre demande a été envoyé avec succès");
      })
      .catch(function (e: AxiosError) {
        //@ts-ignore
        const error = e.response?.data.status;

        if (error === 4000) {
          return toast.error(
            "Vous êtes déjà souscrit à notre service de newsletter "
          );
        }
        return toast.error(
          "Une erreur est survenue lors de l'envoi de vos données, veuillez réessayer."
        );
      });
  };

  return (
    <div className="container footer">
      <Toaster />
      <div className="footer-top">
        <div className="newsletter">
          <form className="newsletter-form">
            <p style={{ fontSize: 20 }}>Newsletter</p>
            <input
              type="email"
              placeholder="Saisir votre email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button onClick={(e) => submit(e)}>Souscrire</button>
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
