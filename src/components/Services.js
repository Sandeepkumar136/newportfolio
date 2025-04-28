import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // or "@emailjs/browser"
import Complitation from "../Contents/Complitation";

const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [submissionDone, setSubmissionDone] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const [dialogLoading, setDialogLoading] = useState(false); // For 3 sec loader inside popup
  const [finalIcon, setFinalIcon] = useState(null); // For tick/cross after loading

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !service || !message) {
      setAlert({ type: "error", message: "Please fill all the fields." });
      setSubmissionDone(true);
      prepareDialogIcon("error");
      return;
    }

    setLoading(true);
    setDialogLoading(true); // Start showing loader inside dialog
    setSubmissionDone(true);

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      service: service,
      message: message,
    };

    emailjs
      .send(
        "service_uro8zbs",
        "template_w9wro4c",
        templateParams,
        "CY9OzP5uATTExwVyV"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setAlert({ type: "success", message: "Message sent successfully!" });
          clearForm();
          prepareDialogIcon("success");
        },
        (err) => {
          console.log("FAILED...", err);
          setAlert({ type: "error", message: "Something went wrong." });
          prepareDialogIcon("error");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const prepareDialogIcon = (resultType) => {
    setDialogLoading(true); // Start loading
    setFinalIcon(null); // Clear previous icon if any

    setTimeout(() => {
      setDialogLoading(false);
      if (resultType === "success") {
        setFinalIcon(
          <span style={{ color: "green", fontSize: "3rem" }}>✔️</span>
        );
      } else {
        setFinalIcon(
          <span style={{ color: "red", fontSize: "3rem" }}>❌</span>
        );
      }
    }, 3000); // 3 seconds loading inside dialog
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  return (
    <section id="services">
      <div className="services-heading">Services</div>
      <div className="services-content">
        <div className="services-left">
          <h2>Our Services</h2>
          <p>We offer a wide range of services tailored to your needs.</p>
        </div>

        <div className="services-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
            </select>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? <div className="loader"></div> : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* The Complitation dialog */}
      <Complitation
        openDialog={submissionDone}
        setOpenDialog={setSubmissionDone}
        icon={
          dialogLoading ? (
            <div className="popup-loader"></div>
          ) : (
            finalIcon
          )
        }
        text={alert.message}
      />
    </section>
  );
};

export default Services;
