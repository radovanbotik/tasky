import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useAppState } from "../context/AppState";
import NavigationLink from "./NavigationLink";
const Navbar = () => {
  const { user } = useAppState();
  return (
    <div className="navbar  bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Taskapp</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <div>
              Actions
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </div>
            <ul className="bg-base-100 p-2">
              <li>
                <NavigationLink path={"/tasks"}>All Assignments</NavigationLink>
              </li>
              <li>
                <NavigationLink path={"/tasks/create-task"}>
                  Create New Assignment
                </NavigationLink>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input-bordered input"
                />
              </div>
              <div className="dropdown-end dropdown">
                <label
                  tabIndex="0"
                  className="btn-ghost btn-circle avatar btn bg-fuchsia-400"
                >
                  <div className="w-10 rounded-full">
                    <p className="grid h-full w-full place-content-center text-center text-xl font-bold">
                      {user.charAt(1)}
                    </p>
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                >
                  {/* <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li> */}
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
