import React from "react";
import "./teachers.css";

const Teacher = ({ teacher }) => {
  return (
    <div
      className="teach"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aoso-delay="400"
    >
      <div className="teach-box">
        <img src={teacher.img} alt="img" />
        <div className="teach-des">
          <div className="teach-user">{teacher.name}</div>
          <div className="teach-idea">{teacher.idea}</div>
          <ul className="teach-user-about">
            <li>
              IELTS score: <span>{teacher.score}</span>
            </li>
            <li>
              Tajriba: <span>{teacher.experience} yil</span>
            </li>
            <li>
              O’quvchilari: <span>{teacher.students}+</span>
            </li>
            <li>
              O’qigan joyi: <span>{teacher.graduate}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
