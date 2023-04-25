import "./sectionflexible.css";
import Im1 from "../../assets/flexible_engins/im1.png";
import Im2 from "../../assets/flexible_engins/im2.png";
import Im3 from "../../assets/flexible_engins/im3.png";
import Im4 from "../../assets/flexible_engins/im4.png";

import Brochure from "../../assets/pictures/brochure.png";
const SectionFlexible = () => {
  return (
    <div className="section-flexible">
      <div className="section-flexible-top">
        <div className="section-flexible-top-left">
          <h2>CONFECTION DE FLEXIBLES HYDRAULIQUES</h2>
          <p>
            MAINGER'S-HYDRAULIC & SERVICES dispose d'un atelier de confection de
            tuyauteries hydrauliques aux normes de sécurité moderne et
            performante.
          </p>
          <p>
            MH présente actuellement sur le marché des E.P.I, elle vont une
            gamme complète de produits hydrauliques.
            <br />
            Et rassemble des compétences variées, et met à votre disposition un
            atelier moderne de confection de flexibles aux normes de sécurités
            modernes , performants et aux prix abordables.
          </p>
        </div>
        <div className="section-flexible-top-right">
          <img src={Brochure} alt="" />
        </div>
      </div>
      <div className="section-flexible-bottom">
        {flexible.map((elt) => (
          <div className="card" key={"card__flexible__" + elt.id}>
            <div className="card-img">
              <img src={elt.img} alt="" />
            </div>
            <div className="card-content">
              <p>{elt.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const flexible = [
  {
    id: 1,
    content: `
    Nous possédons au sein de notre atelier une tronçonneuse pour tous flexibles hydrauliques assurant une coupe nette et précise des tuyaux hydrauliques. 
   
`,
    img: Im1,
  },
  {
    id: 2,
    content: `
    
    .`,
    img: Im2,
  },
  {
    id: 3,
    content: `                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Facilis inventore quas earum unde dolorum? Sit eos minima,
    voluptate harum porro blanditiis assumenda libero natus
    molestias.`,
    img: Im3,
  },
  {
    id: 4,
    content: `                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Facilis inventore quas earum unde dolorum? Sit eos minima,
    voluptate harum porro blanditiis assumenda libero natus
    molestias.`,
    img: Im4,
  },
];

export default SectionFlexible;
