import React from "react";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { y: 40 },
  visible: (i = 1) => ({
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const scaleUp = {
  hidden: { scale: 0.98 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Privacy = () => {
  const texts = [
    "In this digital sanctum, your privacy is honored like sacred parchment. No whisper of your name, no trace of your visit, is taken lightly or stored without cause.",
    "This portfolio does not gather personal data, nor does it track your journey through cookies or scripts. Every interaction here is as pure as your intent — free from surveillance, free from intrusion.",
    "Should you choose to reach out through a form or message, your words will be used solely to respond, never to exploit. I do not share your information with third parties, nor do I store it beyond its purpose.",
    "Your digital dignity remains intact — always.",
  ];

  return (
    <div className="pr-container">
      <div className="pr-contain">
        {texts.map((text, index) => (
          <motion.p
            className="pr-text"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideUp}
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.p
        className="pr-text-lower"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        variants={scaleUp}
      >
        “In trust, I craft; in privacy, I stand.”
      </motion.p>
    </div>
  );
};

export default Privacy;
