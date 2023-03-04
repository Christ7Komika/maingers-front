import React from "react";
import "./sectionflexible.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Img4 from "../../assets/pictures/img4.jpg";
import Img6 from "../../assets/pictures/img6.jpg";
import Brochure from "../../assets/pictures/brochure.png";
const SectionFlexible = () => {
  return (
    <div className="section-flexible">
      <div className="section-flexible-top">
        <div className="section-flexible-top-left">
          <h2>CONFECTION DE FLEXIBLES HYDRAULIQUES</h2>
          <p>
            MAINGER'S-HYDRAULIC & SERVICES dispose d'un atelier de confection de
            tuyauteries hydrauliques aux normes de sécurité moderne et
            performante.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            non eaque facere voluptatum, nulla aliquid iusto debitis nisi
            voluptates minus est! Accusantium fugit fuga maxime expedita.
            Aliquid sapiente quis magni vel in nulla velit fuga.
          </p>
        </div>
        <div className="section-flexible-top-right">
          <img src={Brochure} alt="" />
        </div>
      </div>
      <div className="section-flexible-bottom">
        {[0, 1, 2, 3].map((elt) => (
          <div className="card">
            <div className="card-img">
              <img src={Img6} alt="" />
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quidem sequi quasi aliquam nulla hic!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis inventore quas earum unde dolorum? Sit eos minima,
                voluptate harum porro blanditiis assumenda libero natus
                molestias.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFlexible;

/**
 * 
 * 
 *  <div className="container section-flexible">
      <div className="section-content">
        <h2>CONFECTION DE FLEXIBLES HYDRAULIQUES</h2>
        <p>
          MAINGER'S-HYDRAULIC & SERVICES dispose d'un atelier de confection de
          tuyauteries hydrauliques aux normes de sécurité moderne et
          performante.
        </p>
        <div className="flexible-card">
          <h3>Type de presse hydraulique: FINN - POWER P 32 MS20</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="flexible-card">
          <h3>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="section-img">
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
            <img src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
