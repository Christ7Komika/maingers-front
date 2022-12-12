import React from "react";
import { FaVials } from "react-icons/fa";
import "./valor.css";

const Valor = () => {
  return (
    <div className="container valor">
      <div className="valor-img"></div>
      <div className="valor-content">
        <div className="valor-card">
          <div className="valor-card-header">
            <span>
              <FaVials />
            </span>
            <h3>Why do we use it?</h3>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="valor-card">
          <div className="valor-card-header">
            <span>
              <FaVials />
            </span>
            <h3>Why do we use it?</h3>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="valor-card">
          <div className="valor-card-header">
            <span>
              <FaVials />
            </span>
            <h3>Why do we use it?</h3>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valor;
