import React, { useState, useEffect, useContext } from "react";
import SpinnerLoading from "../../components/shared/loading-spinner/spinerLoading";

const Context = React.createContext();

const LoadingProvider = (props) => {
  const [openLoading, set_openLoading] = useState(false);

  const handleClose = () => {
    set_openLoading(false);
  };

  const handleOpen = () => {S
    set_openLoading(true);
  };

  return (
    <Context.Provider
      value={{
        openLoading: openLoading,
        handleClose: handleClose,
        handleOpen: handleOpen,
      }}
    >
      {openLoading && <SpinnerLoading />}
      {props.children}
    </Context.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(Context);
};

export default LoadingProvider;
