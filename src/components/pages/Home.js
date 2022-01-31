import React from "react";
import "./Home.css";
import Footer from "../Footer";
import Button from "../Button";
import heroImg from "../../assets/hero-img.png";
import frame1 from "../../assets/Frame1.svg";
import frame2 from "../../assets/Frame2.svg";
import frame3 from "../../assets/Frame3.svg";
import frame4 from "../../assets/Frame4.svg";

import Brands from "../Brands";
import Faq from "../Faq";
import Cards from "../Cards";
// import Modal from "../Modal";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero">
          <div className="hero-content-wrapper">
            <h1 className="hero-title">
              Unlock the access to all our templates and assets
            </h1>
            <div className="hero-grid">
              <div>
                <div className="icon-container">
                  <img src={frame1} alt="icon1" className="hero-icon icon-1" />
                </div>
                <p className="paragraph-1">
                  Unlimited access to library <br />
                  with over 9000 templates
                </p>
              </div>

              <div>
                <div className="icon-container">
                  <img src={frame2} alt="icon1" className="hero-icon icon-2" />
                </div>
                <p className="paragraph-1">
                  Weekly drops of new templates. <br />
                  Up to 10 templates a week
                </p>
              </div>

              <div>
                <div className="icon-container">
                  <img src={frame3} alt="icon1" className="hero-icon icon-3" />
                </div>
                <p className="paragraph-1">
                  High quality templates <br />
                  with infinite use license
                </p>
              </div>

              <div>
                <div className="icon-container">
                  <img src={frame4} alt="icon1" className="hero-icon icon-4" />
                </div>
                <p className="paragraph-1">
                  Super easy to use. Just change <br />
                  the text and you’re good to go!
                </p>
              </div>
            </div>

            <div className="hero-cta">
              <div className="price-container">
                <p className="dollar">$</p>
                <p className="number-text">10</p>
                <p className="monthly-text color-gray">/mo</p>
              </div>
              <p className="paragraph-2 cta-1">
                Unlimited access to motionstacks.
              </p>
              <a href="/payment">
                <Button cname="btn">Get started now</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg-image">
          <img src={heroImg} alt="hero-img" className="hero-img" />
          <div className="linear"></div>
        </div>
      </section>

      <Brands />

      <Faq />

      <Cards />

      <Footer />
    </>
  );
};

export default Home;
