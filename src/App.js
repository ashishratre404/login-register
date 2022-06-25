import './App.css';
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [loginUser, setLoginUser] = useState({})

  return (
    <>
      <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ loginUser && loginUser._id ? <Home setLoginUser={setLoginUser} />:<Login  setLoginUser={setLoginUser}/>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>        
      </div>
    </>
  );
}

export default App;
