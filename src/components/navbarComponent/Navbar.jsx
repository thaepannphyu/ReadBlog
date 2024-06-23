import NavBarSearch from "../applicationComponent/homeComponenet/NavBarSearch";
import useHandleLogout from "../../hooks/useHandleLogout";
import useHandleLogin from "../../hooks/useHandleLogin";
import DashboardLink from "./Elements/DashboardLink";
import BrandLink from "./Elements/BrandLink";
import WriteLink from "./Elements/WriteLink";
import LoginLogoutLink from "./Elements/LoginLogoutLink";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBarHumbarger from "./SideBarHumbarger";

const Navbar = () => {
  const { handleLogout } = useHandleLogout();
  const location = useLocation();
  const { isLoggedIn, authLoading, auth, handleLogin } = useHandleLogin();

  
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  if (authLoading == false) {
    return (
      <header className="text-gray-600 justify-end flex container mx-auto px-6  sticky top-0 bg-gray-50   body-font ">
        <div className="container hidden  justify-between  mx-auto lg:flex flex-wrap p-5  md:flex-row items-center">
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




        <button
          type="button"
          className="py-3 lg:hidden  px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          data-hs-overlay="#appNavBar">
          Humbager
        </button>
      </header>
    );
  }
};

export default Navbar;
