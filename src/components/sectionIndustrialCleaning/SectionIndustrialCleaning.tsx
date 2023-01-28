import React from "react";
import "./sectionIndustrialCleaning.css";
import { FaCheckCircle } from "react-icons/fa";

const SectionIndustrialCleaning = () => {
  return (
    <div className="container industrial-cleaning">
      <div className="industrial-cleaning-img"></div>
      <div className="industrial-cleaning-content">
        <h2>Location d'engins</h2>
        <div className="industrial-cleaning-card">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
            sequi iure. Dolorem enim placeat, omnis assumenda quidem vitae
            dolorum laboriosam vero excepturi animi, ea magnam.
          </p>
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

export default SectionIndustrialCleaning;
