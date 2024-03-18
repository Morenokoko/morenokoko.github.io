import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Stack, Box } from "@mui/material";
// import image from "../../assets/images/sample-website.jpg";
import MoreInfoDialog from "./moreinfodialog";
import { dataList } from "../../assets/data";

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
        onClick={
          () => (index === 0 ? goToSlide(index) : goToSlide(index * 2)) // index is the dot index, e.g. index = 2 will go slide 2 but should go to slide 4, 3 go 3 but should go 6
        }
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor:
              currentSlide === 0 && index === 0
                ? "#ffffff"
                : currentSlide / index === 2
                ? "#ffffff"
                : "#9A9A9A",
            borderRadius: "50%",
            opacity:
              currentSlide === 0 && index === 0
                ? "1"
                : currentSlide / index === 2
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
  const [open, setOpen] = React.useState(false);
  const [selectedWork, setSelectedWork] = React.useState({});

  const handleClickOpen = (data) => {
    setSelectedWork(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    // arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: (dots) =>
      customDots(dots, currentSlide, (index) => {
        sliderRef.current.slickGoTo(index);
        setCurrentSlide(index);
      }),
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <Stack
      id="home-projects"
      spacing={{ xs: 3 }}
      alignItems="stretch"
      sx={{ pt: 10 }}
    >
      <Typography variant="h2">Recent Works</Typography>
      <MoreInfoDialog
        open={open}
        handleClose={handleClose}
        data={selectedWork}
      />
      <Box sx={{ px: 3 }}>
        {dataList && dataList.length > 0 && (
          <Slider {...settings} ref={sliderRef}>
            {dataList.map((data, index) => (
              <Stack
                key={data.title}
                sx={{
                  position: "relative",
                  display: "inline-block", // Ensure Stack only takes up the space of its content
                  width: "fit-content", // Adjust width to fit the content (image)
                  height: "fit-content", // Adjust height to fit the content (image)
                  borderRadius: "10px", // Apply border-radius to Stack instead of the image
                  overflow: "hidden", // Hide any overflowing content
                  cursor: "pointer",
                }}
                onClick={() => handleClickOpen(data)}
              >
                <img
                  key={index}
                  id={index}
                  src={require(`../../assets/images/${data.imageLink}`)}
                  alt="project"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Stack
                  sx={{
                    padding: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                        lg: "18px",
                        xl: "18px",
                      },
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "12px",
                        lg: "16px",
                        xl: "16px",
                      },
                    }}
                  >
                    {data.module}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Slider>
        )}
      </Box>
    </Stack>
  );
};

export default HomeRecentWorks;
