import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Images from "../assets/ImageProvider"; // Your images
import Loader from "../Contents/Loader";

const Resume = () => {
  const imageArray = [
    Images.Rimg1,
    Images.Rimg2,
    Images.Rimg3,
    Images.Rimg4,
    Images.Rimg5,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 4, // Default for desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Loader />
      <div className="resume-wrapper">
        <Slider {...settings}>
          {imageArray.map((src, i) => (
            <motion.div
              key={i}
              className="slider-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={src}
                alt={`Resume page ${i + 1}`}
                className="resume-image"
              />
            </motion.div>
          ))}
        </Slider>
      </div>
      <motion.div
        className="down-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.a
          href={Images.Resume}
          download
          className="link-pdf-download"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="icon-pdf-d bx bxs-file-pdf"></i> Download
        </motion.a>
      </motion.div>
    </>
  );
};

export default Resume;
