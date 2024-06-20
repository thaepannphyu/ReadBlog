import PropTypes from "prop-types";
import { useGetCommentCountQuery } from "../../../App/Comment/CommentApi";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";


const CommentCount = ({ blogId }) => {
  const [count, setCount] = useState(0);
  const { data: commentCount, isLoading } = useGetCommentCountQuery(blogId);
  
  //prevent infinite rerenders
  useEffect(() => {
    window.HSStaticMethods.autoInit();
    if (isLoading == false) {
      setCount(commentCount);
    }
  }, [commentCount, isLoading]);
  
  

  return (
    <div>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        data-hs-overlay={`#hs-basic-modal${blogId}`}>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          {count}
        </span>
      </button>

    <CommentCreate blogId={blogId}/>

    </div>
  );
};

export default CommentCount;

CommentCount.propTypes = {
  blogId: PropTypes.number.isRequired,
};
