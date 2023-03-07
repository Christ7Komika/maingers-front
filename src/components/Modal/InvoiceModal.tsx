import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./invoiceModal.css";
import CustomSelect from "../input/CustomSelect";
import CustomFile from "../input/CustomFile";
type Props = {
  isOpen: boolean;
  handleOpen: Function;
};

const InvoiceModal = ({ isOpen, handleOpen }: Props) => {
  const html = document.querySelector("html") as HTMLElement;
  const [subject, setSubject] = useState("");

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.className === "modal-all-container") {
        handleOpen(false);
      }
    });
  }, []);

  if (isOpen) {
    html.style.overflowY = "hidden";
  } else {
    html.style.overflowY = "scroll";
    return <></>;
  }

  return (
    <div className="modal-invoice">
      <div className="modal-all-container">
        <div className="invoice-modal-container">
          <div className="modal-header">
            <h2>Demande de devis</h2>
            <span onClick={() => handleOpen(false)}>
              <RxCross2 />
            </span>
          </div>
          <div className="modal-body">
            <h2>Demander un devis</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              officiis velit laudantium aut, expedita enim.
            </p>
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

              <div className="form-group">
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Numéro de téléphone" required />
              </div>
              <CustomSelect
                placeholder="Pays"
                data={data}
                getValue={setSubject}
                labelExtractor={(item: { name: string }) => item.name}
                keyExtractor={(item: { id: number }) => item.id}
                valueExtractor={(item: { id: number }) => item.id}
              />
              <CustomSelect
                placeholder="Demander un devis sur"
                data={data}
                getValue={setSubject}
                labelExtractor={(item: { name: string }) => item.name}
                keyExtractor={(item: { id: number }) => item.id}
                valueExtractor={(item: { id: number }) => item.id}
              />
              <CustomFile
                placeholder="Soumettre un fichier"
                getValue={setSubject}
              />
              <textarea placeholder="Information supplémentaire"></textarea>

              <p>
                MAINGER'S-HYDRAULIC s'engage à protéger et à respecter vos
                données.
              </p>
              <button>Soumettre</button>
            </form>
          </div>
        </div>{" "}
        *
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
export default InvoiceModal;
