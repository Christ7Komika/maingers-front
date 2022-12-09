import React from "react";
import Total from "../../assets/pictures/total-logo.png";
import BakerHugues from "../../assets/pictures/bakerhugues-logo.png";
import Schlumberger from "../../assets/pictures/schlumberger-logo.png";
import Spies from "../../assets/pictures/spies-logo.png";
import "./partner.css";

const Partner = () => {
  return (
    <div className="container partner">
      <h2>Partner</h2>
      <div className="partner-list">
        <div className="partner-card">
          <div className="logo">
            <img src={Total} alt="" />
          </div>
          <h3>Total Energies</h3>
        </div>
        <div className="partner-card">
          <div className="logo">
            <img src={BakerHugues} alt="" />
          </div>
          <h3>Baker Hughes</h3>
        </div>
        <div className="partner-card">
          <div className="logo">
            <img src={Schlumberger} alt="" />
          </div>
          {/* <h3>Schlumberger</h3> */}
        </div>
        <div className="partner-card">
          <div className="logo">
            <img src={Spies} alt="" />
          </div>
          {/* <h3>Spies</h3> */}
        </div>
        <div className="partner-card">
          <div className="logo">
            <img src={Total} alt="" />
          </div>
          <h3>Total Energies</h3>
        </div>
        <div className="partner-card">
          <div className="logo">
            <img src={BakerHugues} alt="" />
          </div>
          <h3>Baker Hughes</h3>
        </div>
        <div className="partner-card">
          <div className="logo">
            <img src={Schlumberger} alt="" />
          </div>
          {/* <h3>Schlumberger</h3> */}
        </div>
        <div className="partner-card">
          <div className="logo">
            <img src={Spies} alt="" />
          </div>
          {/* <h3>Spies</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Partner;
