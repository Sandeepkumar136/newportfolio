import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      duration: 0.6,
    },
  },
};

const containerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const Fordev = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      className="for-dev-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariant}
    >
      <motion.p className="dev-intro" variants={itemVariant}>
        This portfolio is more than pixels—it's poetry written in React. From
        scroll-triggered animations to silent logic in context, it sings of
        passion and purpose.
      </motion.p>

      <motion.div className="dev-items" variants={containerVariant}>
        <motion.div className="tech-stack" variants={itemVariant}>
          <h4 className="dev-it-title">🛠️ Built With:</h4>
          <ul className="dev-it-list">
            <li>React (no TypeScript)</li>
            <li>Framer Motion</li>
            <li>EmailJS for contact forms</li>
            <li>LocalStorage + Context API for auth</li>
          </ul>
        </motion.div>

        <motion.div className="structure" variants={itemVariant}>
          <h4 className="dev-str-title">📁 Project Structure:</h4>
          <p className="dev-str-text">
            Components, Contexts, Pages, Styles, and APIs each sit in
            harmony—modular and minimal.
          </p>
        </motion.div>

        <motion.div className="features" variants={itemVariant}>
          <h4 className="dev-it-title">✨ Cool Bits:</h4>
          <ul className="dev-it-list">
            <li>Custom alert dialogues before page reload</li>
            <li>Dark mode toggle with `react-switch`</li>
            <li>Animated routes without router</li>
            <li>Search & filter using pure state logic</li>
          </ul>
        </motion.div>

        <motion.div className="connect" variants={itemVariant}>
          <h4 className="dev-str-title">🤝 Let's Connect</h4>
          <p className="dev-str-text">
            If this code speaks to your soul, reach out or fork it. Developers
            deserve to build together.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Fordev;
