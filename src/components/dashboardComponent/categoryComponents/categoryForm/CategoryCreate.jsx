import { useState } from "react";
import InputLabel from "../../../formComponents/InputLabel";
import Label from "../../../formComponents/Label";
import SubmitBtn from "../../../formComponents/SubmitBtn";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";
import { useCreateCategoryMutation } from "../../../../App/Category/CategoryApi";
import { useNavigate } from "react-router-dom";

const CategoryCreate = () => {
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

      console.log(error)
  return (
    <div>
      <form onSubmit={(e) => handleCreateCategory(e)}>
        {/*name*/}
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
          <InputLabel
            setValue={setName}
            value={name}
            labelText="Name"
            type="text"
          />
        </div>
        {error?<div>
          <span>
            {error.data?.errors?.name}
          </span>
        </div>:<></>}

        {/*Description*/}
        <div className=" flex flex-col gap-10">
          <Label label={"Description"} />
          <ContentEditor setContent={setDescription} />
        </div>

        {/* Btn */}
        <SubmitBtn btn="Create" />
      </form>
    </div>
  );
};

export default CategoryCreate;
