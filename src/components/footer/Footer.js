import React, { useState } from "react";
import { Navlist } from "../../constants/nav-lists";
import "./footer.css";

const Footer = () => {
  const [navLists, setNavLists] = useState(Navlist);
  const setActive = (id) => {
    setNavLists(
      navLists.map((list) =>
        list.id === id
          ? { ...list, isActive: true }
          : { ...list, isActive: false }
      )
    );
  };
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <ul>
          {navLists.map((list) => (
            <li key={list.id}>
              <a
                href={`#${list.text}`}
                className={`${list.isActive ? "selected" : ""}`}
                onClick={() => setActive(list.id)}
              >
                {list.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
