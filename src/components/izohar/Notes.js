import React from "react";
import "./notes.css";
import { quotes } from "../../constants/quotes";

const Notes = () => {
  return (
    <section className="izohlar" id="izohlar">
      <div className="container">
        <h1
          className="title text-linear"
          data-aos="fade-left"
          data-aos-duration="400"
        >
          Bitiruvchilarimizdan izohlar
        </h1>
        <p className="subtitle" data-aos="fade-right" data-aos-duration="400">
          Talabalarimizning o’quv markazimiz haqidagi fikrlari
        </p>
        <ul className="quote">
          {quotes.map((quote) => (
            <li
              className="quote-item"
              key={quote.id}
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <div className="quote-img">
                <img src={quote.img} alt="" />
              </div>
              <p className="quote-text">{quote.text}</p>
              <div className="quote-name-wrapper">
                <span></span>
                <p className="quote-name">{quote.name}</p>
                <span></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notes;
