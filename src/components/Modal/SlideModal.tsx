import "./slideModal.css";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useRef } from "react";

interface Props {
  close: Function;
  slideData: any;
  open: boolean;
}

const SlideModal = ({ close, slideData, open }: Props) => {
  const html = document.querySelector("html") as HTMLElement;

  useEffect(() => {
    html.style.overflowY = "scroll";
  }, [open]);

  if (open) {
    html.style.overflowY = "hidden";
  } else {
    html.style.overflowY = "scroll";
    return <></>;
  }

  return (
    <div
      className="slide__modal"
      onClick={(e) => {
        const div = e.target as HTMLDivElement;

        if (div.parentElement?.className === "slide__modal") {
          close(false);
        }
      }}
    >
      <div className="slide__modal__container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {slideData.map((img: { id: string; img: string }) => (
            <SwiperSlide key={"img-slide-" + img.id}>
              <img src={img.img} alt="" className="slider-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideModal;
