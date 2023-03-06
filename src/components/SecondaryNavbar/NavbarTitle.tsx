import React from "react";

type PropType = {
  children: React.ReactNode;
};

const NavbarTitle = ({ children }: PropType) => {
  return <div className="mx-2 flex-1 px-2">{children}</div>;
};

export default NavbarTitle;
