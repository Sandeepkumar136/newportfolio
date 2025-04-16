import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { y: 100, scale: 0.9 },
  visible: {
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const Education = () => {
  const items = [
    {
      heading: "10th",
      subtitle: "Inter High School",
      location: "Kishanganj",
      state: "Bihar",
      desc: "The roots of discipline and discovery. A chapter where dreams formed under chalk dust and morning bells in the gentle heartland of Kishanganj.",
    },
    {
      heading: "Intermediate",
      subtitle: "Insan Inter College",
      location: "Kishanganj",
      state: "Bihar",
      desc: "A scholarly rite of passage where youth was sculpted with choice and clarity. The place that sharpened purpose and invited deeper reflection.",
    },
    {
      heading: "B.COM",
      subtitle: "Purnia University",
      location: "Purnia",
      state: "Bihar",
      desc: "Beneath the academic archways of Purnia, commerce was embraced like a craft. Here, balance sheets and ambitions were equally honored.",
    },
    {
      heading: "Frontend Development",
      subtitle: "W3s School",
      location: "Hamburg",
      state: "Germany",
      desc: "A canvas of pixels and code. In W3s School’s realm, interfaces took form, and the visual soul of the web began to breathe.",
    },
    {
      heading: "Backend Development",
      subtitle: "Apna College",
      location: "Delhi",
      state: "India",
      desc: "The unseen workings of the web revealed their secrets. Through Apna College’s light, logic and structure flourished in code behind the curtains.",
    },
  ];

  return (
    <div className="edu-container">
      <div className="heading-inf">Academic Journey</div>
      <div className="sch-container">
        {items.map((item, index) => (
          <motion.div
            className="sch-contain"
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="sch-logo-contain">
              <i className="sch-icon bx bxs-graduation"></i>
              <div className="sch-heading">{item.heading}</div>
            </div>
            <div className="sch-subtitle">{item.subtitle}</div>
            <div className="sch-add">
              {item.location} <span className="sch-state">{item.state}</span>
            </div>
            <p className="sch-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="heading-inf">Learning</div>
      <div className="uni-container">
        <div className="uni-contain">
          <div className="uni-logo-contain">
            <div className="logo-uni-overlay">
              <i className="bx bxs-bank"></i>
            </div>
            <div className="uni-title">Master in C.</div>
          </div>
          <div className="uni-subtitle">Sradha Khanpra</div>
          <div className="uni-status">currently</div>
          <p className="uni-desc">
            With quiet perseverance, Sradha Khanpra delves into the elegant
            precision of C—where logic flows like a river through valleys of
            memory. In every function, she chisels mastery, weaving clarity and
            power into the codebase, shaping a mind as sharp as the compiler
            that guides her.
          </p>
        </div>

        <div className="uni-contain">
          <div className="uni-logo-contain">
            <div className="logo-uni-overlay">
              <i className="bx bxs-bank"></i>
            </div>
            <div className="uni-title">Master in MongoDB</div>
          </div>
          <div className="uni-subtitle">Haris Ali Khan</div>
          <div className="uni-status">currently</div>
          <p className="uni-desc">
            In the dynamic heart of NoSQL, Haris Ali Khan studies the vast
            forests of MongoDB. Document by document, he deciphers the art of
            flexible data. His journey is one of modern mastery, where queries
            whisper secrets and collections unfold like ancient scrolls in
            digital temples.
          </p>
        </div>
      </div>
        <div className="heading-inf">Language Skills.</div>
      <div className="lang-container">
        <div className="lang-contain">
          <i className="bx bxl-html5"></i>
          <i className="bx bxl-css3"></i>
          <i className="bx bxl-javascript"></i>
          <i className="bx bxl-sass"></i>
          <i className="bx bxl-react"></i>
          <i className="bx bxl-nodejs"></i>
          <i className="bx bxl-redux"></i>
          <i className="bx bxl-mongodb"></i>
          <i className="bx bxl-typescript"></i>
          <i className="bx bxl-jquery"></i>
          <i className="bx bxl-vuejs"></i>
          <i className="bx bxl-python"></i>
          <i className="bx bxl-flask"></i>
          <i className="bx bxs-data"></i>
          <i className="bx bxl-bootstrap"></i>
          <i className="bx bxl-netlify"></i>
          <i className="bx bxl-github"></i>
          <i className="bx bxl-git"></i>
          <i className="bx bxl-visual-studio"></i>
          <i className="bx bxs-terminal"></i>
        </div>
      </div>
    </div>
  );
};

export default Education;
