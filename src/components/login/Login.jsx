import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({setLoginUser}) {

  // const history = useHistory()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const userHandeler = (e) =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name] : value
    })
  }

  const login = () =>{
    axios.post("http://localhost:5000/login", user)
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    })
  }

  return (
    <>
        <div className="login">
          <h1>Login</h1>
          <input type="text" name="email" value={user.email} onChange={userHandeler} placeholder="Email"/>
          <input type="password" name="password" value={user.password} onChange={userHandeler} placeholder="Password"/>
          <div className="button" onClick={login}>Login</div>
          <div>or</div>
          <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    </>
  )
}
