import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/icons/logo.png";
import { Navlist } from "../../constants/nav-lists";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
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
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="nav">
      <div className="container">
        <div className="nav-wrapper">
          <div className="nav-logo">
            <a href="#home">
              <img src={logo} alt="img" />
            </a>
          </div>

          <div className="nav-right">
            <ul className="nav-lists">
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

            <div className="nav-register">
              <a href="#contact">
                <span>Register</span>
                <FaUserCircle />
              </a>
            </div>
          </div>

          <div className="nav-menu">
            <FiMenu onClick={() => setOpenMenu(true)} />
          </div>
        </div>
      </div>

      <div className={`menu ${openMenu ? "openMenu" : "closeMenu"}`}>
        <div className="menu-close">
          <IoMdClose onClick={() => setOpenMenu(false)} />
        </div>
        <div className="nav-right">
          <ul className="nav-lists">
            {navLists.map((list) => (
              <li key={list.id} onClick={() => setOpenMenu(false)}>
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

          <div className="nav-register" onClick={() => setOpenMenu(false)}>
            <a href="#contact">
              <span>Register</span>
              <FaUserCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
