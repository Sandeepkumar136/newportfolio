import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Wrap Link with motion
const MotionLink = motion(Link);

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const HomeTyping = () => {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Python Developer",
    "Freelancer",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const isEnd = currentText === currentWord;
    const isStart = currentText === "";

    const updatedText = isDeleting
      ? currentWord.substring(0, currentText.length - 1)
      : currentWord.substring(0, currentText.length + 1);

    setCurrentText(updatedText);

    let typingDelay = isDeleting ? 50 : 100;

    if (!isDeleting && isEnd) {
      typingDelay = 1000;
      setTimeout(() => setIsDeleting(true), typingDelay);
      return;
    }

    if (isDeleting && isStart) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {}, typingDelay);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

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
        <p
          className="text-contain-index-pera"
        >
          Passionate frontend developer excelling in crafting visually
          captivating, user-friendly interfaces. Proficient in HTML, CSS,
          JavaScript, and responsive design. Demonstrates exceptional
          problem-solving abilities and meticulous attention to detail.
        </p>

        {/* Buttons */}
        <motion.div
          className="button-index-contain"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <MotionLink
            to="services"
            id="Openlink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Services
          </MotionLink>
          <MotionLink
            to="references"
            id="Closelink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Insight
          </MotionLink>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="gentle-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
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
              custom={i + 5}
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
