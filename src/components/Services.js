import React, { useRef, useState } from "react";
import Slider from "react-slick";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Loader from "../Contents/Loader";
import Images from "../assets/ImageProvider";

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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const form = useRef();
  const [selectedService, setSelectedService] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uro8zbs",
        "template_w9wro4c",
        form.current,
        "CY9OzP5uATTExwVyV"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
        setSelectedService("");
      })
      .catch((error) => {
        console.error("Email send error:", error.text);
        alert("Something went wrong. Please try again.");
      });
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
              desc:
                "Managing finances, bookkeeping, tax returns, and ensuring compliance efficiently.",
            },
            {
              className: "sr2",
              title: "Frontend Services",
              desc:
                "Designing responsive, user-friendly websites using modern web technologies.",
            },
            {
              className: "sr3",
              title: "Backend Services",
              desc:
                "Developing scalable, secure server-side applications with APIs and databases.",
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
      <div className="heading-inf">Fill up Requirements</div>
      <div className="em-container">
        <motion.div
          className="em-l-contain"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={Images.Illustration_Frontend}
            alt="Illustration_Frontend"
            className="img-em"
          />
        </motion.div>

        <motion.div
          className="em-r-contain"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail} className="em-form">
            <div className="em-fm">
              <label>Name</label>
              <input
                className="inp-em"
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="em-fm">
              <label>Phone</label>
              <input
                className="inp-em"
                type="tel"
                name="user_phone"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="em-fm">
              <label>Email</label>
              <input
                className="inp-em"
                type="email"
                name="user_email"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="em-fm-sr">
              <label>Choose a Service</label>
              <div className="em-services">
                {["Frontend", "Backend", "Data Managements"].map((service) => (
                  <button
                    key={service}
                    type="button"
                    className={selectedService === service ? "active" : ""}
                    onClick={() => setSelectedService(service)}
                  >
                    {service.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="hidden"
              name="service"
              value={selectedService}
              required
            />

            <div className="em-fm-txt">
              <label>Fill up your query.</label>
              <textarea
                name="user_message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-em">
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
