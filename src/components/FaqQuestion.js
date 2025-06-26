import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Faq from "../Json/Faq";

const FaqQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="f-container">
      {Faq.map((e, index) => (
        <motion.div
          key={index}
          layout
          initial={{ borderRadius: 10 }}
          animate={{ borderRadius: openIndex === index ? 20 : 10 }}
          transition={{ duration: 0.4 }}
          className="f-contain motion-card"
        >
          <motion.div
            layout
            className="f-quest-contain"
            onClick={() => toggleAnswer(index)}
          >
            <motion.div className="f-question" layout>
              {e.question}
            </motion.div>
            <motion.div className="faq-btn" layout>
              {openIndex === index ? (
                <i className="bx bx-minus f-icon"></i>
              ) : (
                <i className="bx bx-plus f-icon"></i>
              )}
            </motion.div>
          </motion.div>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="answer"
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="faq-answer-contain"
              >
                <motion.p
                  className="faq-answer"
                  layout
                >
                  {e.answer}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FaqQuestion;
