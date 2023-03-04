import React from "react";
import "./sectionRentEngine.css";
import { FaCheckCircle } from "react-icons/fa";
import Img1 from "../../assets/pictures/img7.jpg";

const SectionRentEngine = () => {
  return (
    <div className="container industrial-cleaning">
      <div className="industrial-cleaning-img">
        <img src={Img1} alt="" />
      </div>
      <div className="industrial-cleaning-content">
        <h2>Location d'engins</h2>
        <div className="industrial-cleaning-card">
          <p>MAINGER'S HYDRAULIC & SERVICES evolué aussi dans le domaine</p>
        </div>
        <ul>
          {datas.map((data, index) => (
            <li key={`section-industrial-cleaning-${index}`}>
              <span>
                <FaCheckCircle />
              </span>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const datas = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Eum vel eaque, in eligendi cum quas!",
];

export default SectionRentEngine;
