import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../App/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useAuthUserQuery } from "../App/Auth/Auth";


const useHandleLogin=()=>{

    const { data: auth, isLoading:authLoading } = useAuthUserQuery();
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const nav = useNavigate();

    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

    const handleLogin = () => {
        if (token && auth?.data) {
          dispatch(setLoggedIn(true));
        }
    
        nav("../user/login");
      };


      return {
        isLoggedIn ,
        authLoading,
        auth,
        handleLogin
      }
    
}

export default useHandleLogin;