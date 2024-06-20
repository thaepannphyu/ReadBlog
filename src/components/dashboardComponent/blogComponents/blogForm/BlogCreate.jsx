import { useState } from "react";
import InputLabel from "../../../formComponents/InputLabel";
import SubmitBtn from "../../../formComponents/SubmitBtn";
import { useNavigate } from "react-router-dom";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";
import Label from "../../../formComponents/Label";
import { useCreateBlogsMutation } from "../../../../App/Blog/BlogApi";

const BlogCreate = () => {
  //track value changes from input to update

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [createBlog] = useCreateBlogsMutation();
  const nav = useNavigate();

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    const submitData = {
      title,
      body,
    };

    await createBlog(submitData);
    nav("/dashboard/blog");
  };

  return (
    <>
      <form onSubmit={(e) => handleCreateBlog(e)}>

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
          <ContentEditor setContent={setBody} />
        </div>


        {/* Btn */}
        <SubmitBtn btn="Create" />
      </form>
    </>
  );
};

export default BlogCreate;
