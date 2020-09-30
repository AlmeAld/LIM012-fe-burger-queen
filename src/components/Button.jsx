import React from "react";
import "./Button.scss";

function Button({ icon, noIcon, children, className, ...rest }) {
  // para reutilizar className
  const classNames = ["button", className].join(" ");
  // console.log(classNames);

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
}

const PrimaryButton = ({ children, ...rest }) => {
  return (
    <Button {...rest} className="primary-btn">
      {children}
    </Button>
  );
};

const PrimaryButtonIcon = ({ icon, children }) => {
  return (
    <Button className="primaryIcon-btn">
      {icon ? <img className="icon-button" src={icon} alt="imagen" /> : null}
      {children}
    </Button>
  );
};
const PrimaryButtonOrder = ({ children, ...rest }) => {
  return (
    <Button {...rest} className="primaryOrder-btn">
      {children}
    </Button>
  );
};

const SecondaryButton = ({ children }) => {
  return (
    <Button disabled className="secondary-btn">
      {children}
    </Button>
  );
};

const TertiaryButton = ({ children, ...rest }) => {
  return (
    <Button {...rest} className="tertiary-btn">
      {children}
    </Button>
  );
};

// export default Button;
export {
  PrimaryButton,
  SecondaryButton,
  PrimaryButtonIcon,
  TertiaryButton,
  PrimaryButtonOrder,
  Button,
};
