
import InputLabel from "../../../formComponents/InputLabel";
import Label from "../../../formComponents/Label";
import SubmitBtn from "../../../formComponents/SubmitBtn";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";
import useCategoryCreate from "../../../../hooks/useCategoryCreate";

const CategoryCreate = () => {
    
  const {name,
    setName,error,
    setDescription,
    handleCreateCategory}=useCategoryCreate();
     
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
