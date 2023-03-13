import "./home.css";
import React from "react";
import homeImg from "../../assets/images/home-img.png";

const Home = () => {
  return (
    <section
      id="home"
      className="home"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-easing="linear"
    >
      <div className="container">
        <div className="home-title">
          Biz bilan <br /> har bir o’quvchi <br /> IELTS <br /> olishi mumkin
        </div>

        <button className="home-btn">
          <a href="#contact">Hoziroq sinab ko’ring</a>
        </button>
      </div>

      <div className="home-img">
        <img src={homeImg} alt="" />
      </div>
    </section>
  );
};

export default Home;
