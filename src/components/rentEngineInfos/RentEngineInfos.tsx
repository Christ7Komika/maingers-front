import React from "react";
import "./rentEngineInfos.css";
import Img from "../../assets/pictures/img10.jpg";

const RentEngineInfos = () => {
  return (
    <div className="container rent-engine-infos">
      <div className="rent-engine-infos-content">
        <h2>LOCATION ENGINS ELEVATEUR</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          rerum facilis dolorum quos? Quis veniam, soluta dolores itaque ipsa
          modi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          rerum facilis dolorum quos? Quis veniam, soluta dolores itaque ipsa
          modi?
        </p>
      </div>
      <div className="rent-engine-infos-img">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default RentEngineInfos;
