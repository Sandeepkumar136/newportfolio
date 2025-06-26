import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ourMissonClick, ourServicesClick, forDevClick, termsClick, privacyClick, faqClick}) => {
  const navigate = useNavigate();
  const handleMission = ()=>{
    navigate("/about", { state: { scrollTo: "mission" } });
  }
    const handleDev = ()=>{
    navigate("/about", { state: { scrollTo: "dev" } });
  }
    const handleTerms = ()=>{
    navigate("/about", { state: { scrollTo: "terms" } });
  }
    const handleFaq = ()=>{
    navigate("/about", { state: { scrollTo: "faq" } });
  }
    const handlePrivacy = ()=>{
    navigate("/about", { state: { scrollTo: "privacy" } });
  }
      const handleServices = ()=>{
    navigate("/services", { state: { scrollTo: "service" } });
  }

  return (
    <div className="footer">
      <div className="footer-section">
        <h2 className="footer-heading">Main</h2>
        <div className="footer-container">
          <ul className="footer-list">
            <li className="footer-item">Contact</li>
            <li className="footer-item">Home</li>
            <li className="footer-item">Work with us</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-heading">About</h2>
        <div className="footer-container">
          <ul className="footer-list">
            <li onClick={handleMission} className="footer-item">Our Missons</li>
            <li onClick={handleServices} className="footer-item">Our Services</li>
            <li onClick={handleDev} className="footer-item">For Developers</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-heading">Legal</h2>
        <div className="footer-container">
          <ul className="footer-list">
            <li onClick={handleTerms} className="footer-item">Terms</li>
            <li onClick={handlePrivacy} className="footer-item">Pricacy</li>
            <li onClick={handleFaq} className="footer-item">FAQ</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-heading">Social</h2>
        <div className="footer-container">
          <ul className="footer-i-list">
            <li className="footer-i-item">
              <i class=" f1 bx bxl-instagram"></i>
              <span className="f-i-t">Instagram</span>
            </li>
            <li className="footer-i-item">
              <i className="f2 bx bxl-facebook-circle"></i>
              <span className="f-i-t">Facebook</span>
            </li>
            <li className="footer-i-item">
              <i className="f3 bx bxl-telegram"></i>
              <span className="f-i-t">Telegram</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
