import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/pictures/img1.jpg";
import img2 from "../../assets/pictures/img2.jpg";
import img3 from "../../assets/pictures/img3.jpg";
import img4 from "../../assets/pictures/img4.jpg";
import img5 from "../../assets/pictures/img5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Slider = () => {
  return (
    <div className="slider">
      <div className="content">
        <h1>
          Bienvenue chez Mainger's Hydraulic, l'excellence à votre disposition!
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
      </Swiper>
    </div>
  );
};

export default Slider;
