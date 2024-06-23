import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../App/Auth/Auth";
import { setLoggedIn } from "../App/Auth/AuthSlice";
import { useEffect, useState } from "react";

const useHandleLogout=()=>{

    const [logout] = useLogoutMutation();
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const [logoutError, setLogoutErr] = useState("");

    const handleLogout = async () => {
        if (token) {
          try {
            await logout().unwrap(); // Ensure the logout mutation is called correctly
            dispatch(setLoggedIn(false));
          } catch (error) {
            setLogoutErr(error);
          }
        }
      };

      useEffect(() => {
        if (logoutError) {
          dispatch(setLoggedIn(false));
        }
      }, [logoutError, dispatch]);
    
      return {
        handleLogout
      }

}

export default useHandleLogout;