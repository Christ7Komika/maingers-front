import React from "react";
import "./projects.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Img11 from "../../assets/pictures/img11.jpg";
import Img12 from "../../assets/pictures/img12.jpg";
import Img13 from "../../assets/pictures/img13.jpg";
import Img14 from "../../assets/pictures/img14.jpg";
import Img15 from "../../assets/pictures/img15.jpg";
import Img16 from "../../assets/pictures/img16.jpg";

const projet = [
  {
    id: 1,
    title: "Projet Dakar",
    content:
      "Mise à disposition de vehicules atelier pour la  confection flexible à dakar",
    img: Img11,
  },
  {
    id: 2,
    title: "Projet Total Energie",
    content:
      "Planning de compagne d'inspection et de remplacement des flexibles endommagés sur tous les sites de TOTAL ENERGIE Djeno, Nord(Yanga), Nkossa, Moho bilondo(alima), moho nord(likouf), base indistrielle(bi)",
    img: Img11,
  },
  {
    id: 3,
    title: "Projet Perenco",
    content:
      "survey des flexibles hydrauliques sur la grue babord de litanzi (perenco)",
    img: Img11,
  },
  {
    id: 4,
    title: "Projet Grand Moulin du Congo (GMC)",
    content:
      "Mis a disposition de nacelles, grues, semi-remorques et vehicule livraison gazoil et eau potable sur le cite grand moulin du congo(site coraf GMC)",
    img: Img11,
  },
  {
    id: 5,
    title: "Projet ILOGS",
    content: "location de nos engins dans le port quai ILOGS.",
    img: Img11,
  },
  {
    id: 6,
    title: "Projet BRASCO",
    content: "Mise a disposition de nos engins a BRASCO.",
    img: Img11,
  },
  {
    id: 7,
    title: "Projet ENI CONGO",
    content: "contrat ENI pour la confection des flexibles hydrauliques.",
    img: Img11,
  },
  {
    id: 8,
    title: "Projet BOSCONGO",
    content: "contrat  BOSCONGO pour la confection des flexibles hydrauliques.",
    img: Img11,
  },
];

const Projects = () => {
  return (
    <div className="container projects">
      <div className="projects-content">
        <h2>Nos réalisation</h2>
        <div className="projects-more">
          <h3>Projets réalisé</h3>
          {/* <a href="">
            <span>
              <BsFillArrowRightCircleFill />
            </span>
            EXPLORE MORE
          </a> */}
        </div>
      </div>
      <div className="projects-all-list">
        {projet.map((data, index) => (
          <div className="project-card" key={`project-card-${index}`}>
            <div className="project-card-content">
              <h3>{data.title}</h3>
              <p>{data.content}</p>
            </div>
            <img src={data.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
