import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./productcard.css";
import { Link } from "react-router-dom";

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
          <Link to={product.link}>
            En savoir plus <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
