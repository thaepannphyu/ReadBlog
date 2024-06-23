import NavBarSearch from "../applicationComponent/homeComponenet/NavBarSearch";
import useHandleLogout from "../../hooks/useHandleLogout";
import useHandleLogin from "../../hooks/useHandleLogin";
import DashboardLink from "./Elements/DashboardLink";
import BrandLink from "./Elements/BrandLink";
import WriteLink from "./Elements/WriteLink";
import LoginLogoutLink from "./Elements/LoginLogoutLink";
import {useRef, useState } from "react";

import HSOverlay from "@preline/overlay";


const Navbar = () => {

  const { handleLogout } = useHandleLogout();
  const { isLoggedIn, authLoading, auth, handleLogin } = useHandleLogin();

  const [openSideBar, setOpenSideBar] = useState(false);

  const sidebar = useRef(null);
  
  const handleCLick = () => {
    setOpenSideBar(true);
    console.log(sidebar.current.id)
    const modal=new HSOverlay(sidebar.current)

    if(openSideBar){
      modal.open()
    }

  };

  if (authLoading === false) {
    return (
      <header className="text-gray-600 justify-end flex container mx-auto px-6 sticky top-0 bg-gray-50 body-font">
        <div className="container hidden justify-between mx-auto lg:flex flex-wrap p-5 md:flex-row items-center">
          <BrandLink />
          <NavBarSearch />
          <nav className="flex flex-wrap items-center text-base justify-center gap-7">
            <WriteLink />
            <DashboardLink isAdmin={auth?.data.isAdmin} />
            <LoginLogoutLink
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
              handleLogin={handleLogin}
            />
          </nav>
        </div>

        <div className="flex lg:hidden px-2 md:px-10  justify-end p-2">
          <button
            onClick={handleCLick}
            type="button"
            className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10"
            data-hs-overlay="#appNavBar"
            aria-controls="sidebar-mini"
            aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 size-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>

  <div
   ref={sidebar}
    id="appNavBar"
    className="hs-overlay  hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-transform duration-300 transform h-full max-w-xs w-full z-[80] bg-white shadow-lg border-r border-gray-200"
    tabIndex="-1">
    <div className="relative z-10 h-full flex flex-col">
      <div className="w-full p-4 bg-gray-100 border-b border-gray-200">
        <BrandLink />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="w-full">
          <WriteLink />
        </div>
        <div className="w-full">
          <DashboardLink isAdmin={auth?.data.isAdmin} />
        </div>
        <div className="w-full">
          <LoginLogoutLink
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            handleLogin={handleLogin}
          />
        </div>
      </div>
    </div>
  </div>

  
      </header>
    );
  }

  return null; // Optionally handle loading state or other scenarios
};

export default Navbar;
