"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/image/banner-1.jpg", // Adjust the path
      title: "Lipsticks",
      mainTitle: "Appollo Lipstick",
      price: "$30",
    },
    {
      id: 1,
      img: "/image/banner-2.jpg", // Adjust the path
      title: "Cosmetics Products",
      mainTitle: "Fatima Brands",
      price: "$35",
    },
    {
      id: 2,
      img: "/image/banner-3.jpg", // Adjust the path
      title: "Sale Offer",
      mainTitle: "New Discount Collections",
      price: "$30",
    },
  ];
  

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
