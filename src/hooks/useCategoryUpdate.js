import { useEffect, useState } from "react";
import { useCreateCategoryMutation, useGetSingleCategoryQuery } from "../App/Category/CategoryApi";
import { useNavigate } from "react-router-dom";


const useCategoryUpdate=( categoryId)=>{
    const {data:category,isLoading}=useGetSingleCategoryQuery( categoryId);

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");

    const [error,setError]=useState();

    
    const [updateCategory]=useCreateCategoryMutation();

    const nav=useNavigate()

    useEffect(()=>{
      if(isLoading==false){
        setName(category.data?.name);
        setDescription(category.data?.description);
      }
     
    },[setName,setDescription,category?.data?.name,category?.data?.description,isLoading])


    const handleUpdateCategory = async (e) => {
        e.preventDefault();
    
        const submitData = {
          name:name,
          description:description
        };
       
        try{
        await  updateCategory(JSON.stringify(submitData)).unwrap();
          nav("/dashboard/categories");
        }catch(err){
          setError(err);
        }
      };



      return {

        handleUpdateCategory,
        setName,
        name,
        error,
        setDescription

      }

}

export default useCategoryUpdate;