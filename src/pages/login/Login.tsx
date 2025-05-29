import "./Login.css";
import LeftPanel from "../../components/leftpanel/LeftPanel";
import RightPanel from "../../components/rightpanel/RightPanel";
import { Navigate } from "react-router-dom";


const Login = () => {
  //  const isLoggedIn = () => {
  //   const token = localStorage.getItem("isLoggedIn");
  //   return token === "true";
  // };

  // if (isLoggedIn()) {
  //   console.log("logged in trying to access login page");
  //   return <Navigate to="/employee" />
  // }

  return (
    <>
      <div className="login__container">
        <LeftPanel />
        <RightPanel />
      </div>
    </>
  );
};

export default Login;
