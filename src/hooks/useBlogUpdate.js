import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import {
  useGetSingleBlogQuery,
  useUpdateBlogsMutation,
} from "../App/Blog/BlogApi";

const useBlogUpdate = (blogId) => {
  
  const { data: singleBlog, isLoading } = useGetSingleBlogQuery(blogId);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [updatedData,setUpdatedData]= useState({});

  useEffect(() => {
    if (singleBlog?.data) {
      setTitle(singleBlog.data.title);
      setContent(singleBlog.data.body);
    }
  }, [singleBlog]);

  const [updateBlog] = useUpdateBlogsMutation();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const submitData = {
      id: blogId,
      title,
      body:content,
    };


    try{
      const data=await updateBlog(submitData);
      console.log(data   );
      setUpdatedData(data);
      navigate("/");
    }catch(err){
      console.log(  err );
    }
    
   
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    handleUpdate,
    isLoading,
    updatedData
  };
};

export default useBlogUpdate;
