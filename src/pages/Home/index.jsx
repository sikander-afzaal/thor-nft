import React from "react";
import "./style.css";
import Hero from "./Hero";
import About from "./About";
import Collection from "./Collection";
import Siege from "./Siege";
import Character from "./Character";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Siege />
      <Collection />
      <Character />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Home;
