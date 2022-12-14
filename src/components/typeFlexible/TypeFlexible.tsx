import React, { useState } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import Flexible from "../../assets/flexibles/flexibles.png";
const CustomSelect = React.lazy(() => import("../input/CustomSelect"));
import "./typeFlexible.css";

const data = [
  {
    id: 1,
    name: "Norme ISO 1403",
  },
  {
    id: 2,
    name: "Norme ISO 4641",
  },
  {
    id: 3,
    name: "Norme ISO 73411",
  },
];

const TypeFlexible = () => {
  const [norme, setNorme] = useState(null);
  const [name, setName] = useState(null);
  return (
    <div className="container type-flexible">
      <div className="flexible-type-header">
        <h2>Flexibles a eau</h2>
        <form className="flexible-type-filter">
          <div className="search-bar">
            <span>
              <FaSearch />
            </span>
            <input type="text" />
          </div>
          <CustomSelect
            placeholder="Norme ISO"
            labelExtractor={(item: { name: string }) => item.name}
            keyExtractor={(item: { id: number }) => item.id}
            valueExtractor={(item: { id: number }) => item.id}
            data={data}
            getValue={setNorme}
          />
          <button>Filtrer</button>
        </form>
      </div>
      <div className="flexible-type-cards">
        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flexible-type-card">
          <div className="flexible-type-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-type-card-content">
            <h3>Flexible name</h3>
            <p>Norme name</p>
            <a href="/departement/flexibles/type/infos">
              Plus d'infos
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeFlexible;
