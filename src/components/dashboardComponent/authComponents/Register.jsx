import { useState } from "react";
import InputLabel from "../../formComponents/InputLabel";
import Title from "../../reusableComponent/Title";
import SubmitBtn from "../../formComponents/SubmitBtn";
import { useLoginMutation, useRegisterMutation } from "../../../App/Auth/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../App/Auth/AuthSlice";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser] = useRegisterMutation();
  const [login] = useLoginMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const registerSubmitData = {
      name: userName,
      email,
      password,
    };

    const loginSubmitData = {
      email,
      password,
    };

    const registerData = await registerUser(registerSubmitData);

    
    if (registerData.success == true) {
      const data = await login(loginSubmitData);
      if (data?.success) setLoginData();
    }

    if (loginData?.success == true) {
      dispatch(setLoggedIn(true));
      nav("/");
    }
  };

  
  return (
    <>
      <Title title="Register" />
      <form onSubmit={handleRegister} className=" flex flex-col gap-10">
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
          <InputLabel
            name="name"
            value={userName}
            setValue={setUserName}
            inputclass="bg-gray-100"
            labelText="User name"
            type="text"
          />
        </div>
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
        </div>
        <SubmitBtn btn="Register" />
      </form>
      <p className="mt-6 text-center text-gray-600">
        Already have an account!!{" "}
        <a href="/user/login" className="text-blue-500">
          Login
        </a>
      </p>
    </>
  );
};

export default Register;
