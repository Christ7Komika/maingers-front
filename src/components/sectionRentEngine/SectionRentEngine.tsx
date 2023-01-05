import React from "react";
import "./sectionRentEngine.css";
import { FaCheckCircle } from "react-icons/fa";

const SectionRentEngine = () => {
  return (
    <div className="container rent-engine">
      <div className="rent-engine-content">
        <h2>Lorem, ipsum dolor.</h2>
        <div className="rent-engine-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
            sequi iure. Dolorem enim placeat, omnis assumenda quidem vitae
            dolorum laboriosam vero excepturi animi, ea magnam.
          </p>
        </div>
        <ul>
          {datas.map((data, index) => (
            <li key={`section-rent-engine-${index}`}>
              <span>
                <FaCheckCircle />
              </span>
              {data}
            </li>
          ))}
        </ul>
      </div>
      <div className="rent-engine-img"></div>
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
