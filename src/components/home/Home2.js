import "./home.css";
import React from "react";
import homeImg from "../../assets/images/home-img.png";

const Home2 = () => {
  return (
    <section
      id="home"
      className="home home-next"
      data-aos="fade-up-right"
      data-aos-duration="600"
      data-aos-easing="linear"
      data-aos-delay="3500"
    >
      <div className="container">
        <div className="home-title">
          Sun'iy Intellekt <br />
          asosida, <br />
          kafolatlangan ta'lim
        </div>

        <div className="home-text" id="xs-none">
          {" "}
          Bu o'qitishga asoslangan <span>intellektual platforma</span> bo'lib,
          o'quvchilarni o'qish jarayonlarini <span>nazorat qilish</span>ga
          qaratilgan dasturiy tizim
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

export default Home2;
