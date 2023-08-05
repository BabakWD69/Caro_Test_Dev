import React from "react";
import UserProfileInformation from "../../layouts/LandingLayout/components/UserProfileInformation/UserProfileInformation";
import AddressCard from "./components/AddressCard/AddressCard";
import "./styles/Profile.scss";

const Profile = () => {
  return (
    <section className="d-flex flex-column w-100">
      <UserProfileInformation holderClass="p-2 mt-5 mb-2" />
      <div className="d-flex flex-column user-current-address-holder">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <span className="user-current-address-text">آدرس من</span>
          <span className="user-current-address" style={{ color: "#973079" }}>
            اضافه کردن
          </span>
        </div>
        <div className="my-2">
          <AddressCard />
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <span className="user-current-address-text">آدرس های دیگر</span>
        </div>
        <div className="my-2">
          <AddressCard />
          <AddressCard />
        </div>
      </div>
    </section>
  );
};

export default Profile;
