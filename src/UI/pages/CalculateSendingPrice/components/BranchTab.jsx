import React, { useState } from "react";
import useCalcMap from "./useSelectDestinationOnMap";
import OrdinaryButton from "./../../../components/OrdinaryButton/OrdinaryButton";
import "./styles/BranchTab.scss";

const BranchTab = ({ originPosition }) => {
  ////////
  // handle calculate price
  const [price, setPrice] = useState();
  const handleCalculatePrice = () => {
    // Call Api For Calculate Price
    setPrice(5000);
  };

  ///////////////////////
  const [destini, set_destini] = useState();
  const onDestinationSelected = (dest) => {
    set_destini(dest);
    console.log(dest);
  };
  const { renderMap, set_curved, set_midPoint, set_positions } = useCalcMap({
    originPosition: originPosition,
    onDestinationSelected: onDestinationSelected,
    draggable: !price ? true : false,
  });
  const handleRecalculatePrice = () => {
    set_curved(undefined);
    set_midPoint(undefined);
    set_positions([originPosition]);
    set_destini(undefined);
    setPrice(undefined);
  };
  React.useEffect(() => {
    handleRecalculatePrice();
  }, [originPosition]);
  ///////////////////////
  return (
    <div
      style={{ height: "400px" }}
      className="d-flex flex-column justify-content-center align-items-center map-holder w-100"
    >
      <div className="position-relative w-100 h-100 map-container">
        {price ? <div className="map-overlay"></div> : <></>}
        {renderMap()}
      </div>

      {/* ==== */}
      <div className="d-flex flex-column justify-content-center align-items-start w-100">
        <div className="d-flex flex-column justify-content-start align-items-start px-2">
          <div className="origin-address-holder my-1">
            <span className="origin-address-text">مبدا : </span>
            <span className="origin-address">قائم شهر - خیابان ساری</span>
          </div>
          {/* Destination Address */}
          <div className="destination-address-holder my-1">
            <span className="destination-address-text">مقصد : </span>
            <span className="destination-address">
              ساری - خیابان فرهنگ - فرهنگ ۱۴
            </span>
          </div>
        </div>
        {/* Buttons */}
        {/* <div className="d-flex justify-content-center align-items-center w-100 px-2 cursor-pointer"> */}
        {!price && (
          <OrdinaryButton
            buttonText="محاسبه قیمت"
            isActive="true"
            isDisabled={destini ? false : true}
            holderClasses="my-2 w-100"
            handleOnClick={handleCalculatePrice}
          />
        )}
        {price && destini && (
          <>
            <OrdinaryButton
              buttonText={`قیمت پیک : ${price} تومان`}
              isActive="true"
              holderClasses="my-2 w-100"
            />
            <div className="d-flex justify-content-center align-items-center outlined-button-holder mt-2 w-100">
              <button onClick={handleRecalculatePrice} className="py-2">
                محاسبه دوباره
              </button>
            </div>
          </>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default BranchTab;
