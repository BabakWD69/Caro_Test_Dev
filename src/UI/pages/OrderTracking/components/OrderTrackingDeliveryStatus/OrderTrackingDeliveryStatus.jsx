import React from "react";

const OrderTrackingDeliveryStatus = ({
  text,
  itemIcon: Icon,
  isCurrent,
  isPassed,
}) => {
  return (
    <div
      className={`d-flex justify-content-start align-items-center ${
        isCurrent ? "col-5" : "col-2"
      }`}
    >
      <Icon htmlColor={isPassed || isCurrent ? "#973079" : "#ABABAB"} />
      {isCurrent && <span className="fs-7 ps-1 text-caro-primary">{text}</span>}
    </div>
  );
};

export default OrderTrackingDeliveryStatus;
