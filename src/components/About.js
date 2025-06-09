import React from "react";
import { motion } from "framer-motion";
import welcome from "../Json/welcome.json";
import sandeep_portfolio_intro from "../Json/sandeep_portfolio_intro.json";
import Features from "../Json/AbFeatures";
import mission_contents from "../Json/Abmission";
import FaqQuestion from "./FaqQuestion";
import TermAndConditions from "../Contents/TermAndConditions";

const About = () => {
  return (
    <div className="about">
      <div className="ab-container">
        <motion.div
          className="wc-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="title-wc"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {welcome.title}
          </motion.h2>
          <motion.h4
            className="subtitle-wc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {welcome.intro}
          </motion.h4>

          {/* Why Choose */}
          <div className="wh-wc-container">
            {Object.entries(welcome.why_choose).map(([title, content], i) => (
              <motion.div
                key={i}
                className="wh-wc-contain"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="wh-wc-title">{title}</div>
                <div className="wh-wc-itmes">{content}</div>
              </motion.div>
            ))}
          </div>

          {/* Who Can Benefit */}
          <div className="wo-wc-container">
            {Object.entries(welcome.who_can_benefit).map(
              ([title, content], i) => (
                <motion.div
                  key={i}
                  className="wo-wc-contain"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="wo-wc-logo-contain">
                    <div className="wo-wc-overlay">
                      <i
                        className={
                          title === "Clients & Employers"
                            ? "fa-solid fa-user-secret"
                            : title === "Fellow Developers"
                            ? "bx bx-code-alt"
                            : "fa-solid fa-brain"
                        }
                      ></i>
                    </div>
                    <p className="title-wo-wc">{title}</p>
                  </div>
                  <div className="wo-wc-text-contain">{content}</div>
                </motion.div>
              )
            )}
          </div>

          {/* Join the journey */}
          <motion.div
            className="jo-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="title-jo">Join the journey</div>
            <div className="text-jo">{welcome.join_the_journey}</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Portfolio Intro Section */}
      <div className="what-container">
        <motion.div
          className="wc-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="title-wc"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {sandeep_portfolio_intro.title}
          </motion.h2>

          <motion.h4
            className="subtitle-wc"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sandeep_portfolio_intro.intro}
          </motion.h4>

          <motion.h4
            className="subtitle-wc"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {sandeep_portfolio_intro.about}
          </motion.h4>

          <motion.div
            className="icon-container-wh"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.p
              className="title-wc"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Technologies
            </motion.p>

            <motion.div
              className="what-icon-contain"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {[
                "bx bxl-react",
                "bx bxl-javascript",
                "bx bxl-html5",
                "bx bxl-css3",
                "bx bx-cloud",
                "bx bx-devices",
              ].map((iconClass, index) => (
                <motion.i
                  key={index}
                  className={iconClass}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.3, rotate: 10, color: "#61dafb" }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.i>
              ))}
            </motion.div>
          </motion.div>

          {/* Portfolio Focus */}
          <h4 className="title-wc">Portfolio Focus</h4>
          <div className="wo-wc-container">
            {Object.entries(sandeep_portfolio_intro.portfolio_focus).map(
              ([title, content], i) => (
                <motion.div
                  key={i}
                  className="wo-wc-contain"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="wo-wc-logo-contain">
                    <div className="wo-wc-overlay">
                      <i
                        className={
                          title === "UI/UX Precision"
                            ? "fas fa-palette"
                            : title === "API Integration"
                            ? "fas fa-plug"
                            : title === "Creative Interaction"
                            ? "fas fa-magic"
                            : "bx bx-code-alt"
                        }
                      ></i>
                    </div>
                    <div className="title-wo-wc">{title}</div>
                  </div>
                  <div className="wo-wc-text-contain">{content}</div>
                </motion.div>
              )
            )}
          </div>

          {/* Intended Audience */}
          <h4 className="title-wc">Intended Audience</h4>
          <div className="wo-wc-container">
            {Object.entries(sandeep_portfolio_intro.intended_audience).map(
              ([title, content], i) => (
                <motion.div
                  key={i}
                  className="wo-wc-contain"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="wo-wc-logo-contain">
                    <div className="wo-wc-overlay">
                      <i
                        className={
                          title === "Recruiters"
                            ? "fas fa-briefcase"
                            : title === "Develpors"
                            ? "fas fa-laptop-code"
                            : "fas fa-graduation-cap"
                        }
                      ></i>
                    </div>
                    <div className="title-wo-wc">{title}</div>
                  </div>
                  <div className="wo-wc-text-contain">{content}</div>
                </motion.div>
              )
            )}
          </div>

          <div className="jo-container">
            <div className="title-jo">Closing</div>
            <div className="text-jo">{sandeep_portfolio_intro.closing}</div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="wc-container">
        <div className="title-wc">{Features.title}</div>
        <div className="wo-wc-container feature-console">
          {Features.features.map((e, i) => (
            <motion.div
              key={i}
              className="wo-wc-contain"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i className={e.icon}></i>
                </div>
                <div className="title-wo-wc">{e.name}</div>
              </div>
              <div className="wo-wc-text-contain">{e.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-container">
        <div className="wc-container">
          <div className="title-wc">Our Mission</div>
          <div className="subtitle-wc">{mission_contents.mission}</div>
          <div className="wo-wc-container feature-console">
            {mission_contents.what_we_stand_for.map((e, i) => (
              <motion.div
                key={i}
                className="wo-wc-contain"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="wo-wc-logo-contain">
                  <div className="wo-wc-overlay">
                    <i className={e.icon}></i>
                  </div>
                  <div className="title-wo-wc">{e.title}</div>
                </div>
                <div className="wo-wc-text-contain">{e.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="faq-container">
        <div className="title-wc">Term and Conditions.</div>
        <TermAndConditions />
      </div>
      <div className="faq-container">
        <div className="title-wc">FAQ Questions.</div>
        <FaqQuestion />
      </div>
    </div>
  );
};

export default About;
