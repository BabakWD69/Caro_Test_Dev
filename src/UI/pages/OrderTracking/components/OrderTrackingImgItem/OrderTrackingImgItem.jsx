import React from "react";

const OrderTrackingImgItem = ({ orderItemImg }) => {
  return (
    <div className="order-tracking-img-holder">
      <img className="w-100" src={orderItemImg} alt="NO_PIC" />
    </div>
  );
};

export default OrderTrackingImgItem;
