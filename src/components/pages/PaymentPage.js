import React, { useState } from "react";
import Button from "../Button";
import heroImg from "../../assets/hero-img.png";
// import frame1 from "../../assets/Frame1.svg";
// import frame2 from "../../assets/Frame2.svg";
// import frame3 from "../../assets/Frame3.svg";
// import frame4 from "../../assets/Frame4.svg";
import Modal from "../Modal";
import Brands from "../Brands";
import Faq from "../Faq";
import Cards from "../Cards";
import Footer from "../Footer";

const PaymentPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <section className="hero-section">
        <div className="container hero">
          <div className="hero-content-wrapper">
            <h1 className="hero-title">
              Unlock the access to all our templates and assets
            </h1>

            <Button cname="btn" onClick={openModal}>
              Get started now
            </Button>
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
