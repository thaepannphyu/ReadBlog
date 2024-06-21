
import "preline/preline";
import {Outlet, useLocation} from 'react-router-dom'
import "preline/preline";

import "preline/preline";
import { useEffect } from "react";




function App() {


  
  const location = useLocation();


  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  

  return (
    
    <main className="container mx-auto">
      <Outlet />
    </main>

  );
}

export default App;
