import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./modal.css";
import CustomSelect from "../input/CustomSelect";
type Props = {
  isOpen: boolean;
  handleOpen: Function;
};

const Modal = ({ isOpen, handleOpen }: Props) => {
  const html = document.querySelector("html") as HTMLElement;
  const [subject, setSubject] = useState("");
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
          <h2>Mon projet</h2>
          <span onClick={() => handleOpen(false)}>
            <RxCross2 />
          </span>
        </div>
        <div className="modal-body">
          <h2>Vous avez un projet concret ?</h2>
          <p>Notre équipe vous rappelle dans les meilleurs délais !</p>

          <div className="group-button">
            <input type="text" placeholder="Entrer votre nom" />
            <input type="text" placeholder="Entrer votre prénom" />
          </div>

          <div className="group-button">
            <input type="text" placeholder="Nom de la socité" />
            <input type="text" placeholder="Code postal de la société" />
          </div>
          <CustomSelect
            placeholder="Sujet a aborder au téléphone ?"
            data={data}
            getValue={setSubject}
            labelExtractor={(item: { name: string }) => item.name}
            keyExtractor={(item: { id: number }) => item.id}
            valueExtractor={(item: { id: number }) => item.id}
          />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "Congo",
  },
  {
    id: 2,
    name: "Gabon",
  },
  {
    id: 3,
    name: "Cameroun",
  },
];
export default Modal;
