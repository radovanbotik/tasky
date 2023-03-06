import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Logo = ({ children }: Props) => {
  return (
    <div className="flex-1">
      <Link to="/tasks" className="btn-ghost btn text-xl normal-case">
        {children}
      </Link>
    </div>
  );
};

export default Logo;
