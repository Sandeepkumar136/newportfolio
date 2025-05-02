import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Loader from "../Contents/Loader";
import FormServices from "../Contents/FormServices";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };


  return (
    <>
      <Loader />
      <div className="ser-wrapper">
        <Slider {...settings} className="ser-slider">
          {[
            {
              className: "sr1",
              title: "Data Managements",
              desc: "Managing finances, bookkeeping, tax returns, and ensuring compliance efficiently.",
            },
            {
              className: "sr2",
              title: "Frontend Services",
              desc: "Designing responsive, user-friendly websites using modern web technologies.",
            },
            {
              className: "sr3",
              title: "Backend Services",
              desc: "Developing scalable, secure server-side applications with APIs and databases.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="ser-contain-card"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="ser-img-overlay">
                <div className={`ser-img ${service.className}`}>
                  <div className="ser-info-overlay">
                    <a href="/" className="link-ser">
                      <i className="logo-ser bx bxs-info-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="title-ser">{service.title}</h4>
              <p className="text-ser">{service.desc}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
      <FormServices/>
    </>
  );
};

export default Services;