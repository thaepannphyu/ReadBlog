import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useFilterBlogsQuery, useGetBlogsByPageQuery } from "../../../App/Blog/BlogApi";
import DisplayedBlogs from "../Blogs/DisplayedBlogs";
import { useDispatch } from "react-redux";
import {setLoading} from "../../../App/LoadingSlice.js"
import CategoryBadges from "./CategoryBadges.jsx";

const HomeDisplayData = () => {

  const [displayedData,setDisplayedData]=useState({})
  const [filterCategory,setFilterCategory]=useState("");

  const query = useSelector((state) => state.blogQueryFilter.query);
  const { data: searchedBlogs,isLoading:searchLoading} =useFilterBlogsQuery({search:query,category:filterCategory});
  const {data:blogs,isLoading}= useGetBlogsByPageQuery(6);

  
  

 const dispatch=useDispatch();

 useEffect(() => {
  if (searchedBlogs?.data ) {
    setDisplayedData(searchedBlogs);
  } else {
    setDisplayedData(blogs);
  }
  dispatch(setLoading(searchLoading));
  
}, [searchedBlogs, searchLoading, dispatch, blogs]);

  if(isLoading==true){
    return (
      <main className=" text-center container mx-auto px-6 sticky top-0 bg-gray-50 max-w-[78%] py-5  ">
       
     loading
      
      </main>
    )
  }
  
  return (
   
   <>
       <CategoryBadges  setFilterCategory={setFilterCategory} />
       <main className="  container mx-auto px-6 sticky top-0 bg-gray-50 max-w-[78%] py-5  ">
       
       <DisplayedBlogs blogs={displayedData?.data}/>
       
       </main></>
    
  );
};

export default HomeDisplayData;
