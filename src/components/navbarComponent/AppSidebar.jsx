import DashboardLink from "./Elements/DashboardLink";
import BrandLink from "./Elements/BrandLink";
import WriteLink from "./Elements/WriteLink";
import LoginLogoutLink from "./Elements/LoginLogoutLink";
import useHandleLogout from "../../hooks/useHandleLogout";
import useHandleLogin from "../../hooks/useHandleLogin";


const AppSidebar = ({sidebar}) => {
    const { handleLogout } = useHandleLogout();
  
  
  const { isLoggedIn, auth, handleLogin } = useHandleLogin();
 
 
  
  
  return (
  
  <div
   ref={sidebar}
    id="appNavBar"
    className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-transform duration-300 transform h-full max-w-xs w-full z-[80] bg-white shadow-lg border-r border-gray-200"
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

  
  );
};

export default AppSidebar;
