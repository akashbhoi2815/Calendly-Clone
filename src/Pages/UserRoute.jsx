import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const UserRoute = ({ children }) => {
  // const location = useLocation();
  const currentUser = useSelector((store) => store.authReducer.currentUser);
  const navigate = useNavigate()
  useEffect(() => {
    if(!currentUser){
      navigate("/calendly_homepage")
    }
  }, [navigate,currentUser])
  

  
  return children
};

export default UserRoute;

