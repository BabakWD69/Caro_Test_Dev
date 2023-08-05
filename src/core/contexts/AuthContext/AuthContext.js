import React, { useContext, useEffect, useState, useMemo } from "react";
import usePersistedState from "use-persisted-state-hook";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [userToken, set_userToken] = usePersistedState("token", "");
  const providerValue = React.useMemo(
    () => ({
      userToken,
      set_userToken,
    }),
    [userToken]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
