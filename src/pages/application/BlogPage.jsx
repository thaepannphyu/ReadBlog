import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../components/navbarComponent/Navbar"
import { useEffect } from "react";


const BlogLayout = () => {

  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  
  return (
    <section>
        <Navbar />
        <div className=" container mx-auto px-6">
        <Outlet/>
        </div>
    </section>
  )
}

export default BlogLayout
