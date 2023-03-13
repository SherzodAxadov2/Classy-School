import React from "react";
import "./about.css";
import aboutImg from "../../assets/images/about-bg.png";
import AboutForm from "./AboutForm";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div
          className="about-left"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <div className="about-img">
            <img src={aboutImg} alt="aboutImg" />
            <div className="about-absolute">
              <div className="about-quote">
                Muloyimlik zaiflik emas... <br /> Tarbiyadir!
              </div>
              <p className="about-absolute-bottom">by Kimdir</p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <AboutForm />
        </div>
      </div>
    </section>
  );
};

export default About;
