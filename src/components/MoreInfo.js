import React from "react";
import AlertMessage from "../Contents/AlertMessage";
import Loader from "../Contents/Loader";
import Images from "../assets/ImageProvider";

const MoreInfo = () => {
  const AlertData = [
    {
      heading: "Privacy Notice & Legal Assurance",
      description:
        "Your information is securely handled with utmost confidentiality. By submitting, you agree to our privacy terms, ensuring lawful use and protection of your personal data with integrity and respect.",
    },
  ];
  return (
    <div>
      <Loader />
      <AlertMessage
        heading={AlertData[0].heading}
        description={AlertData[0].description}
      />
      <div className="b-card-container">
        <div className="b-card-img-contain">
          <img
            src={Images.sandeep_one}
            alt="Sandeep Kumar"
            className="img-b-card"
          />
        </div>
        <div className="b-card-text-contain">
          <div className="b-c-heading-contain">
            <h3 className="heading-b-card">Sandeep Kumar</h3>
            <h5 className="subtitle-b-card">Frontend Developer</h5>
          </div>
          <div className="b-c-item-contain">
            <p className="text-b-c">
              Creative and detail-oriented frontend developer skilled in React,
              responsive design, UI/UX, animations, and state management,
              delivering seamless, interactive web experiences with modern web
              technologies.
            </p>
            <ul className="b-c-icon-pack">
              <li className="b-c-icon-item">
                <i className="bx bxl-gmail"></i>
              </li>
              <li className="b-c-icon-item">
                <i className="bx bxl-github"></i>
              </li>
              <li className="b-c-icon-item">
                <i className="bx bxl-discord"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
