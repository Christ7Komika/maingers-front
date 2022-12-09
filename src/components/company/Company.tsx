import React from "react";
import { FaIndustry, FaArrowRight } from "react-icons/fa";
import Img6 from "../../assets/pictures/img6.jpg";
import Img7 from "../../assets/pictures/img7.jpg";
import "./company.css";

const Company = () => {
  return (
    <div className="container company">
      <div className="company-content">
        <h2>Contrary to popular belief</h2>
        <h3>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly bel
        </p>
        <button>
          <FaArrowRight />
          HAVE A PROJECT
        </button>
      </div>
      <div className="company-img">
        <div className="company-first-img">
          <div className="company-infos">
            <span>
              <FaIndustry />
            </span>
            <p>The standard chunk</p>
          </div>
          <img src={Img7} alt="" />
        </div>
        <div className="company-second-img">
          <img src={Img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
