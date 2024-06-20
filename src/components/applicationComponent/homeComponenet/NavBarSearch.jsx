
import {  useEffect, useState } from "react"
import Input from "../../formComponents/Input"
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../../App/Blog/BlogQueryFilterSlice";

const NavBarSearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setQuery(value));
  };

  return (
    <form onSubmit={handleClick}  className="md:ml-auto md:mr-auto w-[40%]">
     
      <Input value={value} handleInputChange={handleInputChange} className={" px-4   "} placeholder={"Search"}/>
    </form >
  )
}

export default NavBarSearch
