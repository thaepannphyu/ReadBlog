import { useEffect, useState } from "react"
import InputLabel from "../../formComponents/InputLabel"
import Title from "../../reusableComponent/Title";
import SubmitBtn from "../../formComponents/SubmitBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../../../App/Auth/Auth";




const Login = () => {

  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("");
  const isLoginSuccess=useSelector(state=>state.authSlice.isLoggedIn);
  const errMessage=useSelector(state=>state.authSlice.error);
  const nav=useNavigate()
  const [login]=useLoginMutation();


  const loginHandler=async (e)=>{
    e.preventDefault();
    const submitData={
      email,
      password
    }
    await   login(submitData);
  }

  useEffect(() => {
    if (isLoginSuccess) {
      nav("/");
    }
  }, [isLoginSuccess,nav]);

  return (<>
  <Title title="Login" />
    <form onSubmit={loginHandler} className=" flex flex-col gap-10">
     
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
          <InputLabel
            name="email"
            value={email}
            inputclass="bg-gray-100"
            setValue={setEmail}
            labelText="Email"
            type="text"
          />
        </div>
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
          <InputLabel
            name="password"
            value={password}
            setValue={setPassword}
            inputclass="bg-gray-100"
            labelText="Password"
            type="password"
          />
          <span className={`${isLoginSuccess==true?'hidden':''}`}>{errMessage}</span>
        </div>
       <SubmitBtn btn="Login" />
    </form>
    <p className="mt-6 text-center text-gray-600">Don't have an account? <a href="../user/register" className="text-blue-500">Register</a></p></>
    
  )
}

export default Login
