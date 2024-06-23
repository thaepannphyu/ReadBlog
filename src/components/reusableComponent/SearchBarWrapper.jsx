import { useMemo} from "react";
import Search from "./Search"
import DropDown from "./DropDown";
import { useGetCategoriesQuery } from "../../App/Category/CategoryApi";
import PropTypes from "prop-types"



const SearchBarWrapper = ({setFilterCategory}) => {

  
  const {data:catdata,isLoading}=useGetCategoriesQuery();

  const categories = useMemo(() => (isLoading ? [] : catdata?.data || []), [isLoading, catdata]);


  return (
    <div className="ms-auto">
       <div className="relative flex rounded-lg shadow-sm">
        {/* handle setting value onchange in react custom hook */}
          <DropDown data={categories}  setFilterCategory={setFilterCategory} />

        {/* handle setting value onchange in Rtk State Management ( inside blogFilteredQuery)*/}
          <Search />
       </div>
    </div>

  )
}

export default SearchBarWrapper


SearchBarWrapper.propTypes={
  setFilterCategory:PropTypes.func.isRequired
}