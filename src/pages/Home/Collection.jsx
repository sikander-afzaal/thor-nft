import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import art1 from "../../assets/images/art1.png";
import art2 from "../../assets/images/art2.png";
import art3 from "../../assets/images/art3.png";
import art4 from "../../assets/images/art4.png";
import Fade from "react-reveal/Fade";
const Collection = () => {
  return (
    <Fade top>
      <div className="collection_wrap">
        <h1>Gameplay</h1>
        <div className="collection">
          <Splide
            options={{
              speed: "3000",
              perMove: 1,
              interval: 2000,
              autoplay: true,
              gap: "20px",
              loop: true,
              perPage: 3,
              height: "auto",
              width: "100%",
              arrows: false,
              focus: "center",
              pagination: false,
              drag: true,
              direction: "ttb",
              type: "loop",
              breakpoints: {
                800: {
                  direction: "ltr",
                },
              },
            }}
          >
            <SplideSlide>
              <img src={art1} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art2} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art3} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art4} alt="..." />
            </SplideSlide>
          </Splide>

          <Splide
            options={{
              speed: "3000",
              perMove: 1,
              interval: 3500,
              autoplay: true,
              gap: "20px",
              loop: true,
              perPage: 3,
              height: "auto",
              width: "100%",
              arrows: false,
              focus: "center",
              pagination: false,
              drag: true,
              direction: "ttb",
              type: "loop",
              breakpoints: {
                800: {
                  direction: "rtl",
                },
              },
            }}
          >
            <SplideSlide>
              <img src={art4} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art3} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art2} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art1} alt="..." />
            </SplideSlide>
          </Splide>
          <Splide
            options={{
              speed: "3000",
              perMove: 1,
              interval: 4000,
              autoplay: true,
              gap: "20px",
              loop: true,
              perPage: 3,
              height: "auto",
              width: "100%",
              arrows: false,
              focus: "center",
              pagination: false,
              drag: true,
              direction: "ttb",
              type: "loop",
              breakpoints: {
                800: {
                  direction: "ltr",
                },
              },
            }}
          >
            <SplideSlide>
              <img src={art1} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art2} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art3} alt="..." />
            </SplideSlide>
            <SplideSlide>
              <img src={art4} alt="..." />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </Fade>
  );
};

export default Collection;
