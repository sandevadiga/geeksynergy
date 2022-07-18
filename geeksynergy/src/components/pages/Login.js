import "./login.css";

import React, { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";
import {AuthContext} from '../AuthProvider'

export default function Login() {
  let nav = useNavigate("");

  const [logMail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const {setLogin } = useContext(AuthContext);

  let logData = JSON.parse(localStorage.getItem("todos"));


  let submit = (e) => {

    e.preventDefault();
    console.log(logData.email);
   
    if (logMail === logData.email && logPassword === logData.password) {
      setLogin(true);
      nav("/home");
    } else {
      alert("Invelid Credentials");
    }

  };

  return (
    <div className="container">
      <div className="box">
        <form  onSubmit={submit}>
          <h1>welcome</h1>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            id="email"
            className="email"
            value={logMail} 
            onChange={(e) => 
            setLogEmail(e.target.value) }
            required={true}
          />

          <input
            type="password"
            name="email"
            placeholder="Password"
            id="inputPassword4"
            className="email"
            value={logPassword}
             onChange={(e) => setLogPassword(e.target.value)}
             required={true}
          />

         
          <button type="submit" className="btn btn-login" >Login</button>
          </form>

          <NavLink to="/signup" replace={true} > <button className="btn btn-signup" >sign Up</button></NavLink>
          <div className="forget-pass">
           <a href="" style={{ color: "#f1c40f" }}>Forgot password</a>
            
          </div>
        
      </div>
    </div>
  );
}
