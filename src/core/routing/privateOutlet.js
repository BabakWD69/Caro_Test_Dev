import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import QueryString from "query-string";
import { useAuthContext } from "../context/AuthContext/AuthContext";
import http from "../services/http";

const PrivateOutlet = () => {
  const searchObject = QueryString.parse(window.location.search);
  const { set_userToken, userToken } = useAuthContext();
  if (searchObject?.source) {
    set_userToken(searchObject?.source);
    return <Outlet />;
  } else {
    if (!userToken) {
      window.location.href = "";
    } else {
      return <Outlet />;
    }
  }
  return true ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateOutlet;
