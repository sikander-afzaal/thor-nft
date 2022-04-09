import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Lazy } from "swiper";
import "swiper/swiper-bundle.css";
import art1 from "../../assets/images/art1.png";
import art2 from "../../assets/images/art2.png";
import art3 from "../../assets/images/art3.png";
import art4 from "../../assets/images/art4.png";
import art5 from "../../assets/images/art5.png";

SwiperCore.use([Autoplay, Navigation, Lazy]);

const Collection = () => {
  return (
    <>
      <div className="collection_wrap">
        <h1>GAMEPLAY</h1>
        <div className="collection">
        <Swiper
          direction="vertical"
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loopedSlides={3}
        >
          <SwiperSlide className="swiper-lazy">
            <img src={art1} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art2} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art3} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art4} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art5} alt="..." />
          </SwiperSlide>
        </Swiper>

        <Swiper
          direction="vertical"
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          loopedSlides={4}
        >
          <SwiperSlide className="swiper-lazy">
            <img src={art1} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art2} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art3} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art4} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art5} alt="..." />
          </SwiperSlide>
        </Swiper>
        <Swiper
          direction="vertical"
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loopedSlides={3}
        >
          <SwiperSlide className="swiper-lazy">
            <img src={art1} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art2} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art3} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art4} alt="..." />
          </SwiperSlide>
          <SwiperSlide className="swiper-lazy">
            <img src={art5} alt="..." />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
     
    </>
  );
};

export default Collection;
