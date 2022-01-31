import React from "react";
import footerLogo from "../assets/footer-logo.svg";
import fb from "../assets/Facebook.svg";
import ig from "../assets/Instagram.svg";
import dribbble from "../assets/Dribbble.svg";
import footerCardBG from "../assets/footer-card-bg.png";
import "./Footer.css";
import Button from "./Button";

const Footer = () => {
  return (
    <section className="bg-dark">
      <div className="container footer">
        <div className="grid-4">
          <div className="col-1">
            <img src={footerLogo} alt="footer-logo" className="footer-logo" />

            <div className="socials-wrapper">
              <img src={fb} alt="" className="footer-socials" />
              <img src={ig} alt="" className="footer-socials" />
              <img src={dribbble} alt="" className="footer-socials" />
            </div>
          </div>
          <div className="col-1">
            <div>
              <p className="footer-label">Products</p>
              <a href="/#">
                <p className="footer-link">Objects</p>
              </a>
              <a href="/#">
                <p className="footer-link">Social</p>
              </a>
              <a href="/#">
                <p className="footer-link">Graphics</p>
              </a>
              <a href="/#">
                <p className="footer-link">Transitions</p>
              </a>
              <a href="/#">
                <p className="footer-link">Backgrounds</p>
              </a>
              <a href="/#">
                <p className="footer-link">Templates</p>
              </a>
              <a href="/#">
                <p className="footer-link">Presets</p>
              </a>
            </div>
            <p className="footer-label bottom-label">© motionstacks. 2020</p>
          </div>

          <div>
            <p className="footer-label">Company</p>
            <a href="/#">
              <p className="footer-link">About</p>
            </a>
            <a href="mailto:someone@yoursite.com?subject=Me&body=This is a test email">
              <p className="footer-link">Contact</p>
            </a>
            <a href="/#">
              <p className="footer-link">Blog</p>
            </a>
            <a href="/#">
              <p className="footer-link">FAQ</p>
            </a>
            <a href="/#">
              <p className="footer-link">Requests</p>
            </a>
            <a href="/#">
              <p className="footer-link">Contribute</p>
            </a>
            <a href="/#">
              <p className="footer-link">Fixed pricing works</p>
            </a>
          </div>

          <div className="footer-card">
            <p className="footer-label">Become a member</p>
            <h3 className="footer-card-h3">
              Get unlimited access <br />
              to all the templates
            </h3>

            <Button cname="btn btn-small">Get full access for $10/mo</Button>
            <img src={footerCardBG} alt="card-bg" className="footer-card-bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
