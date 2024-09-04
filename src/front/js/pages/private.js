import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const Private = () => {  

  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();

  useEffect (() => {
      const userToken = localStorage.getItem("access_token");
      if(!userToken){
          navigate("/login");
          return;
      }
      setUserToken(userToken)
      
  })

  const logout = async () => {
    localStorage.removeItem("access_token");
    window.location.reload(true);
  };

  return (
    <>
    <div className="text-center mt-5">
      {userToken && <p>User loged in!</p>}
      <button onClick={logout}>Logout</button>
    </div>
    </>
    
  )
}