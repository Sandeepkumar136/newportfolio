import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Images from '../assets/ImageProvider'; // Your images

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
    <div className="resume-wrapper">
      <h2 className="resume-title">📜 My Resume Showcase</h2>
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
  );
};

export default Resume;
