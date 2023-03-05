import React from "react";
import { useAppState } from "../context/AppState";
import { Navigate } from "react-router-dom";

type PropTypes = {
  children: JSX.Element;
};

const Protected = ({ children }: PropTypes) => {
  const { user } = useAppState();

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default Protected;
