
import { useSelector } from "react-redux";

// import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { useDashboardQuery } from "./App/Auth/Auth";
import { useEffect } from "react";


const ProtectedRoutes=({children})=>{
  
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
    const isAdmin = useSelector((state) => state.authSlice.isAdmin);
     
    const nav=useNavigate();
    
    const {data,isLoading,error}=useDashboardQuery();
   
   
    if(error){
      return  nav("/");
    }

    if(isLoading==false){
      if (!isAdmin&&data?.success==false) {
         return nav("/");
      }else{
        return children;
      }
  }  

};


export default ProtectedRoutes;
