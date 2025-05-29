import "./temp.css";
import LoginInput from "./LoginInput";
import { useRef, useEffect, type FormEvent } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import Button from "./Button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const form = event.currentTarget;
    const formdata = new FormData(form)
    const username = formdata.get("username")
    const password = formdata.get("password")
    console.log(username, password);
  }

  const clearUsername = () => {
    if(!usernameRef.current) return;
    usernameRef.current.value = ""; //clears it using ref manipulates the dom directly , when we use state react manipulates the dom for us
    if(!clearButtonRef?.current){
      return
    }
    clearButtonRef.current.disabled = true
  }

  const updateClearButton = (value:string) => {
    if(!clearButtonRef.current) return;
    if(value.length>0){
      clearButtonRef.current.disabled = false;
      clearButtonRef.current.onclick = clearUsername;
    }
    else{
      clearButtonRef.current.disabled=true;
    }
  }

  return (
    <div className="content">
      <div className="pattern-side">  
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form onSubmit={handleSubmit}> 
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              name="username"
              onChange={(e)=> updateClearButton(e.target.value)}
              endAdornment={<button type="button"  ref={clearButtonRef}>clear</button>}
            />

            <LoginInput id="login-password-input" label="Password" name = "password" />

            <Button type="submit" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;