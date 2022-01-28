import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
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
  );
};

export default Cards;
