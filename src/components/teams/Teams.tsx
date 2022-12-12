import React from "react";
import "./teams.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import User from "../../assets/user/user.jpg";
import User2 from "../../assets/user/user2.jpg";
import User3 from "../../assets/user/user3.jpg";
import User4 from "../../assets/user/user4.jpg";
import User5 from "../../assets/user/user5.jpg";

const Teams = () => {
  return (
    <div className="container teams">
      <h2>Our team</h2>
      <div className="team-list">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card-team">
              <div className="card-team-header">
                <p>lorem ipsum</p>
                <h3>John Doe</h3>
              </div>
              <div className="card-team-img">
                <img src={User} alt="" />
              </div>
              <div className="card-team-post">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="card-content-post">
                <p>Informaticien</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-team">
              <div className="card-team-header">
                <p>lorem ipsum</p>
                <h3>John Doe</h3>
              </div>
              <div className="card-team-img">
                <img src={User2} alt="" />
              </div>
              <div className="card-team-post">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="card-content-post">
                <p>Informaticien</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-team">
              <div className="card-team-header">
                <p>lorem ipsum</p>
                <h3>John Doe</h3>
              </div>
              <div className="card-team-img">
                <img src={User3} alt="" />
              </div>
              <div className="card-team-post">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="card-content-post">
                <p>Informaticien</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-team">
              <div className="card-team-header">
                <p>lorem ipsum</p>
                <h3>John Doe</h3>
              </div>
              <div className="card-team-img">
                <img src={User4} alt="" />
              </div>
              <div className="card-team-post">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="card-content-post">
                <p>Informaticien</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-team">
              <div className="card-team-header">
                <p>lorem ipsum</p>
                <h3>John Doe</h3>
              </div>
              <div className="card-team-img">
                <img src={User5} alt="" />
              </div>
              <div className="card-team-post">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="card-content-post">
                <p>Informaticien</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Teams;
