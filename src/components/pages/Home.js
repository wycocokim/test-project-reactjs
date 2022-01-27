import React from "react";
import "./Home.css";
import Footer from "../Footer";
import Button from "../Button";
import heroImg from "../../assets/hero-img.png";
import frame1 from "../../assets/Frame1.svg";
import frame2 from "../../assets/Frame2.svg";
import frame3 from "../../assets/Frame3.svg";
import frame4 from "../../assets/Frame4.svg";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import polygon from "../../assets/polygon.svg";

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
                <p className="monthly-text">/mo</p>
              </div>
              <p className="paragraph-2 cta-1">
                Unlimited access to motionstacks.
              </p>
              <Button cname="btn">Get started now</Button>
            </div>
          </div>
        </div>
        <div className="hero-bg-image">
          <img src={heroImg} alt="hero-img" className="hero-img" />
          <div className="linear"></div>
        </div>
      </section>

      {/* brand */}

      <section className="brand">
        <div className="container brands">
          <div>
            <p className="paragraph-3 p-3-gray">
              Trusted by world’s great companies
            </p>
          </div>
          <img src={logo1} alt="brand1" />
          <img src={logo2} alt="brand2" />
          <img src={logo3} alt="brand3" />
          <img src={logo4} alt="brand4" />
          <img src={logo5} alt="brand5" />
        </div>
      </section>

      <section className="border-bottom">
        <div className="container faq">
          <div className="grid-2">
            <div>
              <h2 className="grid-2-heading">
                How can i use <br />
                the assets?
              </h2>
              <p className="paragraph-2 grid-2-text">
                Sit in mollit proident magna esse consectetur nisi sint anim
                occaecat qui incididunt. Occaecat do fugiat consectetur anim
                reprehenderit velit exercitation adipisicing eu laborum non
                ullamco enim ex.
              </p>
            </div>
            <div>
              <h2 className="grid-2-heading">
                Can i cancel <br />
                my subscription?
              </h2>
              <p className="paragraph-2 grid-2-text">
                Amet et aliquip mollit magna tempor consequat aute. Sunt laboris
                amet aliqua deserunt non irure officia. Est aute aliquip
                adipisicing mollit eiusmod aliquip minim pariatur velit
                consequat fugiat aliquip.
              </p>
            </div>
            <div>
              <h2 className="grid-2-heading">
                How to use After Effects <br />
                template files?
              </h2>
              <p className="paragraph-2 grid-2-text">
                Laboris qui dolor duis eu. Veniam elit amet ut in nisi qui aute
                laboris. Tempor ea eiusmod aliquip magna sit amet mollit velit
                duis commodo officia irure.
              </p>

              <Button cname="btn btn-small outline with-icon">
                <img src={polygon} alt="play-icon" className="play-icon" />{" "}
                Watch a tutorial
              </Button>
            </div>
            <div>
              <h2 className="grid-2-heading">
                What if subscription <br />
                expires?
              </h2>
              <p className="paragraph-2 grid-2-text">
                Laborum eu consequat amet non. Eiusmod tempor anim cupidatat ut
                excepteur labore culpa sit ut reprehenderit pariatur cupidatat
                commodo. Veniam pariatur qui tempor aliqua amet nulla laboris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* card section */}

      <section>
        <div className="container cards-section">
          <div className="grid-3">
            <div className="card card-1">
              <p className="paragraph-3 p-3-card">
                Still have questions <br />
                to ask?
              </p>
              <h2>help@motionstacks.com</h2>
            </div>
            <div className="card card-2">
              <p className="paragraph-3 p-3-card">
                Looking for personal <br />
                offer?
              </p>
              <h2>help@motionstacks.com</h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
