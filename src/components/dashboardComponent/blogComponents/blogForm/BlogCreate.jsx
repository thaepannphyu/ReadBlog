
import InputLabel from "../../../formComponents/InputLabel";
import SubmitBtn from "../../../formComponents/SubmitBtn";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";
import Label from "../../../formComponents/Label";
import useBlogCreation from "../../../../hooks/useBlogCreation";

const BlogCreate = () => {
  const { content, setContent, title, setTitle, handleSubmit } = useBlogCreation();
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>

       {/*Title*/}
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
          <InputLabel
            setValue={setTitle}
            value={title}
            labelText="Title"
            type="text"
          />
        </div>


        {/*Body*/}
        <div className=" flex flex-col gap-10">
          <Label label={"Body"}/>
          <ContentEditor content={content} setContent={setContent} />
        </div>


        {/* Btn */}
        <SubmitBtn btn="Create" />
      </form>
    </>
  );
};

export default BlogCreate;
