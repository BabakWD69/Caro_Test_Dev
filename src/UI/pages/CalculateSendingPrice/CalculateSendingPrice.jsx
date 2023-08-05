import React, { useState } from "react";
import { Button } from "@mui/material";
import OrdinaryButton from "./../../components/OrdinaryButton/OrdinaryButton";
import useCalcMap from "./components/useSelectDestinationOnMap";
import "./styles/CalculateSendingPrice.scss";
import defMapImg from "../../../assets/images/priceMap.svg";
import BranchTab from "./components/BranchTab";

const CalculateSendingPrice = () => {
  const [branchesList, set_branchesList] = useState([
    { id: 0, branchName: "شعبه ساری", branchOrigin: [36.56919280215607, 52.9719006186945] },
    { id: 1, branchName: "شعبه قائمشهر", branchOrigin: [36.46919280215607, 52.8719006186945] },
  ]);
  // selected tab state
  const [currentBranch, setCurrentBranch] = useState(branchesList[0]);
  const handleChangeTab = (branchID) => {
    const index = branchesList.findIndex(item => item.id === branchID);
    setCurrentBranch(branchesList[index]);
  };

  return (
    <section className="d-flex flex-column w-100 mt-4">
      <div className="d-flex flex-column justify-content-start align-items-stretch">
        {/* tab buttons */}
        <div className="d-flex m-0 p-0 gap-2 justify-content-around align-items-center">
          {branchesList.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-center align-items-center col-6 px-2"
            >
              <Button
                className="w-100 px-2 py-2"
                variant={item.id === currentBranch.id ? "contained" : "outlined"}
                color="primary"
                onClick={() => {
                  handleChangeTab(item.id);
                }}
              >
                {item.branchName}
              </Button>
            </div>
          ))}
        </div>
        {/* tab panels */}
        <div className="d-flex justify-content-center align-items-center mt-3">
          <BranchTab originPosition={currentBranch.branchOrigin} />
        </div>
        {/* Origin Address */}
      </div>
    </section>
  );
};

export default CalculateSendingPrice;
