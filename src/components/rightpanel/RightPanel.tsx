import Button from "../button/Button";
import "./RightPanel.css";
import KVlogo from "../../assets/kv-logo.png";
import AnimatedInput from "../animatedinput/AnimatedInput";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Navigate, useNavigate, useNavigation, useRoutes } from "react-router-dom";

const RightPanel = () => {

  const router = useNavigate();
  // const [formData, setFormData] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [usernameLengthError, setUsernameLengthError] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const validCredentials = {
    email: "ria@gmail.com",
    password : "hihihihi"
  }
  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(email, password);
    if(email === validCredentials.email && password === validCredentials.password) { console.log("logging in"); localStorage.setItem("isLoggedIn", "true"); router("/employee")} 
    else {console.log("invalid user creds"); localStorage.setItem("isLoggedIn", "false");}
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


  useEffect(() => {
    if (password.length > 0 && password.length < 8) {
      console.log(password.length);
      setPasswordLengthError("The password should be atleast 8 characters");
    } else {
      setPasswordLengthError("");
    }
  }, [password]);

  useEffect(() => {
    if (username.length > 5) {
      setUsernameLengthError("Username should be max 5 characters");
    } else {
      setUsernameLengthError("");
    }
  }, [username]);

  useEffect(() => {
    if(usernameRef.current) usernameRef.current.focus();
  }, []);

  return (
    <div className="rightpanel__container">
      <div className="login_input">
        <img src={KVlogo} alt="" />
        <AnimatedInput
          inputType="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></AnimatedInput>
        <AnimatedInput
          inputType="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          inputRef = {usernameRef} 
        ></AnimatedInput>
        {usernameLengthError && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            {usernameLengthError}
          </p>
        )}
        <AnimatedInput
          inputType="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          endAdornment={
            <button style={{
              display: 'flex',
              padding : '2px',
              backgroundColor : 'white',
              boxShadow : 'none',
              border :  '1px solid gray',
              borderRadius : '50%',
              width: '22px',
              height: '22px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }} type="button"  onClick={()=> {setPassword("")}} >
              X
            </button>
          }
        ></AnimatedInput>
        {passwordLengthError && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            {passwordLengthError}
          </p>
        )}

        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "#03AEEE",
          }}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default RightPanel;
