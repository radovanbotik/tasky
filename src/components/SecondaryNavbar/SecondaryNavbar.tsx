import React from "react";
import NavigationLink from "../NavigationLink";
import Actions from "./Actions";
import NavbarTitle from "./NavbarTitle";
import SidebarToggle from "./SidebarToggle";

const SecondaryNavbar = () => {
  return (
    <div className="navbar w-full bg-base-300">
      <SidebarToggle />
      <NavbarTitle>
        {new Date().toLocaleDateString("sk-Sk", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </NavbarTitle>
      <Actions />
    </div>
  );
};

export default SecondaryNavbar;
