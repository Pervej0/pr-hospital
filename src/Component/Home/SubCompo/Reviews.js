import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick/lib/slider";

const Reviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container pb-20">
      <h1 className="my-10 text-xl uppercase font-semibold my-10">
        Appreciation&gt;&gt;
      </h1>
      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item._id} className="px-3">
              <div className="border rounded p-8">
                <div>
                  <img
                    className="rounded-full mr-auto"
                    width="100"
                    src={item.photoURL}
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-xl my-3 font-semibold">{item.name}</h4>
                  <p className="text-gray-500 my-2 text-sm">
                    {item.extraDetails}
                  </p>
                  <small className="font-bold">{item.profession}</small>
                  <div className="flex justify-center">
                    <ReactStars
                      count={5}
                      value={item.stars}
                      edit={false}
                      activeColor="#ffaa4a"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
