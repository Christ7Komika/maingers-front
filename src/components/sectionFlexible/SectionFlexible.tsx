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
import Img5 from "../../assets/pictures/img5.jpg";
import Img6 from "../../assets/pictures/img6.jpg";
import Img7 from "../../assets/pictures/img7.jpg";
import Img8 from "../../assets/pictures/img8.jpg";

const SectionFlexible = () => {
  return (
    <div className="container section-flexible">
      <div className="section-content">
        <h2>CONFECTION DE FLEXIBLES HYDRAULIQUES</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
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
  );
};

export default SectionFlexible;
