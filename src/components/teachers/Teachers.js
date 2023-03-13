import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

import Teacher from "./Teacher";
import "./teachers.css";
import Slider from "react-slick";
import { teachers } from "../../constants/teachers";

const Teachers = () => {
  const settings = {
    className: "center",
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <section id="teachers" className="teachers">
      <div className="container">
        <h1
          className="title text-linear"
          data-aos="fade-right"
          data-aos-duration="400"
        >
          Bizning Ustozlar
        </h1>
        <p className="subtitle" data-aos="fade-left" data-aos-duration="400">
          Siz bizda malakali ustozlardan ta’lim olishingiz mumkin
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {teachers.map((teacher) => (
            <div key={teacher.id}>
              <Teacher key={teacher.id} teacher={teacher} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Teachers;
