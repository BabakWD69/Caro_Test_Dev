import React, { useState, useMemo, useContext, createContext } from "react";
import usePersistedState from "use-persisted-state-hook";

const BranchesContext = createContext();

const BranchesContextProvider = ({ children }) => {
  const [branch, setBranch] = usePersistedState("token", "");

  const providerValue = useMemo(
    () => ({
      branch,
      setBranch,
    }),
    [branch]
  );

  return (
    <BranchesContext.Provider value={providerValue}>
      {children}
    </BranchesContext.Provider>
  );
};

export const useBranchesContext = () => useContext(BranchesContext);

export default BranchesContextProvider;
