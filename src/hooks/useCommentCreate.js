import { useState } from "react";
import { useCreateCommentMutation, useGetCommentsQuery } from "../App/Comment/CommentApi";


const useCommentCreate=(blogId)=>{

    const { data: allComments } = useGetCommentsQuery(blogId);
    const [responseData,setResponseData]=useState({})
    const [textareaValue, setTextareaValue] = useState("");
    const [comment]=useCreateCommentMutation();

    const handleChange = (event) => {
        setTextareaValue(event.target.value);
      };

      const handleComment = async () => {

        const submitData= {blogId,body:textareaValue};
        const data=await comment(submitData);
        setTextareaValue("");
        setResponseData(data);
        if(responseData.error){
         console.log("eror")
        }
      };

    return {
        allComments,
        textareaValue,
        setTextareaValue,
        handleChange,
        handleComment
    }
}

export default useCommentCreate