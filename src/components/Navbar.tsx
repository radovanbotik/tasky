import React from "react";
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDropdown";
import ActionsDropdown from "./ActionsDropdown";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div className="navbar  bg-base-100">
      <Logo>Tasky</Logo>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <SearchInput />
          </li>
          <li tabIndex={0}>
            <ActionsDropdown />
          </li>
          <li>
            <ProfileDropdown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
