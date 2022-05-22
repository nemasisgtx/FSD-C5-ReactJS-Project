import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar">
          <div className="bottom-nav">
            <ul className="bottom-nav-list">
              <div className="left-nav">
                <a href="index.html">
                  <img
                    src={logo}
                    alt="logo"
                    className="nav-item logo logo-nav"
                  />
                </a>
              </div>
              <li>
                <button className="login-btn">Login </button>
              </li>
            </ul>
          </div>
          <div className="top-nav"> </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
