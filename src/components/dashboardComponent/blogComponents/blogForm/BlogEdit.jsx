import { useParams } from "react-router-dom";
import InputLabel from "../../../formComponents/InputLabel";
import SubmitBtn from "../../../formComponents/SubmitBtn";
import Label from "../../../formComponents/Label";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";
import useBlogUpdate from "../../../../hooks/useBlogUpdate";

const BlogEdit = () => {
  //fetch single data
  const { blogId } = useParams();
  const { title, setTitle, body, setBody, handleUpdate, isLoading } = useBlogUpdate(blogId);
 

  if (isLoading == "false") {
    return <>loading</>;
  }

  return (
    <>
      <form onSubmit={(e) => handleUpdate(e)}>
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
          {/*Title*/}
          <InputLabel
            setValue={setTitle}
            value={title}
            labelText="Title"
            type="text"
          />
        </div>

        {/*Body*/}
        <div className=" flex flex-col gap-10">
          <Label label={"Body"} />
          <ContentEditor content={body} setContent={setBody} />
        </div>
        {/* Btn */}
        <SubmitBtn btn="Edit" />
      </form>
    </>
  );
};

export default BlogEdit;
