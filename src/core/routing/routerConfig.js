import React, { lazy, Suspense, useEffect, CSSProperties } from "react";
import { CircleLoader } from "react-spinners";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import LandingLayout from "../../UI/layouts/LandingLayout/LandingLayout";
import AuthLayout from "../../UI/layouts/AuthLayout/AuthLayout";
import VerifyLogin from "../../UI/pages/Login/components/VerifyLogin";
import BaseLayout from "../../UI/layouts/BaseLayout/BaseLayout";
// import NotFound from "../../UI/pages/404/NotFound";
// import PrivateOutlet from "./privateOutlet";

const override = {
  display: "block",
  margin: "0 auto",
};

const LandingPage = lazy(() => import("../../UI/pages/Landing/Landing"));
const Login = lazy(() => import("../../UI/pages/Login/Login"));

const Profile = lazy(() => import("../../UI/pages/Profile/Profile"));
const EditProfile = lazy(() =>
  import("../../UI/pages/EditProfile/EditProfile")
);
const CalculatePrice = lazy(() =>
  import("../../UI/pages/CalculateSendingPrice/CalculateSendingPrice")
);

const AddingAddress = lazy(() =>
  import("../../UI/pages/AddingAddress/AddingAddress")
);

const CheckoutCart = lazy(() =>
  import("./../../UI/pages/CheckoutCart/CheckoutCart")
);

const Orders = lazy(() => import("./../../UI/pages/Orders/Orders"));
const RegisteredOrders = lazy(() =>
  import("./../../UI/pages/RegisteredOrders/RegisteredOrders")
);
const OrderTracking = lazy(() => import("./../../UI/pages/OrderTracking/OrderTracking"));

function RouterConfig() {
  return (
    <Suspense
      fallback={
        <CircleLoader
          color={"#973079"}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
        />
      }
    >
      {/* <Suspense> */}
      <Routes>
        <Route path="/" element={<WithLandingLayout />}>
          {/* landing page */}
          {/* <Route path="/" element={<PrivateOutlet />}> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          {/* </Route> */}
        </Route>
        <Route path="/" element={<WithAuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/verify-login/:phone" element={<VerifyLogin />} />
        </Route>
        <Route path="/" element={<WithBaseLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/calc-price" element={<CalculatePrice />} />
          <Route path="/add-address" element={<AddingAddress />} />
          <Route path="/checkout-cart" element={<CheckoutCart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Route>
        <Route path="/registered-order" element={<RegisteredOrders />} />
        {/* <Route path="/login" element={<h1>login page</h1>} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}

export default RouterConfig;

function WithLandingLayout() {
  return (
    <LandingLayout>
      {/* <Routes> */}
      <Outlet />
      {/* <Routes> */}
    </LandingLayout>
  );
}

function WithAuthLayout() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}

function WithBaseLayout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}
