import React from "react";
import Img10 from "../../assets/pictures/img10.jpg";
import { FaIndustry } from "react-icons/fa";
import "./work.css";

const Work = () => {
  return (
    <div className="container work">
      <div className="work-about">
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Experience</h3>
            <p>There are many</p>
          </div>
        </div>
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Experience</h3>
            <p>There are many</p>
          </div>
        </div>
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Experience</h3>
            <p>There are many</p>
          </div>
        </div>
        <div className="card-about">
          <span>
            <FaIndustry />
          </span>
          <div className="card-about-content">
            <h3>Experience</h3>
            <p>There are many</p>
          </div>
        </div>
      </div>
      <div className="work-content">
        <h2>The standard chunk</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          architecto!
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          reprehenderit, autem mollitia inventore quia similique nam consectetur
          odit sint nihil eaque vitae laboriosam velit eos doloremque quos
          consequuntur dignissimos sunt earum excepturi necessitatibus
          recusandae quam accusamus error. Consectetur, dolorum facere.
        </p>
      </div>
      <div className="work-img">
        <img src={Img10} alt="" />
      </div>
    </div>
  );
};

export default Work;
