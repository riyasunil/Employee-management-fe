import React, { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("isLoggedIn");
    return token === "true";
  };

  if (isLoggedIn()) {
    console.log("dhfdjr");
    return <Navigate to="/employee" />;
  }
  return <div>{children}</div>;
};

export default PublicLayout;
