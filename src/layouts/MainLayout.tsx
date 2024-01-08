import "./MainLayout.css";

import React from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <div className={"MainLayout"}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { MainLayout };
