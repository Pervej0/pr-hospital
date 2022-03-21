import React from "react";
import Slider from "react-slick";
import HeroImg from "../../../images/doctor.png";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slider-1">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div>
              <img src={HeroImg} alt="" />
            </div>
            <div>
              <div>
                <h3 className="text-white text-4xl mb-2">
                  Welcome to PR Hospital
                </h3>
                <p className="text-white">
                  In Norse mythology, Hel is an afterlife location. It is ruled
                  over by a being of the same name, Hel. In late Icelandic
                  sources, varying descriptions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-2"></div>
        <div className="slider-3"></div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
