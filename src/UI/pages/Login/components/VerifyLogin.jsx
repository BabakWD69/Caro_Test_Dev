import React, { useState } from "react";
import { useParams } from "react-router";
import ReactCodeInput from "react-verification-code-input";
import "./styles/VerifyLogin.scss";
import OrdinaryButton from "./../../../components/OrdinaryButton/OrdinaryButton";

const VerifyLogin = () => {
  const { phone } = useParams();
  const [verifyCode, setVerifyCode] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log();
  };

  const handleChange = (code) => {
    setVerifyCode(code);
  };

  console.log(verifyCode);

  return (
    <div dir="rtl" className="p-2 mt-5 w-100">
      <div className="w-100" style={{ height: "30vh" }}>
        <div className="d-flex justify-content-between align-items-center">
          <span style={{ color: "#9B99A9", fontSize: "14px" }}>
            کد ارسال شده را وارد کنید
          </span>
          <span style={{ color: "#973079", fontSize: "14px" }}>{phone}</span>
        </div>
        <form
          onSubmit={(e) => handleSubmitForm(e)}
          dir="ltr"
          className="d-flex flex-column justify-content-center align-items-center mt-2"
        >
          <ReactCodeInput
            // title="کد تایید را وارد کنید"
            fieldWidth="15%"
            className="w-100 my-2 mx-auto"
            // value={verifyCode}
            values={verifyCode ? verifyCode : ""}
            onChange={handleChange}
            // onComplete={e => {
            //   handleSubmitForm(e);
            // }}
            type="number"
            fields={4}
          />
          <OrdinaryButton buttonText="ورود" holderClasses="mt-5 w-100" />
        </form>
      </div>
    </div>
  );
};

export default VerifyLogin;
