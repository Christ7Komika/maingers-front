import React from "react";
import "./industrialCleaningGallery.css";
import Img1 from "../../assets/pictures/img1.jpg";
import Img2 from "../../assets/pictures/img2.jpg";
import Img3 from "../../assets/pictures/img3.jpg";
import Img4 from "../../assets/pictures/img4.jpg";
import Img5 from "../../assets/pictures/img5.jpg";
import Img6 from "../../assets/pictures/img6.jpg";
import Img7 from "../../assets/pictures/img7.jpg";
import Img8 from "../../assets/pictures/img8.jpg";

const IndustrialCleaningGallery = () => {
  return (
    <div className="industrial-cleaning-gallery">
      <h2>NETTOYAGE HAUTE PRESSION</h2>
      <div className="industrial-cleaning-gallery-list">
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img1} alt="" />
        </div>
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img2} alt="" />
        </div>
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img3} alt="" />
        </div>
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img4} alt="" />
        </div>
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img5} alt="" />
        </div>
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img6} alt="" />
        </div>
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img7} alt="" />
        </div>
        <div className="indrustrial-cleaning-gallery-img">
          <img src={Img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IndustrialCleaningGallery;
