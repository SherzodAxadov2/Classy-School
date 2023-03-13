import React, { useState } from "react";
import "./about.css";
import { ToastContainer, toast } from "react-toastify";
import ReactInputMask from "react-input-mask";

const AboutForm = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const sendData = (e) => {
    e.preventDefault();
    if (userMessage && userName && userPhone) {
      setUserName("");
      setUserPhone("");
      setUserMessage("");
      toast.success("Ma'lumot yuborildi!");

      console.log(`userName: ${userName}`);
      console.log(`userPhone: ${userPhone}`);
      console.log(`userMessage: ${userMessage}`);
    } else {
      toast.error("Iltimos formani to'ldiring!");
    }
  };
  return (
    <div className="form" data-aos="fade-left" data-aos-duration="600">
      <div className="form-title">Yordam kerakmi?</div>
      <div className="form-text">
        Bizga telefon raqamingizni qoldiring. Biz siz bilan bog’lanamiz
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Ismingizni kiriting</label>
          <input
            type="text"
            id="name"
            placeholder="Alisher"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Telefon raqamingizni kiriting</label>
          <ReactInputMask
            mask="+\9\9\8\(99) 999 99 99"
            maskChar={"_"}
            placeholder={`+998 (__) ___ __ __`}
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          ></ReactInputMask>
        </div>

        <div className="form-group">
          <label htmlFor="text">Bizga xabar qoldiring</label>
          <textarea
            name="message"
            id="text"
            cols="30"
            rows="10"
            placeholder="O'zingiz qiziqtirgan savollarni bering..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" onClick={(e) => sendData(e)}>
          Jo'natish
        </button>
        <ToastContainer />

        <div className="form-bottom">
          Ro’yxatdan hali o’tmadingizmi ? &nbsp;
          <a href="#about">Ro’yxatdan o’tish</a>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;
