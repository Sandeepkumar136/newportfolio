import React from "react";
import welcome from "../Json/welcome.json";
import sandeep_portfolio_intro from "../Json/sandeep_portfolio_intro.json";
import Features from "../Json/AbFeatures";
import mission_contents from "../Json/Abmission";
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
      <div className="what-container">
        <div className="wc-container">
          <div className="title-wc">{sandeep_portfolio_intro.title}</div>
          <div className="subtitle-wc">{sandeep_portfolio_intro.intro}</div>
          <div className="subtitle-wc">{sandeep_portfolio_intro.about}</div>
          <div className="icon-container-wh">
            <p className="title-icons">Used Technogies</p>
            <div className="what-icon-contain">
              <i className="bx bxl-react"></i>
              <i className="bx bxl-javascript"></i>
              <i className="bx bxlhtml5"></i>
              <i className="bx bxl-css3"></i>
              <i className="bx bx-cloud"></i>
              <i>f</i>
              <i className="bx bx-devices"></i>
            </div>
          </div>
          <h4 className="heading-about-middle">Portfolio focus</h4>
          <div className="wo-wc-container">
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i class="fas fa-palette"></i>
                </div>
                <div className="title-wo-wc">UI/UX Precision</div>
              </div>
              <div className="wo-wc-text-contain">
                {sandeep_portfolio_intro.portfolio_focus["UI/UX Precision"]}
              </div>
            </div>
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i class="fas fa-plug"></i>
                </div>
                <div className="title-wo-wc">API Integration</div>
              </div>
              <div className="wo-wc-text-contain">
                {sandeep_portfolio_intro.portfolio_focus["API Integration"]}
              </div>
            </div>
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i className="bx bx-code-alt"></i>
                </div>
                <div className="title-wo-wc">Code Elegance</div>
              </div>
              <div className="wo-wc-text-contain">
                {sandeep_portfolio_intro.portfolio_focus["Code Elegance"]}
              </div>
            </div>
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i class="fas fa-magic"></i>
                </div>
                <div className="title-wo-wc">Creative Interaction</div>
              </div>
              <div className="wo-wc-text-contain">
                {
                  sandeep_portfolio_intro.portfolio_focus[
                    "Creative Interaction"
                  ]
                }
              </div>
            </div>
          </div>
          <h4 className="heading-about-middle">Intended audience</h4>
          <div className="wo-wc-container">
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i class="fas fa-briefcase"></i>
                </div>
                <p className="title-wo-wc">Recruiters</p>
              </div>
              <div className="wo-wc-text-contain">
                {sandeep_portfolio_intro.intended_audience.Recruiters}
              </div>
            </div>
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i class="fas fa-laptop-code"></i>{" "}
                </div>
                <p className="title-wo-wc">Develpors</p>
              </div>
              <div className="wo-wc-text-contain">
                {sandeep_portfolio_intro.intended_audience.Recruiters}
              </div>
            </div>
            <div className="wo-wc-contain">
              <div className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i class="fas fa-graduation-cap"></i>{" "}
                </div>
                <p className="title-wo-wc">Learners</p>
              </div>
              <div className="wo-wc-text-contain">
                {sandeep_portfolio_intro.intended_audience.Learners}
              </div>
            </div>
          </div>
          <div className="jo-container">
            <div className="title-jo">Closing</div>
            <div className="text-jo">{sandeep_portfolio_intro.closing}</div>
          </div>
        </div>
      </div>
      <div className="wc-container">
        <div className="title-wc">{Features.title}</div>
        <div className="wo-wc-container feature-console">
          {Features.features.map((e, i) => (
            <div className="wo-wc-contain">
              <div key={i} className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i className={e.icon}></i>
                </div>
                <div className="title-wo-wc">{e.name}</div>
              </div>
              <div className="wo-wc-text-contain">{e.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mission-container">
        <div className="wc-container">
          <div className="title-wc">Our Mission</div>
          <div className="subtitle-wc">{mission_contents.mission}</div>
        <div className="wo-wc-container feature-console">
          {mission_contents.what_we_stand_for.map((e, i) => (
            <div className="wo-wc-contain">
              <div key={i} className="wo-wc-logo-contain">
                <div className="wo-wc-overlay">
                  <i className={e.icon}></i>
                </div>
                <div className="title-wo-wc">{e.title}</div>
              </div>
              <div className="wo-wc-text-contain">{e.description}</div>
            </div>
          ))}
        </div>
      </div>
        </div>
    </div>
  );
};

export default About;
