import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import "./Brands.css";

const Brands = () => {
  return (
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
  );
};

export default Brands;
