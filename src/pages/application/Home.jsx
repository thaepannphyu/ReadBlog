import Navbar from "../../components/navbarComponent/Navbar";
import AppSidebar from "../../components/navbarComponent/AppSidebar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";




const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit(["offcanvas"]);
  }, [location.pathname]);
    
  return (
    <>
      <Navbar />

    <AppSidebar/>

      {/* <HomeDisplayData /> */}
      

       
    </>
  );
};

export default Home;
