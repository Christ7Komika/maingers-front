import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsTelephoneFill } from "react-icons/bs";
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
    <div className="modal-normal">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Mon projet</h2>
          <span onClick={() => handleOpen(false)}>
            <RxCross2 />
          </span>
        </div>
        <div className="modal-body">
          <h2>Être rappelé </h2>
          <p>Vous avez un projet concret ? Un cahier des charges ?</p>
          <p>Notre équipe vous rappelle dans les meilleurs délais !</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Entrer votre nom" required />
              <input type="text" placeholder="Entrer votre prénom" required />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Nom de la socité" required />
              <input
                type="text"
                placeholder="Code postal de la société"
                required
              />
            </div>
            <CustomSelect
              placeholder="Sujet a aborder au téléphone ?"
              data={data}
              getValue={setSubject}
              labelExtractor={(item: { name: string }) => item.name}
              keyExtractor={(item: { id: number }) => item.id}
              valueExtractor={(item: { id: number }) => item.id}
            />
            <div className="form-group">
              <input type="text" placeholder="Email" required />
              <input type="text" placeholder="Numéro de téléphone" required />
            </div>
            <p>
              MAINGER'S-HYDRAULIC s'engage à protéger et à respecter vos
              données.
            </p>
            <button>Être Rappelé</button>
          </form>
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
