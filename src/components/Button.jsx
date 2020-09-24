import React from "react";
import "./Button.scss";

function Button({ icon, noIcon, children, ...rest }) {
  return (
    <button {...rest}>
      {noIcon ? null : <img className="icon-button" src={icon} alt="imagen" />}
      {children}
    </button>
  );
}

export default Button;
