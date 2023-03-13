import React from "react";

const Course = ({ course }) => {
  return (
    <div
      className="course-box"
      data-aos="flip-up"
      data-aos-duration="500"
      data-aos-delay="500"
    >
      <div className="course-title text-linear">{course.title}</div>
      <div className="course-img">
        <img src={course.img} alt="img" />
      </div>
    </div>
  );
};

export default Course;
