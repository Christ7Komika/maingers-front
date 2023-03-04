import React, { useState } from "react";
import "./floatingButton.css";
import { MdSupportAgent } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { MdWork } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Modal from "../Modal/Modal";

const FloatingButton = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal isOpen={modal} handleOpen={setModal} />
      <div className="floatingButtonContainer">
        <button className="main-button" onClick={() => setShow(!show)}>
          <MdSupportAgent />
        </button>
        {show && (
          <div className="option-container">
            <a className="main-sub-button" href="/contact">
              <span>
                <FiMail />
              </span>
              <small className="tooltip">
                Contact <span></span>
              </small>
            </a>
            <a className="main-sub-button" href="/career">
              <span>
                <MdWork />
              </span>
              <small className="tooltip">
                Postuler <span></span>
              </small>
            </a>
            <a className="main-sub-button" onClick={() => setModal(!modal)}>
              <span>
                <AiOutlineFundProjectionScreen />
              </span>
              <small className="tooltip">
                Lancer un projet <span></span>
              </small>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingButton;
