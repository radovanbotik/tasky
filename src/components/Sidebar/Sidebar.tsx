import React from "react";
import NavigationLink from "../NavigationLink";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu w-80 bg-base-100 p-4">
        {/* <!-- Sidebar content here --> */}
        <li>
          <NavigationLink path="/">My assignments</NavigationLink>
        </li>
        <li>
          <NavigationLink path="create-task">New assignments</NavigationLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
