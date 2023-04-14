import "./projects.css";
import Img11 from "../../assets/pictures/img11.jpg";

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
    title: "Projet MAINGER'S-HYDRAULIC Total Energie",
    content:
      "Planning de compagne d'inspection et de remplacement des flexibles...",
    img: Img11,
  },
  {
    id: 3,
    title: "Projet Perenco",
    content:
      "survey des flexibles hydrauliques sur la grue babord de litanzi (perenco)",
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
