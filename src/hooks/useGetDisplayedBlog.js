import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFilterBlogsQuery,
  useGetBlogsByPageQuery,
} from "../App/Blog/BlogApi";
import { setLoading } from "../App/LoadingSlice";

const useGetDisplayedBlog = () => {
  const [displayedData, setDisplayedData] = useState({});

  //default data
  const { data: blogs,isLoading} = useGetBlogsByPageQuery(6);

  //searched data
  const { searchedBlogs, searchLoading, setFilterCategory } = useSearchedBlog();
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (searchedBlogs?.data) {
      setDisplayedData(searchedBlogs);
    } else {
      setDisplayedData(blogs);
    }

    dispatch(setLoading(searchLoading));
  }, [searchedBlogs, searchLoading, dispatch, blogs]);


  return {
    displayedData,
    setFilterCategory,
    isLoading
  };
};

export default useGetDisplayedBlog;




//only use in useGetDisplayedBlog 
const useSearchedBlog = () => {
  const [filterCategory, setFilterCategory] = useState("");

  const query = useSelector((state) => state.blogQueryFilter.query);

  const { data: searchedBlogs, isLoading: searchLoading } = useFilterBlogsQuery(
    { search: query, category: filterCategory }
  );
  
  return {
    searchedBlogs,
    searchLoading,
    setFilterCategory,
  };
};
