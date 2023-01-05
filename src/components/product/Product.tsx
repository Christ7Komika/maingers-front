import React from "react";
import "./product.css";
import ProductCard from "../card/ProductCard";
import bgTransparentImg1 from "../../assets/pictures/bg-transparent1.png";
import bgTransparentImg2 from "../../assets/pictures/bg-transparent2.png";
import bgTransparentImg3 from "../../assets/pictures/bg-transparent3.png";

const productData = [
  {
    title: "Hydraulique",
    text: "Confection et pose tuyauterie hydraulique.",
    link: "#",
    img: bgTransparentImg1,
  },
  {
    title: "Néttoyage industriel",
    text: "Néttoyage des plateforme, des capacités...",
    link: "#",
    img: bgTransparentImg2,
  },
  {
    title: "Location engin élévateur",
    text: "Location des vehicules industriels, grues...",
    link: "#",
    img: bgTransparentImg3,
  },
];

const Product = () => {
  return (
    <div className="container product">
      <h2>NOS SERVICES</h2>
      <div className="product-container">
        {productData.map((product, index) => (
          <ProductCard key={`product-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
