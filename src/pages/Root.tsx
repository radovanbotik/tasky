import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Modal } from "../components";

const Root = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Modal />
      <Outlet />
    </div>
  );
};

export default Root;
