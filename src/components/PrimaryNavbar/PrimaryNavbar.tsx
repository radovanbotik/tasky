import React from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import ProfileDropdown from "./ProfileDropdown";

const PrimaryNavbar = () => {
  return (
    <div className="navbar  bg-base-100">
      <Logo>Tasky</Logo>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <SearchInput />
          </li>
          <li>
            <ProfileDropdown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
