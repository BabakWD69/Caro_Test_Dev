import React from "react";
import "./styles.scss";

const OrdinaryButton = ({
  holderClasses = "",
  buttonClasses = "py-2",
  buttonText,
  handleOnClick,
  buttonType = "button",
  isActive = "true",
  isDisabled = false,
}) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center cursor-pointer ${
        isActive === "true" ? "active-button-holder" : "deactive-button-holder"
      } ${holderClasses}`}
    >
      <button
        disabled={isDisabled}
        type={buttonType}
        className={`${buttonClasses}`}
        onClick={isDisabled === false ? handleOnClick : () => {}}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default OrdinaryButton;

export const OutlinedButton = ({
  holderClasses = "",
  buttonClasses = "py-2",
  buttonText,
  handleOnClick,
  buttonType = "button",
  isDisabled = false,
}) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center cursor-pointer outline-btn-holder ${holderClasses}`}
    >
      <button
        disabled={isDisabled}
        type={buttonType}
        className={`${buttonClasses}`}
        onClick={isDisabled === false ? handleOnClick : () => {}}
      >
        {buttonText}
      </button>
    </div>
  );
};

export const SimpleButton = ({
  holderClasses = "",
  buttonClasses = "py-2",
  buttonText,
  handleOnClick,
  buttonType = "button",
  isDisabled = false,
}) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center cursor-pointer simple-btn-holder ${holderClasses}`}
    >
      <button
        disabled={isDisabled}
        type={buttonType}
        className={`${buttonClasses}`}
        onClick={isDisabled === false ? handleOnClick : () => {}}
      >
        {buttonText}
      </button>
    </div>
  );
};
