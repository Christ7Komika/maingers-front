import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./productcard.css";

interface Props {
  title: string;
  text: string;
  link: string;
  img: string;
}

const ProductCard = ({ product }: { product: Props }) => {
  return (
    <div className="card-product">
      <div className="card-container">
        <div className="card-img">
          <img src={product.img} alt="" />
        </div>
        <div className="card-content">
          <h3>{product.title}</h3>
          <small>{product.text}</small>
          <a href={product.link}>
            En savoir plus <FaAngleRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
