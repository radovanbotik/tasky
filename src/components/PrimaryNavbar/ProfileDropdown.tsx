import React, { useContext, useEffect } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { SubmitButton } from "../AssignmentForm";
import NavigationLink from "../NavigationLink";

const ProfileDropdown = () => {
  const { globalState, logOut } = useContext(ApplicationContext);

  return (
    <div className="flex-none gap-2">
      <div className="dropdown-end dropdown">
        <label
          tabIndex="0"
          className="btn-ghost btn-circle avatar btn bg-fuchsia-400"
        >
          <div className="w-10 rounded-full"></div>
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <NavigationLink path="/" fn={logOut}>
              Log out
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
