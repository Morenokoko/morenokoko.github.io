import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Stack } from "@mui/material";
import image from "../../assets/images/sample-website.jpg";

const customDots = (dots, currentSlide, goToSlide) => (
  <ul
    style={{
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      listStyle: "none", // Add this line to remove bullet points
    }}
  >
    {React.Children.map(dots, (dot, index) => (
      <li
        style={{
          margin: "0 4px",
        }}
        onClick={() => (index === 1 ? goToSlide(index + 1) : goToSlide(index))}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor:
              index === currentSlide
                ? "#ffffff"
                : index + 1 === currentSlide
                ? "#ffffff"
                : "#9A9A9A",
            borderRadius: "50%",
            opacity:
              index === currentSlide
                ? "1"
                : index + 1 === currentSlide
                ? "1"
                : "0.7",
            cursor: "pointer",
          }}
        />
      </li>
    ))}
  </ul>
);

const HomeRecentWorks = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    appendDots: (dots) =>
      customDots(dots, currentSlide, (index) => {
        sliderRef.current.slickGoTo(index);
        setCurrentSlide(index);
      }),
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <Stack spacing={{ xs: 3 }} alignItems="stretch">
      <Typography variant="h2">Recent Works</Typography>
      <Slider {...settings} ref={sliderRef}>
        <img src={image} alt="project" className="custom-slider-image" />
        <img src={image} alt="project" className="custom-slider-image" />
        <img src={image} alt="project" className="custom-slider-image" />
        <img src={image} alt="project" className="custom-slider-image" />
      </Slider>
    </Stack>
  );
};

export default HomeRecentWorks;
