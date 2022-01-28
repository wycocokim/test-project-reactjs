import React from "react";
import "./Modal.css";
import iIcon from "../assets/i-icon.svg";
import Button from "./Button";
import closeBtn from "../assets/modal-close.svg";

const Modal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={showModal ? "modal-container active" : "modal-container"}>
      <div className="modal-content-wrapper">
        <div className="modal-bg" onClick={closeModal}></div>
        <div className="modal-content">
          <div className="modal-top-wrapper">
            <h3>
              Welcome <br /> to Motion Stacks
            </h3>
            <p className="paragraph-2 modal-p2">
              We sent an email with your creditentials to 
              <span className="span-text">dmitry@herolabs.com</span>
              <img className="i-icon" src={iIcon} alt="i-icon"></img>
              Let’s keep this secure and create a password for your account.
            </p>
          </div>
          <div className="modal-input-wrapper">
            <div className="label-wrapper">
              <label className="input-label">Input your email</label>
            </div>
            <input
              type="email"
              className="modal-input-field"
              placeholder="Email"
            />
            <Button cname="btn">Submit Email</Button>
          </div>

          <img
            src={closeBtn}
            alt="close-btn"
            className="close-btn"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
