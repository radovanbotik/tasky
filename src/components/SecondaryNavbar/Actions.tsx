import React from "react";
import NavigationLink from "../NavigationLink";

const Actions = () => {
  return (
    <div className="hidden flex-none lg:block">
      <ul className="menu menu-horizontal">
        <li>
          <NavigationLink path={"/"}>My assignments</NavigationLink>
        </li>

        <li>
          <NavigationLink path={"create-task"}>New assignment</NavigationLink>
        </li>
      </ul>
    </div>
  );
};

export default Actions;
