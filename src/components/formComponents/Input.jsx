import PropTypes from "prop-types";

const Input = ({
  handleInputChange,
  value,
  name,
  type="text",
  className,
  placeholder,
}) => {
  return (
    <div className=  {`${className} sm:flex`}>
      <input
        onChange={handleInputChange}
        value={value}
        name={name}
        id="af-account-full-name"
        type={type}
        className={`w-full p-3 border rounded-lg 
          focus:outline-none focus:ring-2
           focus:ring-blue-500 block 
            bg-gray-50  border-gray-100 
             shadow-sm -mt-px -ms-px 
         
          text-sm relative focus:z-10 
           disabled:opacity-50 
           disabled:pointer-events-none dark:bg-slate-900
            dark:border-gray-700 dark:text-gray-400
             dark:focus:ring-gray-600  
             `}
        placeholder={placeholder ?? placeholder}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  setValue: PropTypes.func,
  type:PropTypes.string,
  className: PropTypes.any,
  handleInputChange: PropTypes.func.isRequired,
};
