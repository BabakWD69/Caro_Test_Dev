import React, { useState } from "react";
import { DialogTitle, Dialog } from "@mui/material";
import "./styles/SimpleMUIDialog.scss";

const SimpleMUIDialog = ({
  closeDialogHandler,
  openDialog,
  children,
  dialogTitle,
}) => {
  return (
    <div className="">
      <Dialog className="p-2" onClose={closeDialogHandler} open={openDialog}>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex justify-content-around align-items-center py-2 dialog-close-icon-holder w-100 px-1">
            <span onClick={closeDialogHandler} className="dialog-close-icon" />
            <span dir="rtl" className="w-75 dialog-title">
              {dialogTitle}
            </span>
          </div>
          {/* <DialogTitle className="p-0 m-0 m-2" style={{ fontSize: "14px" }}>
            {dialogTitle}
          </DialogTitle> */}
        </div>
        <div className="p-2">{children}</div>
      </Dialog>
    </div>
  );
};

export default SimpleMUIDialog;
