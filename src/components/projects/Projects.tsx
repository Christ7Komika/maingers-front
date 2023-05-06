import "./projects.css";
import Img3 from "../../assets/projet/986b1ade-fad1-4c62-bc99-e7b2dec895a4.jpg";
import Img2 from "../../assets/projet/P1010183.jpg";
import Img1 from "../../assets/projet/dakar.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const projet = [
  {
    id: 1,
    title: "Projet Dakar",
    content:
      "Mise à disposition de véhicules atelier pour la  confection flexible à dakar",
    img: Img1,
  },
  {
    id: 2,
    title: "Projet MAINGER'S-HYDRAULIC Total Energie",
    content:
      "Planning de compagne d'inspection et de remplacement des flexibles...",
    img: Img2,
  },
  {
    id: 3,
    title: "Projet Perenco",
    content:
      "survey des flexibles hydrauliques sur la grue babord de litanzi (perenco)",
    img: Img3,
  },
];

const Projects = () => {
  return (
    <div className="container projects">
      <div className="projects-content">
        <h2>Nos réalisation</h2>
        <div className="projects-more">
          <h3>Projets réalisé</h3>
          <Link to="/actualities">
            <span>
              <BsFillArrowRightCircleFill />
            </span>
            VOIR PLUS
          </Link>
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
