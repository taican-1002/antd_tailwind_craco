import React from "react";
import { Route, Routes } from "react-router-dom";
// import Login from "../modules/home/pages/Login";
// import Dashboard from "../modules/home/pages/Dashboard";
import Home from "../modules/home/pages/Home";
import PageNotFound from "../modules/home/pages/404-page";
const Router = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
