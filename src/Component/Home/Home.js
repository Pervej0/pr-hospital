import React from "react";
import "./Home.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCarousel from "./SubCompo/HeroCarousel";
import MainFeatures from "./SubCompo/MainFeatures";
import HealthTips from "./SubCompo/HealthTips";
import ShowDoctor from "./SubCompo/ShowDoctor";
import Reviews from "./SubCompo/Reviews";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <MainFeatures />
      <HealthTips />
      <ShowDoctor />
      <Reviews />
    </>
  );
};

export default Home;
