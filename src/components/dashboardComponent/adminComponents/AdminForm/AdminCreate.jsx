import Radio from "../../../formComponents/Radio"
import InputLabel from "../../../formComponents/InputLabel"
import SubmitBtn from "../../../formComponents/SubmitBtn"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAdminUserMutation } from "../../../../App/User/UserApi";



const AdminCreate = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAdmin,setIsAdmin] = useState("");

  const [createAdminUser] = useCreateAdminUserMutation();
  const nav=useNavigate()

  const handleRegister =async (e) => {
    e.preventDefault();
    const submitData={
      "name":userName,
      email,
      password,
      is_admin:isAdmin=="yes"?true:false
    }
 
 const data=await createAdminUser( submitData);


if(!data?.error){
 nav("/dashboard/admin");
}

  };

  return (
    <>
    <form onSubmit={handleRegister}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              {/* Name */}
             <InputLabel 
              value={userName}
              setValue={setUserName}
             labelText="Full Name" 
             placeholder="maria" 
             type="text"/>


              {/*Email Form */}
             <InputLabel 
              value={email}
              setValue={setEmail}
             labelText="Email" 
             placeholder="maria@gmail.com" 
             type="email"/>

              {/*Password*/}
              <InputLabel 
              value={password}
              setValue={setPassword}
              labelText="Password" 
              placeholder="xxx xxx xxx" 
              type="password"/>

              {/* Admin  */}
              <Radio 
              labelText="Is Admin" 
              radioOption={["yes", "no"]}
              setValue={setIsAdmin} 
              />
            </div>
            {/* Btn */}
             <SubmitBtn btn="Create"/>

    </form>
    </>
  
  )
}

export default AdminCreate
