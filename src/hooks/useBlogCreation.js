import { useState } from "react";
import { useCreateBlogsMutation } from "../App/Blog/BlogApi";
import { useNavigate } from "react-router-dom";

const useBlogCreation = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [createBlog] = useCreateBlogsMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = { title, body: content };
    const data = await createBlog(submitData);
    if (data?.data.success === true) {
      navigate("/");
    }
  };

  return {
    content,
    setContent,
    title,
    setTitle,
    handleSubmit
  };
};

export default useBlogCreation;
