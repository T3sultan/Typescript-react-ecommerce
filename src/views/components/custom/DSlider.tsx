import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/images/pic-1.jpg";
import image2 from "../../../assets/images/pic.jpg";
import image3 from "../../../assets/images/pic-2.jpg";
import "swiper/css";

const DSlider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DSlider;
