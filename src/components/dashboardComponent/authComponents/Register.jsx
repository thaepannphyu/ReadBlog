import { useState } from "react";
import InputLabel from "../../formComponents/InputLabel";
import Title from "../../reusableComponent/Title";
import SubmitBtn from "../../formComponents/SubmitBtn";
import { useRegisterMutation } from "../../../App/Auth/Auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser] = useRegisterMutation();
  const nav=useNavigate()

  const handleRegister =async (e) => {
    e.preventDefault();
    const submitData={
      "name":userName,
      email,
      password
    }
    
 await  registerUser(submitData);
 
 nav("/user/login");
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
