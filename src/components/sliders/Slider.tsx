import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/test/IMG-2636.jpg";
import img2 from "../../assets/test/IMG_2748.jpeg";
import img3 from "../../assets/test/IMG-2703.jpg";
import img4 from "../../assets/test/IMG-2723.jpg";
import img5 from "../../assets/test/P1010184.jpg";
import img6 from "../../assets/test/IMG-2697.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="slider">
      <div className="content">
        <h1>
          Bienvenue chez MAINGER'S-HYDRAULIC, l'excellence à votre disposition!
        </h1>
        <p>
          Votre partenaire indiqué pour tous vos travaux d'inspection , de
          confection de flexibles hydrauliques, de maintenance industrielle, de
          location d'engins élévateurs et semi-remorques.
        </p>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="slider-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className="slider-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
