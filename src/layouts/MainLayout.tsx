import React from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";
import css from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={css.Component}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { MainLayout };
