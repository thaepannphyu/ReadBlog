import { useSelector } from "react-redux";
import { useAuthUserQuery } from "../../App/Auth/Auth";
import NavBarSearch from "../applicationComponent/homeComponenet/NavBarSearch";
import { useEffect, useState } from "react";

const Navbar = () => {

  
  const [loginState,setLoginState]=useState(false);



  const {data:auth,isLoading,error}= useAuthUserQuery();

  const dashboardFun=()=>{
    if(auth?.isAdmin){
    return ( <a className="mr-5 hover:text-gray-900">Dashboard</a>)}
  }

  const loginRegisterFun=()=>{
    
    if(error){
      return (  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Register
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>)
    }

   return (  
   <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    {loginState==true?"logout":"login"}
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="w-4 h-4 ml-1"
      viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </button>)
    
  }


  return (
    <header className="text-gray-600 container mx-auto px-6  sticky top-0 bg-gray-50   body-font ">
      <div className="container justify-between  mx-auto flex flex-wrap p-5  md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <NavBarSearch/>
        <nav className="flex flex-wrap items-center text-base justify-center gap-7">
          <a className="mr-5 hover:text-gray-900">Write</a>
          {dashboardFun()}
         { loginRegisterFun()}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
