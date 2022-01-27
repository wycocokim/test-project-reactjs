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
    <section class="bg-dark">
      <div class="container footer">
        <div class="grid-4">
          <div class="col-1">
            <img src={footerLogo} alt="footer-logo" class="footer-logo" />

            <div class="socials-wrapper">
              <img src={fb} alt="" class="footer-socials" />
              <img src={ig} alt="" class="footer-socials" />
              <img src={dribbble} alt="" class="footer-socials" />
            </div>
          </div>
          <div class="col-1">
            <div>
              <p class="footer-label">Products</p>
              <a href="/#">
                <p class="footer-link">Objects</p>
              </a>
              <a href="/#">
                <p class="footer-link">Social</p>
              </a>
              <a href="/#">
                <p class="footer-link">Graphics</p>
              </a>
              <a href="/#">
                <p class="footer-link">Transitions</p>
              </a>
              <a href="/#">
                <p class="footer-link">Backgrounds</p>
              </a>
              <a href="/#">
                <p class="footer-link">Templates</p>
              </a>
              <a href="/#">
                <p class="footer-link">Presets</p>
              </a>
            </div>
            <p class="footer-label bottom-label">© motionstacks. 2020</p>
          </div>

          <div>
            <p class="footer-label">Company</p>
            <a href="/#">
              <p class="footer-link">About</p>
            </a>
            <a href="/#">
              <p class="footer-link">Contact</p>
            </a>
            <a href="/#">
              <p class="footer-link">Blog</p>
            </a>
            <a href="/#">
              <p class="footer-link">FAQ</p>
            </a>
            <a href="/#">
              <p class="footer-link">Requests</p>
            </a>
            <a href="/#">
              <p class="footer-link">Contribute</p>
            </a>
            <a href="/#">
              <p class="footer-link">Fixed pricing works</p>
            </a>
          </div>

          <div class="footer-card">
            <p class="footer-label">Become a member</p>
            <h3 class="footer-card-h3">
              Get unlimited access <br />
              to all the templates
            </h3>

            <Button cname="btn btn-small">Get full access for $10/mo</Button>
            <img src={footerCardBG} alt="card-bg" class="footer-card-bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
