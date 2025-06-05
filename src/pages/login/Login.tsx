import "./Login.css";
import LeftPanel from "../../components/leftpanel/LeftPanel";
import RightPanel from "../../components/rightpanel/RightPanel";
import { Navigate } from "react-router-dom";


const Login = () => {
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
