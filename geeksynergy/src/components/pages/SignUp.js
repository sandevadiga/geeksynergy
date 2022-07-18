
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import "./signup.css";



export default function Singup() {

    let location = useNavigate("");
    let[data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [profession, setProfession] = useState('');
    const data1 = {
        name : name,
        email: email,
        number: number,
        password: password,
        profession: profession
    }
    let submit = (e) => {
        e.preventDefault();
        setData([...data,data1]);
        localStorage.setItem("todos", JSON.stringify(data1))
        if(name && email && password && number && profession){
            let myData = JSON.parse(localStorage.getItem("todos"));
            if(myData){
                location("../login")
            }
        }else{
            alert("Fill All The Input Fields")
        }
    }

  return (
    <div className="container-signup">
      <div className="box">
        <form>
          <h1>Sign Up</h1>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="email"
             value={name} onChange={(e) => setName(e.target.value)} 
             id="name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email} onChange={(e) => { setEmail(e.target.value) }} 
            id="email"
            className="email"
          />

          <input
            type="email"
            name="email"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
             id="inputPassword4"
            className="email"
          />
          <input
            type="tel"
            className="phone"
            onChange={(e) => setNumber(e.target.value)} 
             id="number"
            placeholder="Mobile Number"
          />

          <div className="form-profession">
            <label htmlFor="inputState">Profession</label>
            <select
              id="inputState"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="form-control" style={{backgroundColor:"#AAAAAA",width :"170px",padding:"5px" ,marginTop:"10px"}}
            >
              <option selected>Choose...</option>
              <option>FrontEnd Developer</option>
              <option>Backend Developer</option>
              <option>FullStack Developer</option>
            </select>
          </div>

          <button className="btn btn-signup" onClick={submit}>Register</button>
        </form>
      </div>
    </div>
  );
}
