import React from "react";
import "./infosFlexible.css";

const InfosFlexible = () => {
  return (
    <div className="container flexible-infos">
      <h2>Name : Voda 01</h2>
      <h3>Norme ISO 1025</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut porro
        rerum quas vitae incidunt temporibus tempora aspernatur velit mollitia!
      </p>
      <div className="flexible-infos-tab"></div>
      <div className="flexible-infos-desc">
        <h3>Application</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          odit minima eveniet, natus hic dicta.
        </p>
      </div>
      <div className="flexible-infos-desc">
        <h3>Caractéristique technique</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, modi
          magni voluptate necessitatibus vel recusandae maxime placeat? Aliquam
          tempora quae labore nulla, explicabo maxime doloribus.
        </p>
      </div>
    </div>
  );
};

export default InfosFlexible;
