import { useEffect, useMemo, useState } from "react";
import Search from "./Search"
import DropDown from "./DropDown";
import { useGetCategoriesQuery } from "../../App/Category/CategoryApi";
import { useDispatch } from "react-redux";
import { setQuery } from "../../App/Blog/BlogQueryFilterSlice";



const SearchBarWrapper = () => {
  const [queryParams, setQueryParams] = useState({}); // State to hold query parameters
  
  const {data:catdata,isLoading}=useGetCategoriesQuery();

  const categories = useMemo(() => (isLoading ? [] : catdata?.data || []), [isLoading, catdata]);
  const dispatch=useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };
  
  useEffect(() => {
   
      dispatch(setQuery(queryParams));
    
  }, [queryParams, dispatch]);

  return (
    <div className="ms-auto">
       <div className="relative flex rounded-lg shadow-sm">
          <DropDown data={categories}  handleInputChange={handleInputChange} />
          <Search handleInputChange={handleInputChange} />
       </div>
    </div>

  )
}

export default SearchBarWrapper
