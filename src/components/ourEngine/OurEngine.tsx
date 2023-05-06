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
import SlideModal from "../Modal/SlideModal";

const OurEngine = () => {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(false);
  const [slideData, setSlideData] = useState<any | null>();
  return (
    <>
      {slide && (
        <SlideModal close={setSlide} slideData={slideData} open={slide} />
      )}
      <Modal isOpen={open} handleOpen={setOpen}></Modal>
      <div className="container our-engine">
        <h2>NOS ENGINS</h2>
        <div className="our-engine-list">
          {data.map((elt, i) => (
            <div className="our-engine-elt" key={`our-engine-elt-${i}`}>
              <img
                src={elt.img}
                alt=""
                onClick={() => {
                  setSlideData([...data]);
                  setSlide(true);
                }}
              />
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
    desc: "Véhicule Gazoil 10 000 litres",
  },
  {
    img: Img2,
    desc: "Engin élévateur KALMAR 10 tonnes",
  },
  {
    img: Img3,
    desc: "Nacelle ciseau 12 mètres",
  },
  {
    img: Img4,
    desc: "Grue 40 tonnes Grove",
  },
  {
    img: Img5,
    desc: "Véhicule plateau semi remorque",
  },
  {
    img: Img6,
    desc: "Hyster 5 tonnes",
  },
  {
    img: Img7,
    desc: "Hydrocureur 10 000 m3",
  },
  {
    img: Img8,
    desc: "Svetruck 12 tonnes",
  },
  {
    img: Img9,
    desc: "Engin téléscopie 12 mètres",
  },
  {
    img: Img10,
    desc: "Nacelle téléscopique 16 mètres",
  },
  {
    img: Img11,
    desc: "Véhicule gazoil 18 000 m3",
  },
];

export default OurEngine;
