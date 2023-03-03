import React from "react";
import "./product.css";
import ProductCard from "../card/ProductCard";
import Flexibles from "../../assets/pictures/flexible.svg";
import Cleaning from "../../assets/pictures/pipe.svg";
import Engine from "../../assets/pictures/truck.svg";

const productData = [
  {
    title: "Confection & réparation de flexibles hydrauliques",
    text: "Conseil, inspection, confection, et pose flexible...",
    link: "/services/flexibles",
    img: Flexibles,
  },
  {
    title: "Maintenance & Nettoyage industriel",
    text: "Néttoyage des plateforme, des capacités, des pipes...",
    link: "/services/industrial-cleaning",
    img: Cleaning,
  },
  {
    title: "Levage, manutention & transport",
    text: "Location des vehicules, grues, nacelle et chariot élévateur...",
    link: "/services/rent-engine",
    img: Engine,
  },
];

const Product = () => {
  return (
    <div className="container product">
      <h2>NOS SERVICES</h2>
      <div className="product-container">
        {productData.map((product, index) => (
          <ProductCard key={`product-card-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
