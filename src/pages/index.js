import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import DashboardPage from "./dashboard";
import CarsPage from "./cars";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/cars" element={<CarsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);