import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./menuBar.css";
import logo from "./logo.png";
import { links, social } from "./data";
import { Link } from "react-router-dom";
function MenuBar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            {/* ITERAMOS SOBRE CADA UNO DE LOS LINKS  */}
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default MenuBar;
