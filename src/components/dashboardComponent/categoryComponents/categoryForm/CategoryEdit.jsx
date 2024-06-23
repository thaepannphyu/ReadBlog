import InputLabel from "../../../formComponents/InputLabel";
import Label from "../../../formComponents/Label";
import SubmitBtn from "../../../formComponents/SubmitBtn";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";
import { useParams } from "react-router-dom";
import useCategoryUpdate from "../../../../hooks/useCategoryUpdate";

const CategoryEdit = () => {
  const { categoryId } = useParams();
  const { handleUpdateCategory, setName, name, error, setDescription } =
    useCategoryUpdate(categoryId);

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
        {error ? (
          <div className="  text-red-700 ">{error.data?.errors?.name}</div>
        ) : (
          <></>
        )}

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
