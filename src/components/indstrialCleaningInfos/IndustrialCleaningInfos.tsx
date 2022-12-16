import React from "react";
import "./industrialCleaningInfos.css";
import Img from "../../assets/pictures/img2.jpg";

const IndustrialCleaningInfos = () => {
  return (
    <div className="industrial-cleaning-infos">
      <h2>NETTOYAGE HAUTE PRESSION</h2>
      <div className="industrial-cleaning-container">
        <div className="industrial-cleaning-infos-img">
          <img src={Img} alt="" />
        </div>
        <div className="industrial-cleaning-infos-content">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, beatae.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            eveniet tempore aliquam ducimus eius, totam labore provident
            necessitatibus molestiae dignissimos!
          </p>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            atque consequuntur velit labore modi.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            maiores fugiat qui, dolorem, id voluptatum minus ducimus
            perspiciatis, mollitia enim at ut nulla culpa magni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCleaningInfos;
