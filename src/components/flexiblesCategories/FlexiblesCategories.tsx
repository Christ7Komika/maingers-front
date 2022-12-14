import React, { useState } from "react";
const CustomSelect = React.lazy(
  () => import("../../components/input/CustomSelect")
);
import Flexible from "../../assets/flexibles/flexibles.png";
import "./flexiblesCategories.css";

const data = [
  {
    id: 1,
    name: "Eau",
  },
  {
    id: 2,
    name: "Air",
  },
  {
    id: 3,
    name: "Chimie",
  },
];

const FlexiblesCategories = () => {
  const [typeFilter, setTypeFilter] = useState(null);
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
          />
        </div>
      </div>
      <div className="flexible-ctg-cards">
        <div className="flexible-ctg-card">
          <h3>Flexible Eau</h3>
          <div className="flexible-ctg-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-ctg-card-content">
            <a href="#">VOIR</a>
          </div>
        </div>
        <div className="flexible-ctg-card">
          <h3>Flexible Eau</h3>
          <div className="flexible-ctg-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-ctg-card-content">
            <a href="#">VOIR</a>
          </div>
        </div>
        <div className="flexible-ctg-card">
          <h3>Flexible Eau</h3>
          <div className="flexible-ctg-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-ctg-card-content">
            <a href="#">VOIR</a>
          </div>
        </div>
        <div className="flexible-ctg-card">
          <h3>Flexible Eau</h3>
          <div className="flexible-ctg-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-ctg-card-content">
            <a href="#">VOIR</a>
          </div>
        </div>
        <div className="flexible-ctg-card">
          <h3>Flexible Eau</h3>
          <div className="flexible-ctg-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-ctg-card-content">
            <a href="#">VOIR</a>
          </div>
        </div>
        <div className="flexible-ctg-card">
          <h3>Flexible Eau</h3>
          <div className="flexible-ctg-card-img">
            <img src={Flexible} alt="" />
          </div>
          <div className="flexible-ctg-card-content">
            <a href="#">VOIR</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexiblesCategories;
