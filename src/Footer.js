import React from "react";

const Footer = ({ourMissonClick, ourServicesClick, forDevClick, termsClick, privacyClick, faqClick}) => {
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
            <li onClick={ourMissonClick} className="footer-item">Our Missons</li>
            <li onClick={ourServicesClick} className="footer-item">Our Services</li>
            <li onClick={forDevClick} className="footer-item">For Developers</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h2 className="footer-heading">Legal</h2>
        <div className="footer-container">
          <ul className="footer-list">
            <li onClick={termsClick} className="footer-item">Terms</li>
            <li onClick={privacyClick} className="footer-item">Pricacy</li>
            <li onClick={faqClick} className="footer-item">FAQ</li>
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
