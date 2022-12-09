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
            Learn more <FaAngleRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

/**
 * 
 * 
 * 
 *     title: "Product name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,minus?",
    link: "#",
    img: bgTransparentImg1,
  },
 */
