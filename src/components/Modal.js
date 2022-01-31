import React, { useState } from "react";
import "./Modal.css";
import iIcon from "../assets/i-icon.svg";
import Button from "./Button";
import closeBtn from "../assets/modal-close.svg";
import keyIcon from "../assets/mdi_vpn_key.svg";
import eye from "../assets/remove-eye.svg";

const Modal = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  const onSubmit = () => {
    if (valid) {
      setSuccess(true);
    }
  };

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = (e) => {
    setEmail(e.target.value);

    if (regex.test(email) === false) {
      setError("please enter valid email");
      setValid(false);
      console.log(error);
    } else {
      setError("");
      setValid(true);
      return true;
    }
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
            <div className="input-wrapper-payment">
              <input
                type="email"
                className="modal-input-field"
                placeholder="Email"
                onChange={checkEmail}
              />
              <img className="key-icon" src={keyIcon} alt="key" />
              <img className="eye-icon" src={eye} alt="eye" />
            </div>
            <Button cname={valid ? "btn" : "btn gray"} onClick={onSubmit}>
              Set password
            </Button>
          </div>

          <img
            src={closeBtn}
            alt="close-btn"
            className="close-btn"
            onClick={closeModal}
          />

          <div
            className={
              success ? "modal-success active-modal-success" : "modal-success"
            }
          >
            <div className="modal-success-top"></div>
            <div className="modal-success-bot">
              <h3>You're all good</h3>
              <p className="paragraph-2 success-p-2">
                Password succesfully sent. <br /> Enjoy the Motion Stacks!
              </p>

              <Button cname="btn outline">Browse templates</Button>
            </div>
          </div>
        </div>

        {/* success */}
      </div>
    </div>
  );
};

export default Modal;
