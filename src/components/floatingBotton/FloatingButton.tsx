import { useState } from "react";
import "./floatingButton.css";
import { MdSupportAgent } from "react-icons/md";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { MdWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import Modal from "../Modal/Modal";
import InvoiceModal from "../Modal/InvoiceModal";
import FloatingMessage from "../floatingMessage/FloatingMessage";
import { Link } from "react-router-dom";

const FloatingButton = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <Modal isOpen={modal} handleOpen={setModal} />
      <InvoiceModal isOpen={invoiceModal} handleOpen={setInvoiceModal} />
      <FloatingMessage isShow={showMessage} handleShow={setShowMessage} />
      <div className="floatingButtonContainer">
        <button className="main-button" onClick={() => setShow(!show)}>
          <MdSupportAgent />
        </button>
        {show && (
          <div className="option-container">
            <a
              className="main-sub-button"
              onClick={() => {
                setShowMessage(true);
                setShow(false);
              }}
            >
              <span>
                <AiFillMessage />
              </span>
              <small className="tooltip">
                Message <span></span>
              </small>
            </a>
            <Link className="main-sub-button" to="/contact">
              <span>
                <FiMail />
              </span>
              <small className="tooltip">
                Contact <span></span>
              </small>
            </Link>
            <Link className="main-sub-button" to="/career">
              <span>
                <MdWork />
              </span>
              <small className="tooltip">
                Postuler <span></span>
              </small>
            </Link>
            <a className="main-sub-button" onClick={() => setModal(!modal)}>
              <span>
                <FiPhoneCall />
              </span>
              <small
                className="tooltip"
                style={{ textTransform: "capitalize" }}
              >
                être rappelé <span></span>
              </small>
            </a>
            <a
              className="main-sub-button"
              onClick={() => setInvoiceModal(!invoiceModal)}
            >
              <span>
                <FaFileInvoice />
              </span>
              <small className="tooltip">
                Demander un devis<span></span>
              </small>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingButton;
