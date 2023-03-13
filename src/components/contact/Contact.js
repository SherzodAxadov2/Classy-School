import React from "react";
import "./contact.css";
import classy from "../../assets/icons/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
// import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg"></div>
      <img src={classy} alt="classy logo" className="contact-classy" />
      <div className="contact-wrapper">
        <div className="container">
          <div
            className="contact-title"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Support
          </div>
          <div className="contact-section">
            <div
              className="contact-left"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="contact-subtitle">Classy School</div>
              <p>
                Classy School - Kelajagingizni biz bilan quring! <br />
                <br />
                Classy School - Bugungi kuning kelajaging poydevori
              </p>
            </div>

            <div
              className="contact-right"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div className="contact-subtitle">Ishonch raqamlarimiz</div>
              <ul>
                <li>
                  <BsFillTelephoneFill />
                  <a href="tel:998941229005"> +998 95 510 14 14</a>
                </li>
                <li>
                  <BsFillTelephoneFill />
                  <a href="tel:998941229005"> +998 95 513 14 14</a>
                </li>
                <li>
                  <MdAlternateEmail />
                  <a href="#contact">contact@classy.com</a>
                </li>
                <li>
                  <GoLocation />
                  <a href="#contact">Shayxontohir tuman, Beruniy metro</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="contact-bottom"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            Classy school - Coded by ITPro
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
