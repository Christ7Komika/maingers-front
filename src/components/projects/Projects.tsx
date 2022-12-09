import React from "react";
import "./projects.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Img11 from "../../assets/pictures/img11.jpg";
import Img12 from "../../assets/pictures/img12.jpg";
import Img13 from "../../assets/pictures/img13.jpg";
import Img14 from "../../assets/pictures/img14.jpg";
import Img15 from "../../assets/pictures/img15.jpg";
import Img16 from "../../assets/pictures/img16.jpg";

const Projects = () => {
  return (
    <div className="container projects">
      <div className="projects-content">
        <h2>Contrary to popular</h2>
        <div className="projects-more">
          <h3>FEATURES PROJECTS</h3>
          <a href="">
            <span>
              <BsFillArrowRightCircleFill />
            </span>
            EXPLORE MORE
          </a>
        </div>
      </div>
      <div className="projects-all-list">
        <div className="project-card">
          <div className="project-card-content">
            <h3>Richard McClintock,</h3>
            <small>going through the cites</small>
          </div>
          <img src={Img11} alt="" />
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <h3>Richard McClintock,</h3>
            <small>going through the cites</small>
          </div>
          <img src={Img12} alt="" />
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <h3>Richard McClintock,</h3>
            <small>going through the cites</small>
          </div>
          <img src={Img13} alt="" />
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <h3>Richard McClintock,</h3>
            <small>going through the cites</small>
          </div>
          <img src={Img14} alt="" />
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <h3>Richard McClintock,</h3>
            <small>going through the cites</small>
          </div>
          <img src={Img15} alt="" />
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <h3>Richard McClintock,</h3>
            <small>going through the cites</small>
          </div>
          <img src={Img16} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
