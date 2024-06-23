
import Sidebar from "../../components/reusableComponent/Sidebar";
import "preline/preline";
import {Outlet, useLocation} from 'react-router-dom'
import "preline/preline";

import "preline/preline";

import SideBarHumbarger from "../../components/navbarComponent/SideBarHumbarger";
import { useEffect } from "react";




function DashboardLayout() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  
  return (
    
    <main className="container px-6 md:px-3  mx-auto">
      <SideBarHumbarger />
      
      <Sidebar/>

      <Outlet />
    </main>

  );
}

export default DashboardLayout;