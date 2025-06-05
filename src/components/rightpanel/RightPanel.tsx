import Button from "../button/Button";
import "./RightPanel.css";
import KVlogo from "../../assets/kv-logo.png";
import AnimatedInput from "../animatedinput/AnimatedInput";
import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import {
  data,
  Navigate,
  useNavigate,
  useNavigation,
  useRoutes,
} from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useLoginMutation } from "../../api-services/auth/login.api";
import { jwtDecode } from 'jwt-decode';


const RightPanel = () => {
  const router = useNavigate();
  // const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [emailValidationError, setEmailValidationError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useLocalStorage(
    "showPassword",
    false
  );
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  console.log(isLoading);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login({ email: email, password: password })
      .unwrap()
      .then((response) => {
        if(response.accessToken){
        localStorage.setItem("token", response.accessToken);
          const decoded = jwtDecode(response.accessToken);
          // console.log(decoded);
          // document.cookie = `userId=${decoded.id}; path=/; secure`;
          localStorage.setItem('userId', decoded.id.toString());
        }
        router("/employee");
      })
      .catch((error) => {
        setError(error.data.message);
      });

    // if (response.data?.accessToken) {
    //   localStorage.setItem("token", response.data?.accessToken);
    //   setTimeout(() => {
    //     router("/employee");
    //   }, 6000);
    // }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setUsername(event.target.value);
  // };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if(passwordRef.current){
    //   const currType = passwordRef.current.type;
    //   passwordRef.current.type = currType === "password" ?  "text" : "password"
    // }
    setShowPassword(e.target.checked);
  };

  useEffect(() => {
    if (password.length > 0 && password.length < 6) {
      console.log(password.length);
      setPasswordLengthError("The password should be atleast 6 characters");
    } else {
      setPasswordLengthError("");
    }
  }, [password]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(String(email).toLowerCase());
      console.log(isValid);
      if (!isValid && email) {
        setEmailValidationError("Please enter a valid email");
      } else {
        setEmailValidationError("");
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [email]);

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
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
          inputRef={emailRef}
        ></AnimatedInput>
        {/* <AnimatedInput
          inputType="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          inputRef={usernameRef}
        ></AnimatedInput> */}
        {emailValidationError && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            {emailValidationError}
          </p>
        )}
        <AnimatedInput
          inputType={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          inputRef={passwordRef}
          endAdornment={
            <button
              style={{
                display: "flex",
                padding: "2px",
                backgroundColor: "white",
                boxShadow: "none",
                border: "1px solid gray",
                borderRadius: "50%",
                width: "22px",
                height: "22px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              type="button"
              onClick={() => {
                setPassword("");
              }}
            >
              X
            </button>
          }
        ></AnimatedInput>
        <div className="show_password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={toggleShowPassword}
          />
          Show password
        </div>
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
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {`Login ${isLoading}`}
        </Button>
        {error && (
          <p
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              color: "red",
              marginTop: "8px",
              fontSize: "12px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default RightPanel;
