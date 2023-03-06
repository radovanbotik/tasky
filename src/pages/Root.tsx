import React from "react";
import { Outlet } from "react-router-dom";
import { Modal, SecondaryNavbar, PrimaryNavbar } from "../components";
import { Sidebar } from "../components/Sidebar";

const Root = () => {
  return (
    <div className=" min-h-screen">
      <PrimaryNavbar />
      <Modal />

      <div>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <SecondaryNavbar />
            <Outlet />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Root;
