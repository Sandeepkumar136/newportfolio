import React from "react";
import { motion } from "framer-motion";
import Loader from "../Contents/Loader";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};

const Achievements = () => {
  const Certificates = [
    { certificate: "DCA", subititle: "OXFORD Education", date: "10-9-2019" },
    { certificate: "TallyERP 9", subititle: "OXFORD Education", date: "5-5-2020" },
    { certificate: "Master in EXCEL", subititle: "OXFORD Education", date: "7-4-2020" },
    { certificate: "Amazon Machie", subititle: "Amazon Web Services", date: "14-9-2024" },
    { certificate: "Cloud for CEOs", subititle: "Amazon Web Services", date: "13-3-2024" },
    { certificate: "AWS Cloud Quest", subititle: "Amazon Web Services", date: "15-3-2024" },
    { certificate: "Master in Scss", subititle: "W3S School", date: "16-4-2024" },
    { certificate: "Prevent RSI", subititle: "Page Industries Limited", date: "20-4-2025" },
    { certificate: "Jockey Life Mens", subititle: "Page Industries Limited", date: "14-02-2025" },
    { certificate: "New Arrival and Changes M11", subititle: "Page Industries Limited", date: "06-04-2025" },
    { certificate: "Intro to Page by Ganesh VS", subititle: "Page Industries Limited", date: "07-01-2025" },
    { certificate: "New Arrival and Changes M09", subititle: "Page Industries Limited", date: "03-01-2025" },
    { certificate: "M12 Boxers Shorts Refreshers", subititle: "Page Industries Limited", date: "14-02-2024" },
    { certificate: "New Arrivals M2 2022", subititle: "Page Industries Limited", date: "25-06-2022" },
  ];

  return (
    <>
    <Loader/>
    <motion.div
      className="certificates"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      >
      {Certificates.map((e, i) => (
        <motion.div key={i} className="cert-container" variants={cardVariants}>
          <div className="uni-logo-contain-c">
            <div className="logo-uni-overlay-c">
              <i className="bx bxs-trophy"></i>
            </div>
            <div className="uni-title-c">{e.certificate}</div>
          </div>
          <h3 className="subtitle-cert">{e.subititle}</h3>
          <div className="certi-date">{e.date}</div>
        </motion.div>
      ))}
    </motion.div>
      </>
  );
};

export default Achievements;
