import React from "react";
import Button from "./Button";
import "./Faq.css";
import polygon from "../assets/polygon.svg";

const Faq = () => {
  return (
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
              adipisicing mollit eiusmod aliquip minim pariatur velit consequat
              fugiat aliquip.
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
              <img src={polygon} alt="play-icon" className="play-icon" /> Watch
              a tutorial
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
  );
};

export default Faq;
