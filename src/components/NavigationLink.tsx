import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type PropTypes = {
  children: ReactNode;
  path: string;
};

const NavigationLink = ({ children, path }: PropTypes) => {
  return <Link to={path}>{children}</Link>;
};

export default NavigationLink;
