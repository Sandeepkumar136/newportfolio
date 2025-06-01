import React from "react";
import welcome from "../Json/welcome.json";
const About = () => {
  return (
    <div className="about">
      <div className="ab-container">
        <div className="wc-container">
          <h2 className="title-wc">{welcome.title}</h2>
          <h4 className="subtitle-wc">{welcome.intro}</h4>
          <div className="wh-wc-container">
            <div className="wh-wc-contain">
              <div className="wh-wc-title">Versatile Expertise</div>
              <div className="wh-wc-itmes">
                {welcome.why_choose["Versatile Expertise"]}
              </div>
            </div>
            <div className="wh-wc-contain">
              <div className="wh-wc-title">User-Centered Interfaces</div>
              <div className="wh-wc-itmes">
                {welcome.why_choose["User-Centered Interfaces"]}
              </div>
            </div>
            <div className="wh-wc-contain">
              <div className="wh-wc-title">Meaningful Insights</div>
              <div className="wh-wc-itmes">
                {welcome.why_choose["Meaningful Insights"]}
              </div>
            </div>
            <div className="wh-wc-contain">
              <div className="wh-wc-title">Secure & Reliable</div>
              <div className="wh-wc-itmes">
                {welcome.why_choose["Secure & Reliable"]}
              </div>
            </div>
            <div className="wh-wc-contain">
              <div className="wh-wc-title">Ad-Free, Distraction-Free</div>
              <div className="wh-wc-itmes">
                {welcome.why_choose["Ad-Free, Distraction-Free"]}
              </div>
            </div>
          </div>
          <div className="wo-wc-container">
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i className="fa-solid fa-user-secret"></i>
                </div>
                  <p className="title-wo-wc">Clients & Employers</p>
              </div>
              <div className="wo-wc-text-contain">
                {welcome.who_can_benefit["Clients & Employers"]}
              </div>
            </div>
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i className="bx bx-code-alt"></i>
                </div>
                  <p className="title-wo-wc">Fellow Developers</p>
              </div>
              <div className="wo-wc-text-contain">
                {welcome.who_can_benefit["Fellow Developers"]}
              </div>
            </div>
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i class="fa-solid fa-brain"></i>{" "}
                </div>
                  <p className="title-wo-wc">Curious Minds</p>
              </div>
              <div className="wo-wc-text-contain">
                {welcome.who_can_benefit["Curious Minds"]}
              </div>
            </div>
          </div>
          <div className="jo-container">
            <div className="title-jo">Join the journey</div>
            <div className="text-jo">{welcome.join_the_journey}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
