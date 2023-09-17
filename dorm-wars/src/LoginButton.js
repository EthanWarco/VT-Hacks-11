import { React,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithPopup } = useAuth0();
  
    return <button onClick={async () => {
      console.log("login pressed"); 
      let a = await loginWithPopup();
      console.log(a);
    }}>Log In</button>;
  };
  
  export default LoginButton;