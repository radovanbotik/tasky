import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ApplicationContext } from "../context/ApplicationContext";

type PropTypes = {
  children: JSX.Element;
};

const Protected = ({ children }: PropTypes) => {
  const { globalState } = useContext(ApplicationContext);
  // const { user } = globalState;
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default Protected;
