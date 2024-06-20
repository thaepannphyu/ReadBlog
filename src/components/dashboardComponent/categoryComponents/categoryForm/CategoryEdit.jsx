import { useEffect, useState } from "react";
import InputLabel from "../../../formComponents/InputLabel";
import Label from "../../../formComponents/Label";
import SubmitBtn from "../../../formComponents/SubmitBtn";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";
import { useCreateCategoryMutation, useGetSingleCategoryQuery } from "../../../../App/Category/CategoryApi";
import { useNavigate, useParams } from "react-router-dom";

const CategoryEdit = () => {
    const { categoryId } = useParams();
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

      

  return (
    <div>
      <form onSubmit={(e) => handleUpdateCategory(e)}>
        {/*name*/}
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
          <InputLabel
            setValue={setName}
            value={name}
            labelText="Name"
            type="text"
          />
        </div>
        {error?<div className="  text-red-700 ">
            {error.data?.errors?.name}
        </div>:<></>}

        {/*Description*/}
        <div className=" flex flex-col gap-10">
          <Label label={"Description"} />
          <ContentEditor setContent={setDescription} />
        </div>

        {/* Btn */}
        <SubmitBtn btn="Update" />
      </form>
    </div>
  );
};

export default CategoryEdit;