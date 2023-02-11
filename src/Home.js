import React from 'react'
import {Menu} from "antd"
import {Route, Routes, useNavigate } from 'react-router-dom'

import {DashboardOutlined, HomeOutlined, LogoutOutlined, PoweroffOutlined} from "@ant-design/icons"

function Home(){
    /*const logout=()=>{
        localStorage.removeItem("signup")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }*/
    const navigate = useNavigate();
    
    return(
        <div style={{display:"flex",flexDirection:"row"}}>
            <Menu 
            onClick={({key})=>{
                if(key==="logout"){
                    localStorage.removeItem("signup")
                    window.location.reload()
                }
                else if(key==="delete"){
                    localStorage.clear()
                    window.location.reload()
                }
                else{
                    navigate(key)
                }

            }}
            items={[
                {label:"Home" ,key:"/", icon: <HomeOutlined/>},
                {label:"Dashboard" ,key:"/dashboard",icon: <DashboardOutlined/>},
                {label:"Logout",key:"logout", icon:<LogoutOutlined/>},
                {label:"Delete",key:"delete", icon:<PoweroffOutlined/>,danger:true},
                ]}>
            
            
            </Menu>
            <Content/>
        </div>
    );
}
function Content() {
    return <div>
        <Routes>
            <Route path='/' element={<div>Home</div>}></Route>
            <Route path='/dashBoard' element={<div>DashBoard</div>}></Route>
        </Routes>
    </div>
}

export default Home