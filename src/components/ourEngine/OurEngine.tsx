import React, { useState } from "react";
import "./ourEngine.css";
import Img10 from "../../assets/pictures/img10.jpg";
import Img11 from "../../assets/pictures/img11.jpg";
import Img12 from "../../assets/pictures/img12.jpg";
import Img13 from "../../assets/pictures/img13.jpg";
import Img14 from "../../assets/pictures/img14.jpg";
import Img15 from "../../assets/pictures/img15.jpg";
import Img16 from "../../assets/pictures/img16.jpg";
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
          {[0, 1, 2, 3, 4, 5].map((elt, i) => (
            <div className="our-engine-elt" key={`our-engine-elt-${i}`}>
              <img src={Img10} alt="" />
              <div className="our-engine-elt-content">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, deserunt.
                </p>
                <p onClick={() => setOpen(!open)}>
                  <BsFillArrowRightCircleFill /> Infos
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurEngine;
