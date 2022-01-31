import React, { useState } from "react";
import Button from "../Button";
import heroImg from "../../assets/hero-img.png";
import frame1 from "../../assets/Frame1.svg";
import frame2 from "../../assets/Frame2.svg";
import frame3 from "../../assets/Frame3.svg";
import frame5 from "../../assets/framecheck.svg";
import Modal from "../Modal";
import Brands from "../Brands";
import Faq from "../Faq";
import Cards from "../Cards";
import Footer from "../Footer";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <section className="hero-section">
        <div className="container hero">
          <div className="hero-content-wrapper payment ">
            <h1 className="hero-title">
              Unlock the access to all our templates and assets
            </h1>

            <div className="payment-content-wrapper">
              <div className="payment-hero">
                <h4>Basic</h4>
                <p className="paragraph-2 payment-p2">
                  Unlimited access <br /> to motionstacks
                </p>
                <div className="price-container margin-top">
                  <p className="dollar">$</p>
                  <p className="number-text">10</p>
                  <p className="monthly-text color-black">/mo</p>
                </div>

                <div className="payment-hero-icons">
                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame1}
                      alt="icon 1"
                    />
                    <p className="paragraph-1 color-gray">
                      Over 9000 templates
                    </p>
                  </div>

                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame2}
                      alt="icon 1"
                    />
                    <p className="paragraph-1 color-gray">
                      Up to 10 new templates a week
                    </p>
                  </div>

                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame3}
                      alt="icon 1"
                    />
                    <p className="paragraph-1 color-gray">
                      Infinite use license
                    </p>
                  </div>
                </div>
                <Button
                  cname="btn outline margin-top-large"
                  onClick={openModal}
                >
                  Get started now
                </Button>
              </div>

              <div className="payment-hero active-hero">
                <h4>Pro</h4>
                <p className="paragraph-2 payment-p2">
                  Unlimited access <br /> to motionstacks <br />{" "}
                  <span className="span-black"> + cool features</span>
                </p>
                <div className="price-container margin-top-2">
                  <p className="dollar">$</p>
                  <p className="number-text">10</p>
                  <p className="monthly-text color-black">/mo</p>
                </div>

                <div className="payment-hero-icons">
                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame1}
                      alt="icon 1"
                    />
                    <p className="paragraph-1 color-gray">
                      Over 9000 templates
                    </p>
                  </div>

                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame2}
                      alt="icon 1"
                    />
                    <p className="paragraph-1 color-gray">
                      Up to 10 new templates a week
                    </p>
                  </div>

                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame3}
                      alt="icon 1"
                    />
                    <p className="paragraph-1 color-gray">
                      Infinite use license
                    </p>
                  </div>

                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame5}
                      alt="icon 1"
                    />
                    <p className="paragraph-1">Additional assets</p>
                  </div>

                  <div className="icon-wrapper-payment">
                    <img
                      className="payment-hero-icon"
                      src={frame5}
                      alt="icon 1"
                    />
                    <p className="paragraph-1 ">Discount on courses</p>
                  </div>
                </div>
                <Button cname="btn margin-top-m" onClick={openModal}>
                  Get started now
                </Button>
              </div>
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PaymentPage;
