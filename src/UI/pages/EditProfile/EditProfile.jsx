import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FomikMUITextInput } from "./../../components/formik-input/formikMuiInput.component";
import OrdinaryButton from "./../../components/OrdinaryButton/OrdinaryButton";
import userDefImg from "../../../assets/images/user-profile.svg";
import "./styles/EditProfile.scss";

// const formSchema = Yup.object().shape({
//   phoneNumber: Yup.number("لطفا عدد وارد کنید").required(
//     "لطفا شماره را وارد کنید"
//   ),
// });

const EditProfile = () => {
  return (
    <div className="d-flex flex-column w-100 p-2">
      <div className="d-flex justify-content-center align-content-center my-3 user-image-holder">
        <div className="d-flex justify-content-center align-items-center img-holder-base w-75">
          <div className="w-50 img-holder">
            <img className="w-100" src={userDefImg} alt="NO_PIC" />
            <button className="plus-icon-btn"></button>
          </div>
        </div>
      </div>
      <div className="mt-4 form-holder">
        <Formik>
          <Form>
            {/* FullName Filed */}
            <div>
              <FomikMUITextInput
                formcontrolprops={{
                  variant: "standard",
                  className: "w-100",
                }}
                labelText="نام و نام خانوادگی"
                labelprops={{
                  className: "",
                  color: "",
                  style: {
                    color: "#000",
                  },
                }}
                inputprops={{
                  className: "",
                  id: "fullName",
                  name: "fullName",
                  color: "",
                  type: "text",
                  // set_value: setUserNumber,
                }}
                //   startAdornment={<Person htmlColor="#DAD9E2" />}
              />
            </div>
            {/* Mobile Filed */}
            <div>
              <FomikMUITextInput
                formcontrolprops={{
                  variant: "standard",
                  className: "w-100",
                }}
                labelText="موبایل"
                labelprops={{
                  className: "",
                  color: "",
                  style: {
                    color: "#000",
                  },
                }}
                inputprops={{
                  className: "",
                  id: "mobile",
                  name: "mobile",
                  color: "",
                  type: "text",
                  // set_value: setUserNumber,
                }}
              />
            </div>
            {/* Email Filed */}
            <div>
              <FomikMUITextInput
                formcontrolprops={{
                  variant: "standard",
                  className: "w-100",
                }}
                labelText="ایمیل"
                labelprops={{
                  className: "",
                  color: "",
                  style: {
                    color: "#000",
                  },
                }}
                inputprops={{
                  className: "",
                  id: "email",
                  name: "email",
                  color: "",
                  type: "text",
                  // set_value: setUserNumber,
                }}
              />
            </div>
            <OrdinaryButton
              buttonText="ثبت تغییرات"
              buttonType="submit"
              holderClasses="mt-3"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
