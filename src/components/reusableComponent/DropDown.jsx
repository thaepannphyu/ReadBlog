

import PropTypes from "prop-types";



const DropDown=(props) =>{
  
 
  return (

          <select name="category"  onChange={(e)=>props?.handleInputChange(e)}>
            <option value="">ALL</option>
              {props?.data?.map((each,index) => (
                
                  <option key={index} value={each.name}>{each.name}</option>
              ))}
           </select>
         
  )
}

export default DropDown;
DropDown.propTypes={
  handleInputChange:PropTypes.func.isRequired,
  data:PropTypes.array
}