import React from 'react'
import { useEffect, useState } from 'react';


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
  return (
    <>
        <section className="section-home">
      <div className="index-text-overlay">
        {/* Header line */}
        <p
          className="text-upper-base"
        >
          Build dreams with every line.
        </p>

        {/* Welcome Message and Typing Animation */}
        <div
          className="heading-contain"
        >
          <h2 className="an-heading">Welcome to CodeWithSanju.</h2>
          <div className="al-an-contain">
            <h2 className="typewritter">
              {currentText}
              <span className="span-tp"></span>
            </h2>
          </div>
        </div>

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
        <div
          className="button-index-contain"
        >
          <button
            id="Openlink"

          >
            View Services
          </button>
          <button
            id="Closelink"
          >
            View Insight
          </button>
        </div>

        {/* Stats Section */}
        <div
          className="gentle-container"
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
            <div
              key={i}
              className="gentle-contain"
            >
              <p className="info-gen">{stat.value}</p>
              <span className="subtitle-gen">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeTyping;