import React from "react";
import "./marketplace.css";
const ProductCard = React.lazy(() => import("../card/ProductCard"));
import { v4 as uuid } from "uuid";
import bgTransparentImg1 from "../../assets/pictures/bg-transparent1.png";
import bgTransparentImg2 from "../../assets/pictures/bg-transparent2.png";
import bgTransparentImg3 from "../../assets/pictures/bg-transparent3.png";
import ServiceCard from "../card/ServiceCard.";

const productData = [
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet.",
    link: "#",
    img: bgTransparentImg1,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet.",
    link: "#",
    img: bgTransparentImg2,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet.",
    link: "#",
    img: bgTransparentImg3,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet.",
    link: "#",
    img: bgTransparentImg1,
  },
  {
    title: "Product name",
    text: "Lorem ipsum dolor sit amet.",
    link: "#",
    img: bgTransparentImg2,
  },
];

const MarketPlace = () => {
  return (
    <div className="container marketplace">
      <div className="marketplace-list-product">
        {productData.map((product) => (
          <ServiceCard key={uuid()} product={product} />
        ))}
      </div>
      <div className="marketplace-content">
        <h2>Market Place</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          quasi, asperiores nemo ullam consequatur assumenda facilis officiis,
          reiciendis quis animi eos adipisci. Ipsum, placeat quas.
        </p>
      </div>
      <div className="marketplace-img"></div>
    </div>
  );
};

export default MarketPlace;
