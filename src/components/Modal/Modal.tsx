import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./modal.css";
type Props = {
  isOpen: boolean;
  handleOpen: Function;
};

const Modal = ({ isOpen, handleOpen }: Props) => {
  const html = document.querySelector("html") as HTMLElement;
  if (isOpen) {
    html.style.overflowY = "hidden";
  } else {
    html.style.overflowY = "scroll";
    return <></>;
  }

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Plan tarifaire</h2>
          <span onClick={() => handleOpen(false)}>
            <RxCross2 />
          </span>
        </div>
        <div className="modal-body">
          <div className="row">
            <h2 style={{ textTransform: "uppercase" }}>Désignation</h2>
            <p>155</p>
          </div>
          <div className="row">
            <h2 style={{ textTransform: "uppercase" }}>Capacité</h2>
            <p>155</p>
          </div>
          <div className="row">
            <h2>HEURE à P/N</h2>
            <p>155</p>
          </div>
          <div className="row">
            <h2>JOURS (8H) à P/N</h2>
            <p>155</p>
          </div>
          <div className="row">
            <h2>SEMAINE (6J) à P/N</h2>
            <p>155</p>
          </div>
          <div className="row">
            <h2>MOIS (26J) à P/N</h2>
            <p>155</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
