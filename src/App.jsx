import React from "react";

// Toaster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BranchesContextProvider from "./core/contexts/BranchesContext/BranchesContext";
import MaterialTheme from "./core/contexts/MaterialThemeContext/MaterialThemeContext";

// RouteConfig
import RouterConfig from "./core/routing/routerConfig";

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <ToastContainer
        rtl={true}
        style={{
          right: "0",
          zIndex: "1000000000",
          width: "355px",
          fontFamily: "iransans",
        }}
        className="font-iransans text-nowrap"
      />
      <MaterialTheme>
        <BranchesContextProvider>
          <RouterConfig />
        </BranchesContextProvider>
      </MaterialTheme>
    </div>
  );
}

export default App;
