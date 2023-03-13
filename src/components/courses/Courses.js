import React from "react";
import "./courses.css";
import { courses } from "../../constants/courses";
import Course from "./Course";

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="container">
        <h1
          className="title text-linear"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Classy kurslari
        </h1>
        <p className="subtitle" data-aos="fade-up" data-aos-duration="400">
          Talabalarimizning o’quv markazimiz haqidagi fikrlari
        </p>

        <div className="course-wrapper">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
