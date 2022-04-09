import React from "react";
import team1 from "../../assets/team/team (1).png";
import team2 from "../../assets/team/team (2).png";
import team3 from "../../assets/team/team (3).png";
import team4 from "../../assets/team/team (4).png";
import team5 from "../../assets/team/team (5).png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function Team() {
  return (
    <div id="team" className="team">
      <h1>Core Team</h1>
      <Splide
        options={{
          interval: 3000,
          autoplay: true,
          gap: "20px",
          rewind: true,
          loop: true,
          perPage: 3,
          height: "auto",
          width: "80%",
          arrows: false,
          focus: "center",
          pagination: false,
          drag: true,
          type: "loop",
          perMove: 1,
          breakpoints: {
            1192: {
              width: "90%",
            },
            948: {
              perPage: 2,
              width: "100%",
            },
            630: {
              perPage: 1,
              width: "100%",
            },
          },
        }}
      >
        <SplideSlide className="swiper-lazy">
          <div className="team-wrapper">
            <img src={team3} alt="" />
            <h2>David Dotan</h2>
            <p>
              Founder <br /> <span className="hidden">hidden</span>
            </p>
          </div>
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <div className="team-wrapper">
            <img src={team4} alt="" />
            <h2>TiSci</h2>
            <p>
              Founder and <br /> Lead Developer
            </p>
          </div>
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <div className="team-wrapper">
            <img src={team5} alt="" />
            <h2>aaronft</h2>
            <p>
              Project and <br /> Community Manager
            </p>
          </div>
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <div className="team-wrapper">
            <img src={team1} alt="" />
            <h2>Db009</h2>
            <p>
              Unity <br /> Developer
            </p>
          </div>
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <div className="team-wrapper">
            <img src={team2} alt="" />
            <h2>0xTom</h2>
            <p>
              Solidity <br /> Developer
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Team;
