import React, { useState } from "react";
import CustomSelect from "../../components/input/CustomSelect";
import Flexible from "../../assets/flexibles/flexibles.png";
import "./flexiblesCategories.css";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Eau",
    image: "",
  },
  {
    id: 2,
    name: "Air",
    image: "",
  },
  {
    id: 3,
    name: "Chimie",
    image: "",
  },
  {
    id: 4,
    name: "Hydrocarbures",
    image: "",
  },
  {
    id: 5,
    name: "Chimie",
    image: "",
  },
  {
    id: 6,
    name: "Alimentaire",
    image: "",
  },
  {
    id: 7,
    name: "Projection",
    image: "",
  },
  {
    id: 8,
    name: "Composite - Polyfilms",
    image: "",
  },
  {
    id: 9,
    name: "Téflon - PTFE",
    image: "",
  },
  {
    id: 10,
    name: "Tuyaux silicone tresse inox",
    image: "",
  },
  {
    id: 11,
    name: "Onduleux métallique inox",
    image: "",
  },
];

const FlexiblesCategories = () => {
  const [flexibleData, setFlexibleData] = useState(data);
  const [typeFilter, setTypeFilter] = useState(null);
  const [init, setInit] = useState(false);

  const sendIdFlexible = (id: number) => {
    sessionStorage.setItem("idFlexibleType", id.toString());
  };
  return (
    <div className="container flexible-categories">
      <div className="flexible-ctg-header">
        <h2>Flexibles</h2>
        <div className="flexible-ctg-filter">
          <CustomSelect
            placeholder="Type"
            labelExtractor={(item: { name: string }) => item.name}
            keyExtractor={(item: { id: number }) => item.id}
            valueExtractor={(item: { id: number }) => item.id}
            data={data}
            getValue={setTypeFilter}
            init={init}
            setInit={setInit}
          />
        </div>
      </div>
      <div className="flexible-ctg-cards">
        {flexibleData.map((value, index) => (
          <div
            className="flexible-ctg-card"
            key={`flexibles-type-category-${index}`}
          >
            <h3>{value.name}</h3>
            <div className="flexible-ctg-card-img">
              <img src={Flexible} alt="" />
            </div>
            <div className="flexible-ctg-card-content">
              <Link
                to={`/services/flexibles/type`}
                onClick={() => sendIdFlexible(value.id)}
              >
                VOIR
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexiblesCategories;
