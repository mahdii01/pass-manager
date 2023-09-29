import React, { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Leftside from "../../components/leftside/Leftside";
import Rightside from "../../components/rightside/Rightside";
import './MainPage.css'
import '../../responsive.css'
export default function MainPage() {
  const [authenticated,setAuthenticated] = useState(null)
  const navigate = useNavigate();
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("Authorization");
    if (loggedInUser) {
      setAuthenticated(loggedInUser)
    }
  },[])
  
  return (
    <>
    authenticated && (
        <div className="pass">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <Leftside />
              </div>
              <div className="col-md-7 col-sm-12">
                <Rightside />
              </div>
            </div>
            <button className="logout">LogOut</button>
          </div>
        </div>
     )
    
     {/* {authenticated ? (
        <div className="pass">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-12">
          <Leftside />
        </div>
        <div className="col-md-7 col-sm-12">
          <Rightside />
        </div>
      </div>
      <button className="logout">LogOut</button>
    </div>
  </div>
     ): 
     navigate("/")
     }  */}

    </>
  );

}
