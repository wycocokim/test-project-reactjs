import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";
import closeIcon from "../assets/close.svg";

const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false);

  const openSearch = () => {
    setSearchModal(!searchModal);
  };

  return (
    <nav>
      <div className="container">
        <div className="nav">
          <div
            className={
              searchModal
                ? "search-input-wrapper active-search"
                : "search-input-wrapper"
            }
          >
            <img
              className="search-icon-nav"
              src={searchIcon}
              alt="search icon"
            />
            <input className="search-input" type="text" placeholder="Search" />
            <img
              className="close-icon-nav"
              src={closeIcon}
              alt="close icon"
              onClick={openSearch}
            />
          </div>
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
              <a className="nav-link">
                <img
                  src={searchIcon}
                  alt="search"
                  className="search-icon-1"
                  onClick={openSearch}
                />
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
