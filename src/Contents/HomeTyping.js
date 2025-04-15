import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeTyping = () => {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Freelancer",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [chartIndex, setChartIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, chartIndex - 1)
        : currentWord.substring(0, chartIndex + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      setChartIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, chartIndex, words, currentWordIndex]);

  // Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="section-home">
      <div className="index-text-overlay">
        {/* Header line */}
        <motion.p
          className="text-upper-base"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Build dreams with every line.
        </motion.p>

        {/* Welcome Message and Typing Animation */}
        <motion.div
          className="heading-contain"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h2 className="an-heading">Welcome to CodeWithSanju.</h2>
          <div className="al-an-contain">
            <h2 className="typewritter">
              {currentText}
              <span className="span-tp"></span>
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-contain-index-pera"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Passionate frontend developer excelling in crafting visually
          captivating, user-friendly interfaces. Proficient in HTML, CSS,
          JavaScript, and responsive design. Demonstrates exceptional
          problem-solving abilities and meticulous attention to detail.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="button-index-contain"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="services" id="Openlink">
              View Services
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="references" id="Closelink">
              View Insight
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="gentle-container"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.2,
              },
            },
          }}
        >
          {[
            { value: "58+", label: "Projects" },
            { value: "0.3k", label: "Contributions" },
            { value: "4.5", label: "Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="gentle-contain"
              variants={fadeUp}
              custom={5 + i}
            >
              <p className="info-gen">{stat.value}</p>
              <span className="subtitle-gen">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTyping;
