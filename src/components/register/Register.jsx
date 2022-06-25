import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const userHandeler = (e) =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name] : value
    })
  }

  const Registration = () =>{

    const {name, email, password, confirmPassword} = user
    if (name && email && password && password === confirmPassword) {
      axios.post("http://localhost:5000/register", user)
      .then(res => {
        alert(res.data.message)
        navigate("/login")
    })
      
    }else{
      alert("invalid input")
    }
  }
  return (
    <>
        <div className="register">
          <h1>Register</h1>
          <input type="text" name="name" value={user.name} onChange={userHandeler} placeholder="Name"/>
          <input type="text" name="email" value={user.email} onChange={userHandeler} placeholder="Email"/>
          <input type="password" name="password" value={user.password} onChange={userHandeler} placeholder="Password"/>
          <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={userHandeler} placeholder="Confirm password"/>
          <div className="button" onClick={Registration}>Register</div>
          <div>or</div>
          <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    </>
  )
}
