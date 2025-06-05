import { useEffect, type ReactNode } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Layout.css";
import Header from "../header/Header";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) return true 
    return false
  };

  if (!isLoggedIn()) {
    console.log("dhfdjr");
    return <Navigate to="/login" />;
  }

  const location = useLocation();
  console.log(location.pathname);

  const routeTitles: { [key: string]: string } = {
    "/employee/create": "Create Employee",
    "/employee/create/": "Create Employee",
    "/employee": "List Employees",
    "/employee/": "List Employees",
    "/employee/profile" : "Profile",
    "employee/profile/" : "Profile"
  };

  let currentTitle = routeTitles[location.pathname] || "Default";

  if (location.pathname.startsWith("/employee/edit")) {
    currentTitle = "Edit Employee";
  } else if (routeTitles[location.pathname]) {
    currentTitle = routeTitles[location.pathname];
  }

  return (
    <div className="Layout_container">
      <Sidebar title={currentTitle} />
      <div className="main__container">
        <Header />
        <div className="outlet__wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
