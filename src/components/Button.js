import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button className={props.cname}>{props.children}</button>;
};

export default Button;
