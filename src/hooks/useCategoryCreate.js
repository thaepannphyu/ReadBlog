import { useState } from "react";
import { useCreateCategoryMutation } from "../App/Category/CategoryApi";
import { useNavigate } from "react-router-dom";

const useCategoryCreate=()=>{

    const [name,setName]=useState();
    const [error,setError]=useState();

    const [description,setDescription]=useState();
    const [createCategory]=useCreateCategoryMutation();
    const nav=useNavigate()
    const handleCreateCategory = async (e) => {
        e.preventDefault();
    
        const submitData = {
          name:name,
          description:description
        };
       
        try{
        await  createCategory(JSON.stringify(submitData)).unwrap();
          nav("/dashboard/categories");
        }catch(err){
          setError(err);
          
        }
      

      };


    return {
        name,
        setName,
        setDescription,
        handleCreateCategory,
        error
    }
}

export default useCategoryCreate;