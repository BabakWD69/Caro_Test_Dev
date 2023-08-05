import React, { useState, useEffect } from "react";
import { useField } from "formik";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// theme
// import { useAppMode } from "../../../core/contexts/ModeCtx/ModeCtxProvider";
// import { useTheme } from "@mui/material/styles";

export const FomikMUITextInput = ({
  inputprops,
  formcontrolprops,
  labelprops,
  labelText,
  startAdornment = <></>,
  endAdornment = <></>,
}) => {
  const [field, meta] = useField(inputprops);

  return (
    <FormControl {...formcontrolprops}>
      <InputLabel htmlFor={inputprops.id} {...labelprops}>
        {labelText}
      </InputLabel>
      <Input
        label={'margin="dense"'}
        {...field}
        {...inputprops}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        onChange={(e) => {
          if (inputprops?.set_value) {
            const val = e?.target?.value;
            inputprops?.set_value(val);
          }
          field.onChange(e);
        }}
      />
      <div
        style={{ color: "red", fontSize: ".7rem", height: "17px" }}
        className="error mt-2"
      >
        {meta.touched && meta.error ? meta.error : ""}
      </div>
    </FormControl>
  );
};

export default FomikMUITextInput;
