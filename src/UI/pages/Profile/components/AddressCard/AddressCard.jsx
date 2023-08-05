import React from "react";
import defImg from "../../../../../assets/images/map-address.svg";
import "./styles/AddressCard.scss";

const AddressCard = ({
  addressMapImg = defImg,
  addressMapText = "ساری - میدان امام - بلووار پاسداران",
  addressMapPostalCode = "۴۸۱۴۸۳۳۳۳۳",
}) => {
  return (
    <div className="d-flex justify-content-start align-items-stretch address-card-holder my-2">
      <div className="d-flex justify-content-center align-items-center col-3">
        <div className="d-flex justify-content-center align-items-center w-100 p-2">
          <img className="w-100" src={addressMapImg} alt="NO_PIC" />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-start col-9 gap-1 p-2 address-card-text-holder">
        <span className="address-card-text">آدرس : </span>
        <span>{addressMapText}</span>
        <div>
          <span className="address-card-postal-code-text" style={{ color: "#973079" }}>کد پستی : </span>
          <span className="address-card-postal-code" style={{ color: "#973079" }}>{addressMapPostalCode}</span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
