import React from "react";
import "./product.css";
import { v4 as uuid } from "uuid";
const ProductCard = React.lazy(() => import("../card/ProductCard"));
import bgTransparentImg1 from "../../assets/pictures/bg-transparent1.png";
import bgTransparentImg2 from "../../assets/pictures/bg-transparent2.png";
import bgTransparentImg3 from "../../assets/pictures/bg-transparent3.png";

const productData = [
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
    img: bgTransparentImg1,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
    img: bgTransparentImg2,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
    img: bgTransparentImg3,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
    img: bgTransparentImg1,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
    img: bgTransparentImg2,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
    img: bgTransparentImg3,
  },
];

const Product = () => {
  return (
    <div className="container product">
      <h2>Our product</h2>
      <div className="product-container">
        {productData.map((product) => (
          <ProductCard key={uuid()} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
