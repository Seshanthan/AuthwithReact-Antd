import {Button} from "antd"
//import FormItem from "antd/es/form/FormItem";
import { useEffect, useRef, useState } from "react";
import './App.css';
import Home from "./Home";


function App() {
  const deleteAccount=()=>{ 
    localStorage.clear()
    window.location.reload()
}

  const name = useRef()
  const email = useRef()
  const password = useRef()
  const [showHome,setshowHome] = useState(false)
  const [show,setshow] = useState(false)
  const localSignup = localStorage.getItem("signup")
  const localEmail = localStorage.getItem("email")
  const localPassword = localStorage.getItem("password")
  const localName = localStorage.getItem("name")

  useEffect(()=>{
    if(localSignup){
      setshowHome(true)
    }
    if(localEmail){
      setshow(true)
    }
  },[localSignup, localEmail])
  const handleClick=()=>{
    if(name.current.value&&email.current.value&&password.current.value){
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signup",email.current.value)
      alert("Account created successfully")
      window.location.reload()
    }
  }
  const handleLogin=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
      localStorage.setItem("signup",email.current.value)
      window.location.reload()
    }
    else{
      alert("Please Enter Valid Credentials")
    }
  }
  
  return (
    <div>
    {showHome?<Home/>:
    (show?
        <div className="container">
                <h1>Hello {localName}</h1>
                <div className="input_space">
                    <input placeholder="Email" type='text' ref={email} />
                </div>
                <div className="input_space">
                    <input placeholder="Password" type='password' ref={password} />
                </div>
                <Button type="primary" htmlType="submit" onClick={handleLogin}>Sign In</Button>
                <Button type="link" onClick={deleteAccount}>Register</Button>

                
        </div>
        :
        <div className="container">
                <div className="input_space">
                    <input placeholder="Name" type='text' ref={name} />
                </div>
                <div className="input_space">
                    <input placeholder="Email" type='text' ref={email} />
                </div>
                <div className="input_space">
                    <input placeholder="Password" type='password' ref={password} />
                </div>
                <Button type="primary" htmlType="submit" onClick={handleClick} >Sign Up</Button>
                
                
                
        </div>)
    }
</div>
  );
}

export default App;
