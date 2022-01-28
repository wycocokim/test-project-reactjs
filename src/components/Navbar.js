import React from "react";
import Button from "./Button";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav">
          <a href="/" className="logo-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <ul className="nav-links">
            <li>
              <a href="/#" className="nav-link">
                Browse
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link">
                Freebies
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link">
                Courses
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="/#">
                <img src={searchIcon} alt="search" className="nav-link" />
              </a>
            </li>
          </ul>

          <div className="nav-btns-wrapper">
            <Button cname="btn btn-small outline">En</Button>
            <Button cname="btn btn-small outline btn-margin-left">
              Account
            </Button>

            <Button cname="btn btn-small  btn-margin-left">
              Get full access
            </Button>
          </div>

          <div className="menu-btn">
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
