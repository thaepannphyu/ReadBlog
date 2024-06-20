import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleBlogQuery,
  useUpdateBlogsMutation,
} from "../../../../App/Blog/BlogApi";
import InputLabel from "../../../formComponents/InputLabel";

import SubmitBtn from "../../../formComponents/SubmitBtn";
import { useEffect, useState } from "react";
import Label from "../../../formComponents/Label";
import ContentEditor from "../../../reusableComponent/tinyMceEditor/ContentEditor";

const BlogEdit = () => {
  //fetch single data
  const { blogId } = useParams();

  const { data: singleblog, isLoading } = useGetSingleBlogQuery(blogId);

  //track value changes from input to update
  // const [intro,setIntro]=useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    // setIntro(singleblog?.data?.intro);
    setTitle(singleblog?.data?.title);
    setBody(singleblog?.data?.body);
  }, [
    singleblog?.data?.intro,
    singleblog?.data?.title,
    singleblog?.data?.body,
  ]);

  const [updateBlog] = useUpdateBlogsMutation();

  const nav = useNavigate();
  const handleUpdate = async (e) => {
    e.preventDefault();
    const submitData = {
      id: blogId,
      title: title,
      body: body,
    };

    await updateBlog(submitData);
    nav("/blog");
  };

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
