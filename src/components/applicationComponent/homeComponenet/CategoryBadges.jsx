import { nanoid } from "@reduxjs/toolkit";
import { useGetCategorieByPageLimitQuery } from "../../../App/Category/CategoryApi";
import {  useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";


//needed to refactor

const CategoryBadges = ({setFilterCategory}) => {

  const [catLimit, setCatLimit] = useState(10);
  const [activeCondition, setactiveCondition] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterActive,setFilterActive]=useState(-1);
  
  const loading=useSelector((state)=>state.loadingSlice.isLoading);
 
  const { data: categories } = useGetCategorieByPageLimitQuery({
    catLimit,page:currentPage
  });

  useEffect(()=>{
    setactiveCondition(loading==true?false:true);
  },[loading])

  //currently both all and new might use this method
  const fetchNew = () => {
    setCatLimit(10);
    setFilterCategory("");
    setCurrentPage(1);
    setFilterActive(-1);
  };

  const fetchNextCat = () => {
    setCatLimit(10);
    if(currentPage<categories?.meta?.last_page){
      setCurrentPage(currentPage+1);}
      if(currentPage==categories?.meta?.last_page){
        setCurrentPage(1);}
    
  };

 
const handleFilter=(category)=>{
  setFilterCategory(category.name);
  setFilterActive(category.id);
}


  
  return (
    <section className=" container mx-auto px-6 sticky top-[50px] bg-gray-50 max-w-[78%] py-5 ">
      <div className="flex flex-row flex-nowrap overflow-hidden items-center justify-between">
      <button
          type="button"
          onClick={fetchNew}
          className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white"
        >
          All
        </button>
        {categories?.data.map((category) => (
          <button
          onClick={()=> handleFilter(category)}
            key={nanoid()}
            className={`${filterActive==category.id && activeCondition==true?"bg-gray-500 text-white":"bg-gray-100 text-gray-800"} inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium   dark:bg-white/10 dark:text-white`}
          >
            {category.name}
          </button>
        ))}
        <button
          type="button"
          onClick={fetchNew}
          className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white"
        >
          New
        </button>
        <button
          type="button"
          onClick={fetchNextCat}
          className="inset-y-0 end-0 inline-flex justify-center items-center w-[46px] py-2 text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default CategoryBadges;

CategoryBadges.propTypes={
  setFilterCategory:PropTypes.func,
  
}