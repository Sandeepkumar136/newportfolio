import React from 'react';
import Slider from "react-slick";
import Loader from '../Contents/Loader';

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3, // Desktop default
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <Loader />
      <div className="ser-wrapper">
        <Slider {...settings} className="ser-slider">
          <div className="ser-contain-card">
            <div className="ser-img-overlay">
              <div className="ser-img sr1">
                <div className="ser-info-overlay">
                  <a href="/" className="link-ser"><i className="logo-ser bx bxs-info-circle"></i></a>
                </div>
              </div>
            </div>
            <h4 className="title-ser">Data Managements</h4>
            <p className="text-ser">Managing finances, bookkeeping, tax returns, and ensuring compliance efficiently.</p>
          </div>
          <div className="ser-contain-card">
            <div className="ser-img-overlay">
              <div className="ser-img sr2">
                <div className="ser-info-overlay">
                  <a href="/" className="link-ser"><i className="logo-ser bx bxs-info-circle"></i></a>
                </div>
              </div>
            </div>
            <h4 className="title-ser">Frontend Services</h4>
            <p className="text-ser">Designing responsive, user-friendly websites using modern web technologies.</p>
          </div>
          <div className="ser-contain-card">
            <div className="ser-img-overlay">
              <div className="ser-img sr3">
                <div className="ser-info-overlay">
                  <a href="/" className="link-ser"><i className="logo-ser bx bxs-info-circle"></i></a>
                </div>
              </div>
            </div>
            <h4 className="title-ser">Backend Services</h4>
            <p className="text-ser">Developing scalable, secure server-side applications with APIs and databases.</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Services;
