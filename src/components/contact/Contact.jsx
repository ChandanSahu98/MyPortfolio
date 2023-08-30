import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Phone from "/images/phone.png";
import Email from "/images/email.png";
import Address from "/images/address.png";
import Thanks from "../thankyouModal/Thanks";
import { ThemeContext } from "../../context";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const theme = useContext(ThemeContext);
  const { darkmode } = theme.state;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wqf0l9t",
        "template_fbefhsn",
        form.current,
        "3cbBoodig2EzFkt5P"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-info-img" /> +91
              9876543218
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-info-img" />{" "}
              csahu@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="" className="contact-info-img" /> New
              Delhi, India
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-right-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              style={{
                backgroundColor: darkmode ? "#333" : "#fff",
                color: darkmode ? "#fff" : "#000",
              }}
              placeholder="Name"
              name="username"
            />
            <input
              type="text"
              style={{
                backgroundColor: darkmode ? "#333" : "#fff",
                color: darkmode ? "#fff" : "#000",
              }}
              placeholder="Subject"
              name="usersubject"
            />
            <input
              type="text"
              style={{
                backgroundColor: darkmode ? "#333" : "#fff",
                color: darkmode ? "#fff" : "#000",
              }}
              placeholder="Email"
              name="useremail"
            />
            <textarea
              rows="5"
              style={{
                backgroundColor: darkmode ? "#333" : "#fff",
                color: darkmode ? "#fff" : "#000",
              }}
              placeholder="Message"
              name="usermessage"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
      {showModal && <Thanks setShowModal={setShowModal} />}
    </div>
  );
};

export default Contact;
