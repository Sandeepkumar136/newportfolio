import React from 'react';
import { motion } from 'framer-motion';
import { Alias, HeadingTerms, TermsandConditons } from '../Json/TermAndConditions';

// Reusable animation variants
const excitingVariant = {
  hidden: { opacity: 0, y: 80, rotateX: -90, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
      duration: 0.8,
    },
  },
};

const TermAndConditions = () => {
  return (
    <div className="t-container">
      {/* Heading */}
      <motion.div
        className="t-up-contain"
        variants={excitingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="heading-t-c">{HeadingTerms[0].title}</h3>
        <p className="descriptions-t-up-t">{HeadingTerms[0].description}</p>
      </motion.div>

      {/* Alias Section */}
      <motion.div
        className="t-up-contain"
        variants={excitingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="heading-t-c">{Alias[0].title}</h3>
        <p className="descriptions-t-up-t">{Alias[0].description}</p>
        <ul className="al-contents">
          <motion.li className="al-items" variants={excitingVariant} initial="hidden" whileInView="visible" viewport={{ once: false }}>{Alias[0].alies}</motion.li>
          <motion.li className="al-items" variants={excitingVariant} initial="hidden" whileInView="visible" viewport={{ once: false }}>{Alias[0].alies1}</motion.li>
        </ul>
      </motion.div>

      {/* Terms Loop */}
      <div className="t-main-content">
        {TermsandConditons.map((e, i) => (
          <motion.div
            key={i}
            className="term-main-content"
            variants={excitingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="title-t-content">{e.title}</h4>
            <p className="text-t-content">{e.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TermAndConditions;
