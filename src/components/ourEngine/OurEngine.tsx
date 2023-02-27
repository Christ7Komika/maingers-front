import React, { useState } from "react";
import "./ourEngine.css";
import Img1 from "../../assets/locations/image1.jpg";
import Img2 from "../../assets/locations/image2.jpg";
import Img3 from "../../assets/locations/image3.jpg";
import Img4 from "../../assets/locations/image4.jpg";
import Img5 from "../../assets/locations/image5.jpg";
import Img6 from "../../assets/locations/image6.jpg";
import Img7 from "../../assets/locations/image7.jpg";
import Img8 from "../../assets/locations/image8.jpg";
import Img9 from "../../assets/locations/image9.jpg";
import Img10 from "../../assets/locations/image10.jpg";
import Img11 from "../../assets/locations/image11.jpg";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Modal from "../Modal/Modal";

const OurEngine = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal isOpen={open} handleOpen={setOpen}></Modal>
      <div className="container our-engine">
        <h2>NOS ENGINS</h2>
        <div className="our-engine-list">
          {data.map((elt, i) => (
            <div className="our-engine-elt" key={`our-engine-elt-${i}`}>
              <img src={elt.img} alt="" />
              <div className="our-engine-elt-content">
                <h3>{elt.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const data = [
  {
    img: Img1,
    desc: "Véhicule Gazoil 10.000 litres",
  },
  {
    img: Img2,
    desc: "Engin élévateur KALMAR 10t",
  },
  {
    img: Img3,
    desc: "Nacelle ciseau 12m",
  },
  {
    img: Img4,
    desc: "Grue 40t Grove",
  },
  {
    img: Img5,
    desc: "Véhicule plateau semi remorque",
  },
  {
    img: Img6,
    desc: "Hyster 5t",
  },
  {
    img: Img7,
    desc: "Hydrocureur 10.000m3",
  },
  {
    img: Img8,
    desc: "Svetruck 12t",
  },
  {
    img: Img9,
    desc: "Engin téléscopie 12m",
  },
  {
    img: Img10,
    desc: "Nacelle téléscopique 16m",
  },
  {
    img: Img11,
    desc: "Véhicule gazoil 18.000m3",
  },
];

export default OurEngine;
