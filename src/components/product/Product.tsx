import React from "react";
import "./product.css";
import { FaAngleRight } from "react-icons/fa";
import bgTransparentImg1 from "../../assets/pictures/bg-transparent1.png";
import bgTransparentImg2 from "../../assets/pictures/bg-transparent2.png";
import bgTransparentImg3 from "../../assets/pictures/bg-transparent3.png";

const Product = () => {
  return (
    <div className="container product">
      <h2>Our product</h2>
      <div className="product-container">
        <div className="card-product">
          <div className="card-container">
            <div className="card-img">
              <img src={bgTransparentImg1} alt="" />
            </div>
            <div className="card-content">
              <h3>Product name</h3>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                minus?
              </small>
              <a href="">
                Learn more <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="card-product">
          <div className="card-container">
            <div className="card-img">
              <img src={bgTransparentImg2} alt="" />
            </div>
            <div className="card-content">
              <h3>Product name</h3>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                minus?
              </small>
              <a href="">
                Learn more <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="card-product">
          <div className="card-container">
            <div className="card-img">
              <img src={bgTransparentImg3} alt="" />
            </div>
            <div className="card-content">
              <h3>Product name</h3>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                minus?
              </small>
              <a href="">
                Learn more <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="card-product">
          <div className="card-container">
            <div className="card-img">
              <img src={bgTransparentImg2} alt="" />
            </div>
            <div className="card-content">
              <h3>Product name</h3>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                minus?
              </small>
              <a href="">
                Learn more <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="card-product">
          <div className="card-container">
            <div className="card-img">
              <img src={bgTransparentImg3} alt="" />
            </div>
            <div className="card-content">
              <h3>Product name</h3>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                minus?
              </small>
              <a href="">
                Learn more <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="card-product">
          <div className="card-container">
            <div className="card-img">
              <img src={bgTransparentImg1} alt="" />
            </div>
            <div className="card-content">
              <h3>Product name</h3>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                minus?
              </small>
              <a href="">
                Learn more <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
