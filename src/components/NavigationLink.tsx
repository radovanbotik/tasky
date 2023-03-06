import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type PropTypes = {
  children: ReactNode;
  path: string;
  fn?: () => void;
};

const NavigationLink = ({ children, path, fn }: PropTypes) => {
  return (
    <Link to={path} onClick={fn}>
      {children}
    </Link>
  );
};

export default NavigationLink;
