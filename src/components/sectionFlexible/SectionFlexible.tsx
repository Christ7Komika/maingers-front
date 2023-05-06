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
    Dénudeuses pour tuyaux flexibles et câbles jusque 2" de diamètre. Raccordées en 220 ou 380 V, fonctionnent en automatique pour les applications d'assemblage de flexibles en série.
    `,
    img: Im1,
  },
  {
    id: 2,
    content: `
    Notre sertisseuse vous permet de sertir une large gamme de composants pour vos circuits hydrauliques : embouts et douilles à sertir, tuyaux hydrauliques, raccords à bagues, adaptateurs, coupleurs, accessoires.`,
    img: Im2,
  },
  {
    id: 3,
    content: `Notre tour à machine vous permet de fabriquer des pièces mécanique en utilisant le d usinage.`,
    img: Im3,
  },
  {
    id: 4,
    content: `Banc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   test multiparamètre : Banc d'essais destructifs jusqu'à 4000 bar muni de pompe pneumo-hydraulique, avec contrôle automatique PLC.`,
    img: Im4,
  },
];

export default SectionFlexible;
