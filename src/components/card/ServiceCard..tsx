import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./servicecard.css";

interface Props {
  title: string;
  text: string;
  link: string;
  img: string;
}
const ServiceCard = ({ product }: { product: Props }) => {
  return (
    <div className="card-service">
      <div className="card-service-img">
        <img src={product.img} alt="" />
      </div>
      <div className="card-service-content">
        <h3>{product.title}</h3>
        <small>{product.text}</small>
        <a href={product.link}>
          Learn more <FaAngleRight />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
