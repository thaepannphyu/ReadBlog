

import PropTypes from "prop-types";



const DropDown=({setFilterCategory,data}) =>{
  
 const handleChange=(e)=>{
  setFilterCategory(e.target.value)
 }
  return (

          <select name="category"  onChange={handleChange}>
            <option value="">ALL</option>
              {data?.map((each,index) => (
                
                  <option key={index} value={each.name}>{each.name}</option>
              ))}
           </select>
         
  )
}

export default DropDown;
DropDown.propTypes={
  setFilterCategory:PropTypes.func.isRequired,
  data:PropTypes.array
}