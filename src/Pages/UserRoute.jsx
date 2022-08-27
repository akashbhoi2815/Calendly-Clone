import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

const UserRoute = ({ children, ...rest }) => {
  const currentUser = useSelector((store) => store.authReducer.currentUser);
  // return currentUser ? <Route {...rest} /> : <LoadingToRedirect/>
  const navigate = useNavigate()
  useEffect(() => {
    if(!currentUser){
      navigate("/")
    }
  }, [navigate,currentUser])
  
  
  return children
};

export default UserRoute;

