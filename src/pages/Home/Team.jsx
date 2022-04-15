import React from "react";
import team1 from "../../assets/team/team (1).png";
import team2 from "../../assets/team/team (2).png";
import team3 from "../../assets/team/team (3).png";
import team4 from "../../assets/team/team (4).png";
import team5 from "../../assets/team/team (5).png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import TeamCard from "../../components/TeamCard/TeamCard";
function Team() {
  return (
    <div id="team" className="team">
      <h1>Core Team</h1>
      <Splide
        options={{
          interval: 4000,
          autoplay: true,
          gap: "20px",
          rewind: true,
          loop: true,
          perPage: 3,
          height: "auto",
          width: "100%",
          arrows: true,
          focus: "center",
          pagination: false,
          drag: true,
          type: "loop",
          perMove: 1,
          flickMaxPages: 1,
          flickPower: 500,
          breakpoints: {
            1192: {
              width: "100%",
              perPage: 2,
            },

            630: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide className="swiper-lazy">
          <TeamCard img={team3} name={"David Dotan"} role={"Founder"} />
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <TeamCard
            img={team4}
            name={"TiSci"}
            role={"Founder and Lead Developer"}
          />
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <TeamCard
            img={team5}
            name={"aaronft"}
            role={"Project and Community Manager"}
          />
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <TeamCard img={team1} name={"Db009"} role={"Unity Developer"} />
        </SplideSlide>
        <SplideSlide className="swiper-lazy">
          <TeamCard img={team2} name={"0xTom"} role={"Solidity Developer"} />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Team;
