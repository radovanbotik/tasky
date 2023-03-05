import React from "react";
import { useAppState } from "../context/AppState";

const ProfileDropdown = () => {
  const { retrieveUser } = useAppState();

  return (
    <div className="flex-none gap-2">
      <div className="dropdown-end dropdown">
        <label
          tabIndex="0"
          className="btn-ghost btn-circle avatar btn bg-fuchsia-400"
        >
          <div className="w-10 rounded-full">
            {retrieveUser() && (
              <p className="grid h-full w-full place-content-center text-center text-xl font-bold">
                {retrieveUser().charAt(1)}
              </p>
            )}
          </div>
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
