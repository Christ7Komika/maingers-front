import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-top">
        <div className="newsletter">
          <form className="newsletter-form">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, rem
              sed doloribus porro veritatis repellendus obcaecati, eum
              cupiditate dolorem temporibus necessitatibus sequi reiciendis
              alias? Praesentium.
            </p>
            <input type="email" placeholder="Saisir votre email" />
            <button>Souscrire</button>
          </form>
        </div>
        <div className="company-infos">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quas vero nulla laboriosam explicabo sapiente illo eaque
            necessitatibus excepturi nostrum?
          </p>
        </div>
        <div className="list-link">
          <h3>Lien</h3>
          <div className="group-link">
            <a href="">Acceuil</a>
            <a href="">Nos services</a>
            <a href="">A propos</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="contact-infos">
          <h3>Contact</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quo sunt quaerat nobis minus aut omnis consectetur ab.
          </p>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2022 Mainger's Hydraulic</div>
    </div>
  );
};

export default Footer;
